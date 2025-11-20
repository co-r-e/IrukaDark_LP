const THREE_MODULE_URL = 'https://cdn.jsdelivr.net/npm/three@0.181.1/build/three.module.js';

// 遅延ロード用のヘルパー（ビューポートに入ってから / アイドル時に three.js を取得）
const loadThree = () => import(THREE_MODULE_URL);
let started = false;

const startIfNeeded = () => {
  if (started) return;
  started = true;
  loadThree().then(({ default: _, ...mod }) => initLaserAnimation(mod)).catch(() => {
    // 読み込み失敗時は演出をスキップ（機能に影響しない）
  });
};

// DOM 準備 + ビューポート監視で初期化を遅延
const ready = () => {
  const canvas = document.getElementById('hero-laser-canvas');
  if (!canvas) return; // 対象がないページでは何もしない

  // 動きの少ない環境では演出をスキップ
  const prefersReduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduceMotion) return;

  const heroSection = canvas.parentElement;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some(e => e.isIntersecting)) {
        io.disconnect();
        if ('requestIdleCallback' in window) {
          requestIdleCallback(startIfNeeded, { timeout: 1200 });
        } else {
          setTimeout(startIfNeeded, 150);
        }
      }
    }, { rootMargin: '80px' });
    io.observe(heroSection);
  } else {
    // フォールバック：少し遅らせて実行
    setTimeout(startIfNeeded, 200);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function initLaserAnimation(THREE) {
  const canvas = document.getElementById('hero-laser-canvas');
  if (!canvas) return; // DOM 遅延で要素がなくなっていた場合

  const heroSection = canvas.parentElement;

  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0, 0, 15); // Ensure camera is centered

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: false, // Disable antialiasing for better performance
    powerPreference: 'high-performance'
  });

  // Performance detection
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const coreCount = typeof navigator.hardwareConcurrency === 'number' ? navigator.hardwareConcurrency : 8;
  const isLowPerformance = isMobile || coreCount <= 4;

  // Set canvas size to match hero section
  const updateCanvasSize = () => {
    const rect = heroSection.getBoundingClientRect();
    const pixelRatio = isLowPerformance ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2);
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(pixelRatio);
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };

  updateCanvasSize();

  // Animation control
  let isVisible = true;
  let isInViewport = true;
  let animationFrameId = null;

  // Create laser system
  const lasers = [];
  const maxLasers = isLowPerformance ? 25 : 35; // Reduced from 50
  const laserLength = 8; // Length of each laser beam
  const laserSpeed = 0.5; // Speed of laser travel (faster to clear screen quicker)
  const laserOriginY = 1; // Offset Y position slightly above center
  const enableGlow = !isLowPerformance; // Disable glow on low-performance devices

  // Reusable geometries (create once, reuse for all lasers)
  const laserWidth = 0.05;
  const glowWidth = 0.12;
  const sharedLaserGeometry = new THREE.PlaneGeometry(laserLength, laserWidth);
  const sharedGlowGeometry = new THREE.PlaneGeometry(laserLength, glowWidth);

  // Function to create a new laser (mesh-based)
  function createLaser() {
    const angle = Math.random() * Math.PI * 2;

    // Color palette: Pink gradient only
    const hue = 300 + Math.random() * 40; // 300-340 (pink-magenta range)
    const lightness = 0.5 + Math.random() * 0.3; // 0.5-0.8
    const color = new THREE.Color().setHSL(hue / 360, 0.8, lightness);
    const glowColor = new THREE.Color().setHSL(hue / 360, 0.7, Math.min(lightness * 1.2, 0.9));

    // Create main laser mesh (reuse geometry)

    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const mesh = new THREE.Mesh(sharedLaserGeometry, material);
    mesh.rotation.z = angle;

    // Create glow mesh (reuse geometry) - only if enabled
    let glowMesh = null;
    if (enableGlow) {
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      glowMesh = new THREE.Mesh(sharedGlowGeometry, glowMaterial);
      glowMesh.rotation.z = angle;
      glowMesh.position.z = -0.01; // Slightly behind
      scene.add(glowMesh);
    }

    scene.add(mesh);

    return {
      mesh: mesh,
      glowMesh: glowMesh,
      angle: angle,
      distance: 0,
      speed: laserSpeed * (0.8 + Math.random() * 0.4),
      life: 1.0
    };
  }

  // Animation variables
  let time = 0;
  let lastLaserTime = 0;
  const laserInterval = isLowPerformance ? 0.12 : 0.10; // Slower spawn on low-performance devices

  // Animation loop
  function animate() {
    // Only continue if visible and in viewport
    if (!isVisible || !isInViewport) {
      animationFrameId = null;
      return;
    }

    animationFrameId = requestAnimationFrame(animate);

    time += 0.016; // Approximately 60fps

    // Spawn new lasers
    if (time - lastLaserTime > laserInterval && lasers.length < maxLasers) {
      lasers.push(createLaser());
      lastLaserTime = time;
    }

    // Update and remove old lasers
    for (let i = lasers.length - 1; i >= 0; i--) {
      const laser = lasers[i];

      // Move laser outward
      laser.distance += laser.speed;

      // Fade out as it travels
      laser.life -= 0.008;

      if (laser.life <= 0 || laser.distance > 40) {
        // Remove laser and glow
        scene.remove(laser.mesh);
        if (laser.glowMesh) {
          scene.remove(laser.glowMesh);
          laser.glowMesh.material.dispose();
        }
        // Only dispose materials (geometry is shared, don't dispose)
        laser.mesh.material.dispose();
        lasers.splice(i, 1);
        continue;
      }

      // Update laser position (center of the beam moves outward)
      const centerDistance = laser.distance + laserLength / 2;
      const x = Math.cos(laser.angle) * centerDistance;
      const y = Math.sin(laser.angle) * centerDistance + laserOriginY;

      laser.mesh.position.x = x;
      laser.mesh.position.y = y;
      if (laser.glowMesh) {
        laser.glowMesh.position.x = x;
        laser.glowMesh.position.y = y;
      }

      // Update opacity based on life
      laser.mesh.material.opacity = laser.life * 0.9;
      if (laser.glowMesh) {
        laser.glowMesh.material.opacity = laser.life * 0.3;
      }
    }

    renderer.render(scene, camera);
  }

  // Handle window resize
  function handleResize() {
    updateCanvasSize();
  }

  window.addEventListener('resize', handleResize);

  // Intersection Observer - pause when out of viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isInViewport = entry.isIntersecting;
      if (isInViewport && isVisible && !animationFrameId) {
        animate(); // Resume animation
      }
    });
  }, { threshold: 0 });

  observer.observe(heroSection);

  // Page Visibility API - pause when tab is not active
  function handleVisibilityChange() {
    isVisible = !document.hidden;
    if (isVisible && isInViewport && !animationFrameId) {
      animate(); // Resume animation
    }
  }

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Start animation
  animate();

  // Cleanup function
  window.addEventListener('beforeunload', () => {
    // Cancel animation frame
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    // Remove event listeners
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    observer.disconnect();
    // Dispose resources
    renderer.dispose();
    lasers.forEach(laser => {
      scene.remove(laser.mesh);
      if (laser.glowMesh) {
        scene.remove(laser.glowMesh);
        laser.glowMesh.material.dispose();
      }
      laser.mesh.material.dispose();
    });
    // Dispose shared geometries
    sharedLaserGeometry.dispose();
    if (enableGlow) {
      sharedGlowGeometry.dispose();
    }
  });
}
