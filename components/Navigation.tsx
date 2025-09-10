"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn, getRandomColor } from "@/lib/utils";
import { AIVALLEY_URL, LUMA_REGISTRATION_URL } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [bgColor, setBgColor] = useState("#FF6B6B");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      if (scrolled) {
        setBgColor(getRandomColor());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: "About", emoji: "📖" },
    { href: "#venue", label: "Venue", emoji: "📍" },
    { href: "#schedule", label: "Schedule", emoji: "⏳" },
    { href: "#projects", label: "Projects", emoji: "💡" },
    { href: "#sponsors", label: "Sponsors", emoji: "💸" },
    { href: AIVALLEY_URL, label: "Contact", emoji: "📬" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-3 shadow-lg" : "py-4"
      )}
      style={{
        backgroundColor: isScrolled ? bgColor : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl animate-bounce">🤪</span>
              <span className="text-xl font-bold text-white drop-shadow-lg">Dumb Hackathon</span>
            </Link>
            <Link 
              href={AIVALLEY_URL} 
              target="_blank"
              className="hidden lg:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <span className="text-sm text-white/90">In collaboration with</span>
              <div className="flex items-center gap-1">
                <Image 
                  src="/ai-valley.png" 
                  alt="AI Valley" 
                  width={80} 
                  height={24}
                  className="h-5 w-auto"
                  onError={(e) => {
                    // Fallback to text if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-sm font-bold text-white">AI Valley</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="flex items-center gap-1.5 text-white hover:text-accent transition-colors"
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
            <Link
              href={LUMA_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-accent text-dark font-bold rounded-full hover:bg-secondary transition-colors hover:scale-105 transform"
            >
              <span>Register Now</span>
              <span>🎪</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              <Link 
                href={AIVALLEY_URL} 
                target="_blank"
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg"
              >
                <span className="text-sm text-white/90">In collaboration with</span>
                <div className="flex items-center gap-1">
                  <Image 
                    src="/ai-valley.png" 
                    alt="AI Valley" 
                    width={60} 
                    height={20}
                    className="h-4 w-auto"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="text-sm font-bold text-white">AI Valley</span>
                </div>
              </Link>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  className="flex items-center gap-2 text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg">{item.emoji}</span>
                  <span className="text-base">{item.label}</span>
                </Link>
              ))}
              <Link
                href={LUMA_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-accent text-dark font-bold rounded-full hover:bg-secondary transition-colors w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Register Now</span>
                <span>🎪</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
