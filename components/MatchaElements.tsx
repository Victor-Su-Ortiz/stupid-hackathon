"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MatchaElements() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show matcha elements after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* Matcha-inspired floating elements */}
      <motion.div
        className="absolute top-1/5 left-1/6 text-3xl matcha-sway"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        🍵
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-1/6 text-2xl matcha-sway"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        🍃
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/5 text-4xl matcha-sway"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        🌿
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/5 right-1/5 text-3xl matcha-sway"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.35, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        🍀
      </motion.div>
      
    </div>
  );
}
