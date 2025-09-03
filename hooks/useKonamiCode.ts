"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode(callback: () => void) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key === "b" || e.key === "a" ? e.key : e.key;
      
      if (key === KONAMI_CODE[currentIndex]) {
        if (currentIndex === KONAMI_CODE.length - 1) {
          callback();
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
      } else {
        setCurrentIndex(0);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, callback]);

  return currentIndex;
}
