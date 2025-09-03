"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn, getRandomColor } from "@/lib/utils";
import { AIVALLEY_URL, CONTACT_EMAIL } from "@/lib/constants";

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
    { href: "#about", label: "About" },
    { href: "#schedule", label: "Schedule" },
    { href: "#projects", label: "Projects" },
    { href: "#sponsors", label: "Sponsors" },
    { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
      style={{
        backgroundColor: isScrolled ? bgColor : "transparent",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
              <span className="text-3xl animate-bounce">🤪</span>
              <span className="comic-sans text-white drop-shadow-lg">Stupid Hackathon</span>
            </Link>
            <Link 
              href={AIVALLEY_URL} 
              target="_blank"
              className="hidden md:flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
            >
              <span className="text-sm text-white">In collaboration with</span>
              <div className="flex items-center gap-1">
                <Image 
                  src="/ai-valley.png" 
                  alt="AI Valley" 
                  width={80} 
                  height={24}
                  className="h-6 w-auto"
                  onError={(e) => {
                    // Fallback to text if image doesn't exist
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="font-bold text-white">AI Valley</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-accent transition-colors hover:scale-110 transform"
                style={{ 
                  fontFamily: Math.random() > 0.7 ? "'Comic Sans MS', cursive" : "inherit" 
                }}
              >
                {item.label}
              </Link>
            ))}
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
            <div className="flex flex-col space-y-4">
              <Link 
                href={AIVALLEY_URL} 
                target="_blank"
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg"
              >
                <span className="text-sm text-white">In collaboration with</span>
                <div className="flex items-center gap-1">
                  <Image 
                    src="/ai-valley.png" 
                    alt="AI Valley" 
                    width={60} 
                    height={20}
                    className="h-5 w-auto"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <span className="font-bold text-white">AI Valley</span>
                </div>
              </Link>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-accent transition-colors text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
