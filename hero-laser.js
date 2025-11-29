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

/**
 * Generate a meteor-like gradient texture using an offscreen canvas.
 * The texture has a bright head on the right and fades out to the left.
 */
function createMeteorTexture(THREE) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  // Clear background
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Coordinates
  const w = canvas.width;
  const h = canvas.height;
  const cy = h / 2;
  const headX = w - 10; // Slightly offset from right edge
  const tailX = 0;
  const headRadius = 6;

  // Create gradient for the trail
  const gradient = ctx.createLinearGradient(tailX, 0, headX, 0);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
  gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.1)');
  gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.8)');
  gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

  // Draw glowing trail and head
  ctx.fillStyle = gradient;
  
  // Draw trail (tear-drop shape)
  ctx.beginPath();
  ctx.moveTo(tailX, cy);
  ctx.lineTo(headX, cy - headRadius * 0.8);
  ctx.lineTo(headX + headRadius, cy);
  ctx.lineTo(headX, cy + headRadius * 0.8);
  ctx.closePath();
  
  // Add glow effect
  ctx.shadowBlur = 15;
  ctx.shadowColor = 'white';
  ctx.fill();

  // Draw bright core at the head
  ctx.beginPath();
  ctx.arc(headX, cy, headRadius * 0.6, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.shadowBlur = 20;
  ctx.shadowColor = 'white';
  ctx.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
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
  const maxLasers = isLowPerformance ? 20 : 30; // Reduced count as textures are more visible
  const laserLength = 10; // Slightly longer
  const laserSpeed = 0.25; 
  const laserOriginY = 1;

  // Generate texture
  const meteorTexture = createMeteorTexture(THREE);

  // Reusable geometry
  // Widen geometry to accommodate the glow in texture (64px height texture vs 256px width ~ 1:4 ratio)
  // If length is 10, height should be around 2.5 to match texture aspect ratio
  const laserWidth = 2.0; 
  const sharedLaserGeometry = new THREE.PlaneGeometry(laserLength, laserWidth);

  // Function to create a new laser (mesh-based)
  function createLaser() {
    const angle = Math.random() * Math.PI * 2;

    // Color palette: Pink/Purple/Cyan gradient
    // More variation for "meteor" look
    const hue = 280 + Math.random() * 60; // 280-340 (purple to pink)
    const lightness = 0.6 + Math.random() * 0.3; // Bright
    const color = new THREE.Color().setHSL(hue / 360, 0.9, lightness);

    const material = new THREE.MeshBasicMaterial({
      map: meteorTexture,
      color: color,
      transparent: true,
      opacity: 1.0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const mesh = new THREE.Mesh(sharedLaserGeometry, material);
    mesh.rotation.z = angle;

    scene.add(mesh);

    return {
      mesh: mesh,
      angle: angle,
      distance: 2, // Start slightly away from center
      speed: laserSpeed * (0.8 + Math.random() * 0.6),
      life: 1.0
    };
  }

  // Animation variables
  let time = 0;
  let lastLaserTime = 0;
  const laserInterval = isLowPerformance ? 0.15 : 0.12;

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
      laser.life -= 0.003; // Last longer

      if (laser.life <= 0 || laser.distance > 45) {
        // Remove laser
        scene.remove(laser.mesh);
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

      // Update opacity based on life
      laser.mesh.material.opacity = laser.life;
      
      // Optional: scale down slightly as it dies
      // const scale = 0.5 + 0.5 * laser.life;
      // laser.mesh.scale.set(1, scale, 1);
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
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    window.removeEventListener('resize', handleResize);
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    observer.disconnect();
    renderer.dispose();
    lasers.forEach(laser => {
      scene.remove(laser.mesh);
      laser.mesh.material.dispose();
    });
    sharedLaserGeometry.dispose();
    meteorTexture.dispose();
  });
}
