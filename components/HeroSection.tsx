"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { AIVALLEY_URL, LUMA_REGISTRATION_URL } from "@/lib/constants";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  // Removed floating emojis for cleaner design
  // Removed confetti for cleaner design
  const fullText = "Build the dumbest thing you can imagine. Seriously.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Removed emoji generation for cleaner design

  // Removed button click handler for confetti

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Removed floating emojis for cleaner design */}

      {/* Removed floating mascot for cleaner design */}

      {/* Removed peeking stickers for cleaner design */}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* AI Valley Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={AIVALLEY_URL}
            target="_blank"
            className="inline-flex items-center space-x-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-white transition-colors shadow-lg group"
          >
            <span className="text-dark font-semibold">In collaboration with</span>
            <div className="flex items-center gap-2">
              <Image 
                src="/ai-valley.png" 
                alt="AI Valley" 
                width={100} 
                height={30}
                className="h-8 w-auto group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-dark font-bold">AI Valley</span>
            </div>
          </Link>
        </motion.div>

        {/* Glitchy Title with Glow Effect */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-8 glitch glow-pulse"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="comic-sans">The Dumb Hackathon</span>
        </motion.h1>

        {/* Typewriter Tagline */}
        <motion.p
          className="text-2xl md:text-3xl text-white mb-12 h-16 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {typedText}
          <span className="animate-pulse">|</span>
        </motion.p>

        {/* CTA Buttons with Enhanced Interactions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href={LUMA_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Register Now
          </motion.a>
          <motion.a
            href="#projects"
            className="px-8 py-4 bg-dark/80 text-white font-bold text-lg rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #2C3E50, #FFD93D)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Example Projects
          </motion.a>
        </motion.div>

        {/* Removed confetti effect for cleaner design */}
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="text-white w-8 h-8" />
          <span className="text-white text-sm opacity-70">Scroll for chaos</span>
        </div>
      </motion.div>
    </section>
  );
}
