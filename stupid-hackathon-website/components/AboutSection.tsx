"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, Zap, Coffee, Code } from "lucide-react";

const cards = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Embrace the Chaos",
    description: "Where bad ideas become legendary disasters. We celebrate the art of building things nobody asked for.",
    color: "from-primary to-pink-400",
    rotation: -3,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Zero Practical Value",
    description: "If it's useful, you're doing it wrong. We measure success by how many people ask 'but why?'",
    color: "from-secondary to-blue-400",
    rotation: 2,
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "Fueled by Madness",
    description: "24 hours of pure, unfiltered stupidity. Caffeine, chaos, and Comic Sans. What could go wrong?",
    color: "from-accent to-orange-400",
    rotation: -2,
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Professional Stupidity",
    description: "We take being dumb very seriously. Every line of code is carefully crafted to be magnificently pointless.",
    color: "from-chaos to-green-400",
    rotation: 3,
  },
];

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 bg-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B6B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="comic-sans text-primary">What Is This</span>{" "}
            <span className="text-dark">Madness?</span>
          </h2>
          <p className="text-xl text-dark/70 max-w-2xl mx-auto">
            A hackathon where the worse your idea, the better. We're here to prove that 
            not all code needs to change the world. Some of it just needs to exist.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <motion.div
                className={`bg-gradient-to-br ${card.color} p-6 rounded-2xl shadow-lg h-full`}
                animate={{
                  rotate: hoveredCard === index ? [card.rotation, -card.rotation, card.rotation] : card.rotation,
                  scale: hoveredCard === index ? 1.05 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white">
                  <div className="mb-4 inline-block p-3 bg-white/20 rounded-lg">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2" style={{
                    fontFamily: Math.random() > 0.5 ? "'Comic Sans MS', cursive" : "inherit"
                  }}>
                    {card.title}
                  </h3>
                  <p className="text-white/90">
                    {card.description}
                  </p>
                </div>
              </motion.div>
              
              {/* Random floating element on hover */}
              {hoveredCard === index && (
                <motion.div
                  className="absolute -top-4 -right-4 text-4xl"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  exit={{ scale: 0 }}
                >
                  {["🎪", "🤡", "🎨", "🚀"][index]}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-dark">Fun Facts About Our Stupidity</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">100%</p>
                <p className="text-dark/70">Useless Projects</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-secondary mb-2">0</p>
                <p className="text-dark/70">Practical Applications</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-accent mb-2">∞</p>
                <p className="text-dark/70">Laughs Generated</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
