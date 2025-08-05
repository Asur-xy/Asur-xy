// Three.js basic rotating icosahedron background

const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 4;

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Geometry & Material
const geometry = new THREE.IcosahedronGeometry(1, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x001f3f,
  wireframe: true,
  opacity: 0.3,
  transparent: true,
});

const icosahedron = new THREE.Mesh(geometry, material);
scene.add(icosahedron);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  icosahedron.rotation.x += 0.002;
  icosahedron.rotation.y += 0.003;
  renderer.render(scene, camera);
}

animate();

// Handle resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Dynamic year in footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}