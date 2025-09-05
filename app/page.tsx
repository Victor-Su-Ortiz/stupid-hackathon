"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EventDetails from "@/components/EventDetails";
import Schedule from "@/components/Schedule";
import ProjectsGallery from "@/components/ProjectsGallery";
import Sponsors from "@/components/Sponsors";
import PrizeSection from "@/components/PrizeSection";
import Footer from "@/components/Footer";
import KonamiCode from "@/components/KonamiCode";
import InteractiveCursor from "@/components/InteractiveCursor";
import ChaosModeToggle from "@/components/ChaosModeToggle";
import InteractiveMiniGame from "@/components/InteractiveMiniGame";
import GhibliBackground from "@/components/GhibliBackground";
import AIArtEffects from "@/components/AIArtEffects";
import MatchaElements from "@/components/MatchaElements";

export default function Home() {
  useEffect(() => {
    // Add random page behaviors
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100 && Math.random() > 0.99) {
        document.body.style.transform = `rotate(${Math.random() * 2 - 1}deg)`;
        setTimeout(() => {
          document.body.style.transform = "rotate(0deg)";
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GhibliBackground />
      <AIArtEffects />
      <MatchaElements />
      <InteractiveCursor />
      <ChaosModeToggle />
      <InteractiveMiniGame />
      <KonamiCode />
      <Navigation />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <EventDetails />
        <Schedule />
        <ProjectsGallery />
        <PrizeSection />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}