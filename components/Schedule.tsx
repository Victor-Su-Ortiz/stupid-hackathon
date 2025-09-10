"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { SCHEDULE } from "@/lib/constants";

export default function Schedule() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  // Removed reactions for cleaner design

  // Removed reaction emojis for cleaner design

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Removed reaction function for cleaner design

  return (
    <section id="schedule" className="py-20 bg-white relative overflow-hidden">
      {/* Removed background pattern for cleaner design */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="comic-sans text-secondary">Event</span>{" "}
            <span className="text-dark">Schedule</span>
          </h2>
          <p className="text-xl text-dark/70">
            The full day agenda
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
                  />

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
                            <p className="text-dark/60">
                              Click to collapse
                            </p>
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
              Pro Tip: The schedule is more of a suggestion. 
              Chaos doesn&apos;t follow timelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
