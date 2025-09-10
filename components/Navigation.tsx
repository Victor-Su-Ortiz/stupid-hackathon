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
    { href: "#about", label: "About" },
    { href: "#venue", label: "Venue" },
    { href: "#schedule", label: "Schedule" },
    { href: "#projects", label: "Projects" },
    { href: "#sponsors", label: "Sponsors" },
    { href: AIVALLEY_URL, label: "Contact" },
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
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-8">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white drop-shadow-lg hidden sm:inline">Dumb Hackathon</span>
              <span className="text-xl font-bold text-white drop-shadow-lg sm:hidden">DH</span>
            </Link>
            <Link 
              href={AIVALLEY_URL} 
              target="_blank"
              className="hidden xl:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <span className="text-sm text-white/90">with</span>
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
          <div className="hidden md:flex items-center gap-5">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="text-white hover:text-accent transition-colors"
              >
                <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
              </Link>
            ))}
            <Link
              href={LUMA_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap px-5 py-2 bg-accent text-dark font-bold text-base rounded-full hover:bg-secondary transition-colors hover:scale-105 transform"
            >
              Register
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
                    className="h-5 w-auto"
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
                  className="text-white hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
              <Link
                href={LUMA_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap px-5 py-2 bg-accent text-dark font-bold text-base rounded-full hover:bg-secondary transition-colors w-full"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
