"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SCHEDULE } from "@/lib/constants";

export default function Schedule() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [reactions, setReactions] = useState<{ [key: number]: string }>({});

  const reactionEmojis = ["😂", "🤯", "🔥", "💀", "🎉"];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const addReaction = (index: number, emoji: string) => {
    setReactions({ ...reactions, [index]: emoji });
  };

  return (
    <section id="schedule" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            ⏰
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="comic-sans text-secondary">Schedule of</span>{" "}
            <span className="text-dark">Chaos</span>
          </h2>
          <p className="text-xl text-dark/70">
            A carefully orchestrated descent into madness
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Wobbly connecting line */}
            <svg
              className="absolute left-8 top-0 bottom-0 w-1"
              style={{ height: "100%" }}
            >
              <path
                d={`M 2,0 Q 10,100 2,200 T 2,400 T 2,600 T 2,800 T 2,1000 T 2,1200 T 2,1400`}
                stroke="#4ECDC4"
                strokeWidth="3"
                fill="none"
                strokeDasharray="5,5"
                className="animate-pulse"
              />
            </svg>

            {/* Schedule Items */}
            <div className="space-y-6">
              {SCHEDULE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-5 w-6 h-6 bg-secondary rounded-full border-4 border-white shadow-lg"
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    transition={{ type: "spring" }}
                  >
                    <span className="absolute -left-1 -top-1 text-2xl">
                      {item.emoji}
                    </span>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    className="bg-gradient-to-r from-light to-white rounded-2xl shadow-lg p-6 cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleExpand(index)}
                    style={{
                      transform: `rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary font-bold text-lg">
                            {item.time}
                          </span>
                          {reactions[index] && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-2xl"
                            >
                              {reactions[index]}
                            </motion.span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-dark mb-1" style={{
                          fontFamily: index % 3 === 0 ? "'Comic Sans MS', cursive" : "inherit"
                        }}>
                          {item.activity}
                        </h3>
                        <p className="text-dark/70">{item.description}</p>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {expandedIndex === index ? (
                          <ChevronUp className="w-5 h-5 text-dark/50" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-dark/50" />
                        )}
                      </motion.div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-dark/10">
                            <p className="text-dark/60 mb-3">
                              React to this event:
                            </p>
                            <div className="flex gap-2">
                              {reactionEmojis.map((emoji) => (
                                <motion.button
                                  key={emoji}
                                  className="text-2xl p-2 hover:bg-accent/20 rounded-lg transition-colors"
                                  whileHover={{ scale: 1.2 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    addReaction(index, emoji);
                                  }}
                                >
                                  {emoji}
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="inline-block bg-accent/20 rounded-2xl p-6">
            <p className="text-dark font-semibold">
              💡 Pro Tip: The schedule is more of a suggestion. 
              Chaos doesn&apos;t follow timelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
