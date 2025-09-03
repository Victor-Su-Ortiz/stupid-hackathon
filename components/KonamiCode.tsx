"use client";
import confetti from "canvas-confetti";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export default function KonamiCode() {
  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#FF6B6B", "#4ECDC4", "#FFD93D", "#A8E6CF"],
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#FF6B6B", "#4ECDC4", "#FFD93D", "#A8E6CF"],
      });
    }, 250);

    // Also show an alert or modal
    setTimeout(() => {
      alert("🎉 KONAMI CODE ACTIVATED! You found the secret! You're now officially a chaos agent! 🤪");
    }, 500);
  };

  useKonamiCode(triggerConfetti);

  return null;
}
