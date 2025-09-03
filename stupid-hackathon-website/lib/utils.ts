import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomColor() {
  const colors = ["#FF6B6B", "#4ECDC4", "#FFD93D", "#A8E6CF", "#9B59B6", "#3498DB"];
  return randomFromArray(colors);
}

export function getRandomRotation() {
  return Math.random() * 20 - 10; // -10 to 10 degrees
}

export function getRandomDelay() {
  return Math.random() * 2; // 0 to 2 seconds
}
