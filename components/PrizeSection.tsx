"use client";

import { motion } from "framer-motion";
import { Trophy, Gift, Star, ExternalLink, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LUMA_REGISTRATION_URL } from "@/lib/constants";

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
            <Trophy className="inline-block w-12 h-12 mb-2 text-accent" />
            <br />
            <span className="text-accent">The Grand Prize</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A one-of-one collector&apos;s piece, equal parts trophy and art
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
                  {/* Removed trophy emoji */}
                </motion.div>

                {/* Labubu Image/Placeholder */}
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 mb-6">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src="/labubu-prize.png"
                      alt="Custom Labubu with Diamonds and Pearls"
                      fill
                      className="object-contain"
                      onError={(e) => {
                        // Fallback to emoji if image doesn't exist yet
                        e.currentTarget.style.display = 'none';
                        const fallback = document.getElementById('labubu-fallback');
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <motion.div
                      id="labubu-fallback"
                      className="text-6xl text-center"
                      style={{ display: 'none' }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {/* Removed diamond emoji */}
                    </motion.div>
                  </div>
                  <p className="text-center mt-4 font-bold text-dark text-lg">
                    Custom Labubu with Diamonds & Pearls
                  </p>
                  <p className="text-center text-dark/70 text-sm">
                    Hand-adorned with diamonds and pearls by Kyle Chan
                  </p>
                  <p className="text-center text-primary text-xs mt-1">
                    Crafted exclusively in Los Angeles for this event
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
                  {/* Removed sparkle emoji */}
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
              <h3 className="text-3xl font-bold mb-6">Designed by Kyle Chan</h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <p className="text-white/90 mb-4 leading-relaxed">
                  Custom-made by celebrity jeweler <span className="font-bold text-accent">Kyle Chan</span>, 
                  whose work has been worn by <span className="font-semibold">Beyonc&eacute;</span>, 
                  featured in <span className="font-semibold">La La Land</span> on Emma Stone, 
                  and celebrated across Bravo&apos;s <span className="font-semibold">Vanderpump Rules</span> and 
                  <span className="font-semibold">RHOBH</span>.
                </p>
                <p className="text-white/80 mb-4">
                  Recently profiled by the <span className="font-semibold">New York Times</span> as 
                  &ldquo;the unofficial jeweler to the stars on Bravo&rdquo;
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="https://www.nytimes.com/2025/06/10/style/kyle-chan-jewelry-bravo-reality-tv.html"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read NYT Article
                  </Link>
                  <Link
                    href="https://instagram.com/kylechandesign"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    @kylechandesign
                  </Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Gift className="w-6 h-6 mt-1 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-lg mb-1">One-of-One Collector&apos;s Piece</p>
                    <p className="text-white/80">
                      Exclusively crafted for this event - truly unique
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Trophy className="w-6 h-6 mt-1 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-lg mb-1">Celebrity Craftsmanship</p>
                    <p className="text-white/80">
                      Custom diamonds and pearls added by a jeweler to the stars
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3"
                  whileHover={{ x: 10 }}
                >
                  <Star className="w-6 h-6 mt-1 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-semibold text-lg mb-1">True Flex for Creative Genius</p>
                    <p className="text-white/80">
                      A trophy worthy of your wonderfully unconventional ideas
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Strikethrough text */}
              <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-lg">
                  <span className="line-through text-white/50">Amazon Gift Card</span>{" "}
                  <span className="text-accent font-bold">NO</span>
                </p>
                <p className="text-lg">
                  <span className="line-through text-white/50">Cash Prize</span>{" "}
                  <span className="text-accent font-bold">NO</span>
                </p>
                <p className="text-lg">
                  <span className="line-through text-white/50">Useful Tech Gadget</span>{" "}
                  <span className="text-accent font-bold">NO</span>
                </p>
                <p className="text-lg font-bold text-accent mt-2">
                  Custom Labubu with Diamonds by Kyle Chan - YES
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
            <Link href={LUMA_REGISTRATION_URL} target="_blank">
              <motion.button
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Compete for This Masterpiece
              </motion.button>
            </Link>
            <p className="text-white/70 mt-4 italic">
              * Custom-made in Los Angeles exclusively for this event
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
