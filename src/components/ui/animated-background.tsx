"use client";

import { useEffect, useRef } from 'react';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDots = () => {
      const dots: Dot[] = [];
      // Reduce dots on mobile for better performance
      const isMobile = canvas.width < 768;
      const divisor = isMobile ? 40000 : 30000;
      const numberOfDots = Math.floor((canvas.width * canvas.height) / divisor);
      
      for (let i = 0; i < numberOfDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
      
      dotsRef.current = dots;
    };

    const drawDot = (dot: Dot) => {
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fill();
    };

    const drawLine = (dot1: Dot, dot2: Dot, distance: number) => {
      const opacity = Math.max(0, 1 - distance / 150);
      ctx.beginPath();
      ctx.moveTo(dot1.x, dot1.y);
      ctx.lineTo(dot2.x, dot2.y);
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity * 0.1})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const updateDot = (dot: Dot) => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Bounce off edges
      if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;

      // Keep within bounds
      dot.x = Math.max(0, Math.min(canvas.width, dot.x));
      dot.y = Math.max(0, Math.min(canvas.height, dot.y));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const dots = dotsRef.current;

      // Update and draw dots
      dots.forEach(dot => {
        updateDot(dot);
        drawDot(dot);
      });

      // Draw connections
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            drawLine(dots[i], dots[j], distance);
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createDots();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createDots();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
