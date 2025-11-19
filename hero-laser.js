import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.181.1/build/three.module.js';

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLaserAnimation);
} else {
  initLaserAnimation();
}

function initLaserAnimation() {
  const canvas = document.getElementById('hero-laser-canvas');
  if (!canvas) return;

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

  // Set canvas size to match hero section
  const updateCanvasSize = () => {
    const rect = heroSection.getBoundingClientRect();
    renderer.setSize(rect.width, rect.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.aspect = rect.width / rect.height;
    camera.updateProjectionMatrix();
  };

  updateCanvasSize();

  // Create laser system
  const lasers = [];
  const maxLasers = 50; // Maximum number of lasers at once (reduced from 100)
  const laserLength = 8; // Length of each laser beam
  const laserSpeed = 0.5; // Speed of laser travel (faster to clear screen quicker)
  const laserOriginY = 1; // Offset Y position slightly above center

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

    // Create glow mesh (reuse geometry)
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const glowMesh = new THREE.Mesh(sharedGlowGeometry, glowMaterial);
    glowMesh.rotation.z = angle;
    glowMesh.position.z = -0.01; // Slightly behind

    scene.add(glowMesh);
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
  const laserInterval = 0.08; // Spawn a laser every 0.08 seconds (reduced frequency)

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

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
        scene.remove(laser.glowMesh);
        // Only dispose materials (geometry is shared, don't dispose)
        laser.mesh.material.dispose();
        laser.glowMesh.material.dispose();
        lasers.splice(i, 1);
        continue;
      }

      // Update laser position (center of the beam moves outward)
      const centerDistance = laser.distance + laserLength / 2;
      const x = Math.cos(laser.angle) * centerDistance;
      const y = Math.sin(laser.angle) * centerDistance + laserOriginY;

      laser.mesh.position.x = x;
      laser.mesh.position.y = y;
      laser.glowMesh.position.x = x;
      laser.glowMesh.position.y = y;

      // Update opacity based on life
      laser.mesh.material.opacity = laser.life * 0.9;
      laser.glowMesh.material.opacity = laser.life * 0.3;
    }

    renderer.render(scene, camera);
  }

  // Handle window resize
  function handleResize() {
    updateCanvasSize();
  }

  window.addEventListener('resize', handleResize);

  // Start animation
  animate();

  // Cleanup function
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', handleResize);
    renderer.dispose();
    lasers.forEach(laser => {
      scene.remove(laser.mesh);
      scene.remove(laser.glowMesh);
      laser.mesh.material.dispose();
      laser.glowMesh.material.dispose();
    });
    // Dispose shared geometries
    sharedLaserGeometry.dispose();
    sharedGlowGeometry.dispose();
  });
}
