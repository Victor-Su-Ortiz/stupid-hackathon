"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AIArtEffects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show AI art effects after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* AI Art inspired floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/5 text-4xl artistic-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        🎨
      </motion.div>
      
      <motion.div
        className="absolute top-1/3 right-1/5 text-3xl artistic-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        🤖
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/4 text-5xl artistic-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        ✨
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 text-3xl artistic-float"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        🌈
      </motion.div>
      
    </div>
  );
}
