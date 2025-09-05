"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChaosModeToggle() {
  const [isChaosMode, setIsChaosMode] = useState(false);

  useEffect(() => {
    if (isChaosMode) {
      document.body.classList.add('chaos-mode');
      
      // Add random elements to the page
      const addRandomElements = () => {
        const randomEmojis = ['🎪', '🤡', '🎨', '🚀', '💥', '✨', '🌈', '🎊'];
        const element = document.createElement('div');
        element.textContent = randomEmojis[Math.floor(Math.random() * randomEmojis.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * window.innerWidth + 'px';
        element.style.top = Math.random() * window.innerHeight + 'px';
        element.style.fontSize = '2rem';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1000';
        element.style.animation = 'float 2s ease-in-out infinite';
        element.style.opacity = '0.7';
        document.body.appendChild(element);

        setTimeout(() => element.remove(), 3000);
      };

      const interval = setInterval(addRandomElements, 500);
      return () => {
        clearInterval(interval);
        document.body.classList.remove('chaos-mode');
      };
    } else {
      document.body.classList.remove('chaos-mode');
    }
  }, [isChaosMode]);

  return (
    <motion.button
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
        isChaosMode 
          ? 'bg-red-500 text-white shadow-lg' 
          : 'bg-white/20 text-white backdrop-blur-sm hover:bg-white/30'
      }`}
      onClick={() => setIsChaosMode(!isChaosMode)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={isChaosMode ? { rotate: [0, 5, -5, 0] } : {}}
      transition={{ duration: 0.5, repeat: isChaosMode ? Infinity : 0 }}
    >
      {isChaosMode ? '🌪️ CHAOS MODE ON' : '🎪 Activate Chaos'}
    </motion.button>
  );
}
