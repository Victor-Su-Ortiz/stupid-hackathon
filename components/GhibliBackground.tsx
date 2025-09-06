"use client";

import { motion } from "framer-motion";

export default function GhibliBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Studio Ghibli elements - reduced for performance */}
      <motion.div
        className="absolute text-4xl ghibli-float opacity-20"
        style={{ top: '25%', left: '25%', animationDelay: '2s' }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute text-3xl ghibli-float opacity-15"
        style={{ bottom: '33%', left: '33%', animationDelay: '6s' }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute text-3xl ghibli-float opacity-10"
        style={{ bottom: '25%', right: '33%', animationDelay: '8s' }}
      >
        ✨
      </motion.div>
    </div>
  );
}
