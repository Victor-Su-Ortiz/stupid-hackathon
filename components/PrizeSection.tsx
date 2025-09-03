"use client";

import { motion } from "framer-motion";
import { Trophy, Gift, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function PrizeSection() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-primary to-secondary relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-white rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-20, 20],
            x: [-10, 10],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="comic-sans">The Grand Prize</span>
          </h2>
          <p className="text-xl text-white/90">
            Because who needs another boring Amazon gift card?
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Prize Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl p-12 relative"
                animate={{
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Trophy Icon */}
                <motion.div
                  className="text-8xl text-center mb-6"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  🏆
                </motion.div>

                {/* Labubu Image/Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 mb-6">
                  <motion.div
                    className="text-6xl text-center"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    🎁
                  </motion.div>
                  <p className="text-center mt-4 font-bold text-dark">
                    Limited Edition Labubu
                  </p>
                  <p className="text-center text-dark/70 text-sm">
                    (Actual prize may vary in stupidity)
                  </p>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.div
                      key={star}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: star * 0.1 }}
                    >
                      <Star className="w-6 h-6 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Sparkles around the prize */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.div
                  key={angle}
                  className="absolute text-2xl"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(150px)`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: angle / 360,
                  }}
                >
                  ✨
                </motion.div>
              ))}
            </motion.div>

            {/* Prize Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h3 className="text-3xl font-bold mb-6 comic-sans">Why This Prize?</h3>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Gift className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Utterly Useless</p>
                    <p className="text-white/80">
                      Perfect for your collection of things you&apos;ll never use
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Trophy className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Conversation Starter</p>
                    <p className="text-white/80">
                      &quot;Why do you have that?&quot; - Everyone who sees it
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Star className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Instagram Worthy</p>
                    <p className="text-white/80">
                      At least 12 likes guaranteed (mostly from bots)
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Strikethrough text */}
              <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-lg">
                  <span className="line-through text-white/50">Amazon Gift Card</span>{" "}
                  <span className="text-accent font-bold">✗</span>
                </p>
                <p className="text-lg">
                  <span className="line-through text-white/50">Cash Prize</span>{" "}
                  <span className="text-accent font-bold">✗</span>
                </p>
                <p className="text-lg">
                  <span className="line-through text-white/50">Useful Tech Gadget</span>{" "}
                  <span className="text-accent font-bold">✗</span>
                </p>
                <p className="text-lg font-bold text-accent mt-2">
                  Gloriously Stupid Labubu ✓
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Win This Masterpiece of Stupidity 🎯
            </motion.button>
            <p className="text-white/70 mt-4 italic">
              * Prize subject to availability and our definition of &quot;stupid&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
