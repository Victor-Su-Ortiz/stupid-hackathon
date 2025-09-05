"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { STUPID_EMOJIS, AIVALLEY_URL } from "@/lib/constants";
import { randomFromArray } from "@/lib/utils";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ emoji: string; id: number; x: number; y: number; speed: 'slow' | 'fast' }>>([]);
  const [showConfetti, setShowConfetti] = useState(false);
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

  useEffect(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    const emojis = Array.from({ length: 15 }, (_, i) => ({
      emoji: randomFromArray(STUPID_EMOJIS),
      id: i,
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() > 0.5 ? 'slow' : 'fast' as 'slow' | 'fast',
    }));
    setFloatingEmojis(emojis);
  }, []);

  const handleButtonClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 600);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Floating Emojis Background with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingEmojis.map((item) => (
          <motion.div
            key={item.id}
            className={`absolute text-6xl opacity-30 ${item.speed === 'slow' ? 'parallax-slow' : 'parallax-fast'}`}
            initial={{
              x: item.x,
              y: item.y,
              rotate: 0,
            }}
            animate={{
              x: item.x + (Math.random() - 0.5) * 200,
              y: item.y + (Math.random() - 0.5) * 200,
              rotate: 360,
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            whileHover={{
              scale: 1.2,
              rotate: 0,
              transition: { duration: 0.3 }
            }}
            onClick={() => {
              // Create explosion effect when clicking emojis
              const explosion = document.createElement('div');
              explosion.innerHTML = '💥✨🎊';
              explosion.style.position = 'fixed';
              explosion.style.left = `${item.x}px`;
              explosion.style.top = `${item.y}px`;
              explosion.style.fontSize = '2rem';
              explosion.style.pointerEvents = 'none';
              explosion.style.zIndex = '9999';
              explosion.style.animation = 'bounce 0.5s ease-out';
              document.body.appendChild(explosion);
              setTimeout(() => explosion.remove(), 500);
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Floating Labubu Mascot with AI Art glow */}
      <motion.div
        className="absolute top-20 right-10 text-8xl mascot-float pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        🦄
      </motion.div>

      {/* Peeking Meme Stickers */}
      <motion.div
        className="absolute bottom-20 left-10 text-4xl peek"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        🤡
      </motion.div>

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
            <span className="text-lg">🤝</span>
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
          <span className="inline-block">🛠️</span>{" "}
          <span className="comic-sans">The Stupid Hackathon</span>
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
            href="#register"
            className="px-8 py-4 bg-white text-primary font-bold text-lg rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleButtonClick}
          >
            Join the Chaos 🎪
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
            See Past Disasters 💥
          </motion.a>
        </motion.div>

        {/* Confetti Effect */}
        {showConfetti && (
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 20 }, (_, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl confetti-burst"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {['🎉', '✨', '🎊', '🌟', '💫'][Math.floor(Math.random() * 5)]}
              </motion.div>
            ))}
          </div>
        )}

        {/* Event Date with Glassmorphism */}
        <motion.div
          className="mt-12 glassmorphism rounded-2xl p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <p className="text-xl mb-2 font-bold">September 20th, 2025</p>
          <p className="text-lg opacity-90">@ TBD (Location to be announced)</p>
        </motion.div>
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
