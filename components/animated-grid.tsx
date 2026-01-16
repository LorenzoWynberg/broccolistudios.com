'use client';

import { useEffect, useRef } from 'react';

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gridSize = 60;
      const dotRadius = 1;

      // Get colors from CSS variables for theme support
      const isDark = document.documentElement.classList.contains('dark');
      const dotColor = isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)';
      const glowColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)';

      // Draw dots
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
          // Wave effect
          const wave = Math.sin(x * 0.01 + time * 0.5) * Math.cos(y * 0.01 + time * 0.3);
          const offsetX = wave * 3;
          const offsetY = Math.cos(x * 0.01 + y * 0.01 + time * 0.4) * 3;

          // Pulse effect for some dots
          const pulse = Math.sin(time + x * 0.05 + y * 0.05);
          const size = dotRadius + (pulse > 0.9 ? pulse * 2 : 0);
          const alpha = pulse > 0.9 ? 1 : 0;

          ctx.beginPath();
          ctx.arc(x + offsetX, y + offsetY, size, 0, Math.PI * 2);
          ctx.fillStyle = alpha > 0 ? glowColor : dotColor;
          ctx.fill();
        }
      }

      // Draw some connecting lines between nearby dots occasionally
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)';
      ctx.lineWidth = 0.5;

      for (let x = 0; x < canvas.width; x += gridSize * 2) {
        for (let y = 0; y < canvas.height; y += gridSize * 2) {
          const wave = Math.sin(x * 0.01 + time * 0.5);
          if (wave > 0.7) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + gridSize, y + gridSize);
            ctx.stroke();
          }
        }
      }

      time += 0.01;
      animationFrameId = requestAnimationFrame(drawGrid);
    };

    resize();
    drawGrid();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
