import React, { useEffect, useRef } from 'react';

const GalaxyBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class for stars
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = this.getColor();
      }

      getColor() {
        if (theme === 'light') {
          const colors = [
            'rgba(59, 130, 246, ',   // blue-500
            'rgba(139, 92, 246, ',   // purple-500
            'rgba(147, 51, 234, ',   // purple-600
            'rgba(37, 99, 235, ',    // blue-600
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        } else {
          const colors = [
            'rgba(147, 197, 253, ', // blue-300
            'rgba(167, 139, 250, ', // purple-400
            'rgba(196, 181, 253, ', // purple-300
            'rgba(255, 255, 255, ', // white
          ];
          return colors[Math.floor(Math.random() * colors.length)];
        }
      }

      update() {
        this.z -= this.speed;
        if (this.z <= 0) {
          this.reset();
          this.z = 1500;
        }
      }

      draw() {
        const x = (this.x - canvas.width / 2) * (1000 / this.z) + canvas.width / 2;
        const y = (this.y - canvas.height / 2) * (1000 / this.z) + canvas.height / 2;
        const s = this.size * (1000 / this.z);
        const opacity = this.opacity * (1 - this.z / 1500);

        ctx.fillStyle = this.color + opacity + ')';
        ctx.beginPath();
        ctx.arc(x, y, s, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect for larger particles
        if (s > 1.5) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = this.color + opacity + ')';
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }

    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    createParticles();

    // Animation loop
    const animate = () => {
      // Different background colors for light/dark theme
      if (theme === 'light') {
        ctx.fillStyle = 'rgba(248, 250, 252, 0.3)'; // Light background with trail
      } else {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.3)'; // Dark background with trail
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  const bgStyle = theme === 'light' 
    ? 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    : 'linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)';

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: bgStyle }}
    />
  );
};

export default GalaxyBackground;
