'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let nodes: Node[] = [];
    let mouseX = -1000;
    let mouseY = -1000;

    // Fewer nodes, longer connections for elegant look
    const connectionDistance = 200;
    const nodeCount = 50;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Slower, more graceful movement
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          radius: Math.random() * 2.5 + 1.5,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains('dark');
      // Gold/champagne tones for luxury feel
      const nodeColor = isDark ? 'rgba(194, 154, 108, 0.7)' : 'rgba(139, 109, 76, 0.5)';
      const lineColorBase = isDark ? [194, 154, 108] : [139, 109, 76];

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Move nodes slowly
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges smoothly
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Gentle mouse interaction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          node.x -= dx * 0.01;
          node.y -= dy * 0.01;
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distance = Math.sqrt(Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2));

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.25;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${lineColorBase.join(',')},${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw connection to mouse if close - brighter gold
        const mouseDist = Math.sqrt(Math.pow(node.x - mouseX, 2) + Math.pow(node.y - mouseY, 2));
        if (mouseDist < connectionDistance * 1.5) {
          const opacity = (1 - mouseDist / (connectionDistance * 1.5)) * 0.4;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${lineColorBase.join(',')},${opacity})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
        }

        // Draw node with subtle glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" aria-hidden="true" />;
}
