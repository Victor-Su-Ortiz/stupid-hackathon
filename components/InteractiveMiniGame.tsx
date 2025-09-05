"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function InteractiveMiniGame() {
  const [isVisible, setIsVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targets, setTargets] = useState<Array<{ id: number; x: number; y: number; emoji: string }>>([]);

  const emojis = ['🎪', '🤡', '🎨', '🚀', '💥', '✨', '🌈', '🎊', '🦄', '💯'];

  useEffect(() => {
    // Show mini-game after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
  }, [isPlaying, timeLeft]);

  const startGame = () => {
    setIsPlaying(true);
    setScore(0);
    setTimeLeft(10);
    setTargets([]);
    
    // Create targets every 500ms
    const targetInterval = setInterval(() => {
      if (isPlaying && timeLeft > 0) {
        setTargets(prev => [...prev, {
          id: Date.now(),
          x: Math.random() * 80 + 10, // 10% to 90% of screen width
          y: Math.random() * 60 + 20, // 20% to 80% of screen height
          emoji: emojis[Math.floor(Math.random() * emojis.length)]
        }]);
      }
    }, 500);

    return () => clearInterval(targetInterval);
  };

  const hitTarget = (targetId: number) => {
    setScore(prev => prev + 1);
    setTargets(prev => prev.filter(target => target.id !== targetId));
  };

  const closeGame = () => {
    setIsVisible(false);
    setIsPlaying(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
          >
            <button
              onClick={closeGame}
              className="absolute top-4 right-4 text-2xl hover:text-red-500"
            >
              ×
            </button>

            <h3 className="text-2xl font-bold text-center mb-4">🎪 Hackathon Target Practice 🎪</h3>
            
            {!isPlaying ? (
              <div className="text-center">
                <p className="mb-4">Click the floating emojis to score points!</p>
                <p className="text-sm text-gray-600 mb-6">You have 10 seconds. Ready?</p>
                <button
                  onClick={startGame}
                  className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/80 transition-colors"
                >
                  Start Game! 🚀
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">Score: {score}</span>
                  <span className="font-bold">Time: {timeLeft}s</span>
                </div>
                
                <div className="relative h-64 bg-gray-100 rounded-lg overflow-hidden">
                  {targets.map((target) => (
                    <motion.button
                      key={target.id}
                      className="absolute text-3xl hover:scale-110 transition-transform"
                      style={{
                        left: `${target.x}%`,
                        top: `${target.y}%`,
                      }}
                      onClick={() => hitTarget(target.id)}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      {target.emoji}
                    </motion.button>
                  ))}
                </div>
                
                <p className="mt-4 text-sm text-gray-600">
                  Click the emojis as fast as you can! 🎯
                </p>
              </div>
            )}

            {!isPlaying && score > 0 && (
              <div className="mt-4 text-center">
                <p className="text-lg font-bold text-primary">
                  Final Score: {score} points! 🎉
                </p>
                <p className="text-sm text-gray-600">
                  {score >= 20 ? "You're a chaos master! 🌪️" : 
                   score >= 10 ? "Not bad! Keep practicing! 💪" : 
                   "Keep trying! You'll get better! 🎯"}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
