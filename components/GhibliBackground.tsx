"use client";

import { motion } from "framer-motion";

export default function GhibliBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Studio Ghibli elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-4xl ghibli-float opacity-20"
        style={{ animationDelay: '2s' }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-3xl ghibli-float opacity-15"
        style={{ animationDelay: '4s' }}
      >
        🍃
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3 text-5xl ghibli-float opacity-25"
        style={{ animationDelay: '6s' }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/3 text-3xl ghibli-float opacity-10"
        style={{ animationDelay: '8s' }}
      >
        ✨
      </motion.div>
      
      {/* Matcha-inspired floating elements */}
      <motion.div
        className="absolute top-1/2 left-1/6 text-2xl matcha-sway opacity-15"
        style={{ animationDelay: '1s' }}
      >
        🍵
      </motion.div>
      <motion.div
        className="absolute bottom-1/2 right-1/6 text-2xl matcha-sway opacity-12"
        style={{ animationDelay: '3s' }}
      >
        🍃
      </motion.div>
      
      {/* AI Art inspired floating elements */}
      <motion.div
        className="absolute top-1/6 right-1/6 text-3xl artistic-float opacity-20"
        style={{ animationDelay: '5s' }}
      >
        🎨
      </motion.div>
      <motion.div
        className="absolute bottom-1/6 left-1/6 text-3xl artistic-float opacity-15"
        style={{ animationDelay: '7s' }}
      >
        🤖
      </motion.div>
    </div>
  );
}
