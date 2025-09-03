"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Duck {
  id: number;
  x: number;
  y: number;
}

export default function DuckTrail() {
  const [ducks, setDucks] = useState<Duck[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Enable duck trail after a delay
    setTimeout(() => setEnabled(true), 3000);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newDuck: Duck = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setDucks((prevDucks) => {
        const updatedDucks = [...prevDucks, newDuck];
        // Keep only the last 5 ducks
        if (updatedDucks.length > 5) {
          return updatedDucks.slice(-5);
        }
        return updatedDucks;
      });

      // Remove duck after animation
      setTimeout(() => {
        setDucks((prevDucks) => prevDucks.filter((duck) => duck.id !== newDuck.id));
      }, 2000);
    };

    // Only add duck every 300ms
    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime > 300) {
        handleMouseMove(e);
        lastTime = now;
      }
    };

    window.addEventListener("mousemove", throttledMouseMove);
    return () => window.removeEventListener("mousemove", throttledMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {ducks.map((duck) => (
        <motion.div
          key={duck.id}
          className="duck-trail"
          initial={{ x: duck.x - 10, y: duck.y - 10, scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 2 }}
          style={{ position: "fixed", pointerEvents: "none", zIndex: 9999 }}
        >
          🦆
        </motion.div>
      ))}
    </>
  );
}
