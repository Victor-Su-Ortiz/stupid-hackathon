"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { PROJECT_IDEAS } from "@/lib/constants";
import confetti from "canvas-confetti";

export default function ProjectsGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [votes, setVotes] = useState<{ [key: number]: number }>({});

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECT_IDEAS.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECT_IDEAS.length) % PROJECT_IDEAS.length);
  };

  const handleVote = (index: number) => {
    setVotes({ ...votes, [index]: (votes[index] || 0) + 1 });
    
    // Trigger confetti
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ["#FF6B6B", "#4ECDC4", "#FFD93D", "#A8E6CF"],
    });
  };

  const currentProject = PROJECT_IDEAS[currentIndex];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Terrible</span>{" "}
            <span className="comic-sans text-dark">Project Ideas</span>
          </h2>
          <p className="text-xl text-dark/70">
            Get inspired by these magnificently pointless creations
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronLeft className="w-6 h-6 text-dark" />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform"
            >
              <ChevronRight className="w-6 h-6 text-dark" />
            </button>

            {/* Project Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, rotateY: -180, scale: 0.8 }}
                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, rotateY: 180, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
                  <div className="text-6xl mb-4 text-center">{currentProject.emoji}</div>
                  <h3 className="text-3xl font-bold text-center comic-sans">
                    {currentProject.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-8">
                  <p className="text-xl text-dark/80 mb-6 text-center">
                    {currentProject.description}
                  </p>

                  {/* Uselessness Meter */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-dark font-semibold">Uselessness Meter</span>
                      <span className="text-2xl font-bold text-primary">
                        {currentProject.uselessness}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-accent to-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${currentProject.uselessness}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Vote Section */}
                  <div className="flex justify-between items-center">
                    <motion.button
                      className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleVote(currentIndex)}
                    >
                      <Trophy className="w-5 h-5" />
                      Vote for Most Dumb
                      {votes[currentIndex] && (
                        <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                          {votes[currentIndex]}
                        </span>
                      )}
                    </motion.button>

                    <div className="text-dark/60">
                      {currentIndex + 1} / {PROJECT_IDEAS.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {PROJECT_IDEAS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-dark/20 hover:bg-dark/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Ideas Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-dark">
            More Gloriously Bad Ideas
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {["LinkedIn for pets 🐕", "Uber but for walking 🚶", "TikTok for spreadsheets 📊"].map((idea, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg"
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              >
                <p className="text-lg font-semibold text-dark comic-sans">{idea}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
