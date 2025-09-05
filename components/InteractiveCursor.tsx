"use client";

import { useEffect, useState } from "react";

export default function InteractiveCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [clickEffects, setClickEffects] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e);
      
      // Check if hovering over interactive elements (exclude images)
      const target = e.target as HTMLElement;
      const isImage = target.tagName === 'IMG' || target.closest('img');
      const isInteractive = !isImage && target.closest('a, button, [role="button"], .btn-enhanced, .interactive-element');
      setIsHovering(!!isInteractive);
    };

    const handleClick = (e: MouseEvent) => {
      // Don't create effects on images
      const target = e.target as HTMLElement;
      const isImage = target.tagName === 'IMG' || target.closest('img');
      
      if (isImage) return;

      // Create click effect
      const newEffect = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setClickEffects(prev => [...prev, newEffect]);

      // Remove effect after animation
      setTimeout(() => {
        setClickEffects(prev => prev.filter(effect => effect.id !== newEffect.id));
      }, 600);

      // Create particles
      createParticles(e.clientX, e.clientY);
    };

    const createParticles = (x: number, y: number) => {
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        particle.style.transform = `translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px)`;
        document.body.appendChild(particle);

        setTimeout(() => {
          particle.remove();
        }, 2000);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className={`interactive-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
      />

      {/* Click effects */}
      {clickEffects.map((effect) => (
        <div
          key={effect.id}
          className="click-effect"
          style={{
            left: effect.x,
            top: effect.y,
          }}
        />
      ))}
    </>
  );
}
