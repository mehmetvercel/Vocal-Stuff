const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let t = 0;

function drawWave(yOffset, freq, amp, speed, color) {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2 + yOffset);
  for (let x = 0; x <= canvas.width; x++) {
    const y = canvas.height / 2 + yOffset + Math.sin((x * freq + t * speed)) * amp;
    ctx.lineTo(x, y);
  }
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawWave(-60, 0.01, 20, 0.5, 'rgba(0,255,255,0.1)');
  drawWave(-30, 0.012, 15, 0.6, 'rgba(0,255,255,0.15)');
  drawWave(0,    0.015, 25, 0.4, 'rgba(0,255,255,0.2)');
  drawWave(30,   0.013, 18, 0.45, 'rgba(0,255,255,0.15)');
  drawWave(60,   0.011, 22, 0.35, 'rgba(0,255,255,0.1)');

  t++;
  requestAnimationFrame(animate);
}

animate();
