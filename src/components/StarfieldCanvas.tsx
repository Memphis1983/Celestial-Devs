import React, { useEffect, useRef } from 'react';

export const StarfieldCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate stars
    const starCount = Math.floor((width * height) / 9000);
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      isGold: Math.random() > 0.8,
      twinkleSpeed: Math.random() * 0.02 + 0.005
    }));

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint gold cosmic dust gradient top right
      const bgGlow = ctx.createRadialGradient(
        width * 0.75,
        height * 0.2,
        10,
        width * 0.75,
        height * 0.2,
        width * 0.5
      );
      bgGlow.addColorStop(0, 'rgba(226, 184, 89, 0.04)');
      bgGlow.addColorStop(0.5, 'rgba(15, 23, 42, 0.02)');
      bgGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw stars and interactive mouse links
      stars.forEach((star, index) => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Twinkle
        star.alpha += Math.sin(Date.now() * star.twinkleSpeed + index) * 0.005;
        const currentAlpha = Math.max(0.1, Math.min(0.85, star.alpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = star.isGold
          ? `rgba(243, 209, 121, ${currentAlpha})`
          : `rgba(241, 245, 249, ${currentAlpha})`;
        ctx.fill();

        // Connect nearby stars to mouse if close
        const dx = mouseX - star.x;
        const dy = mouseY - star.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = star.isGold
            ? `rgba(226, 184, 89, ${(1 - dist / 110) * 0.25})`
            : `rgba(148, 163, 184, ${(1 - dist / 110) * 0.15})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
