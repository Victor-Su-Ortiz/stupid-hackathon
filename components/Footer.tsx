"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Heart } from "lucide-react";
import { AIVALLEY_URL, CONTACT_EMAIL } from "@/lib/constants";

export default function Footer() {
  // Removed rotating emoji for cleaner design

  const footerLinks = [
    { href: AIVALLEY_URL, label: "AI Valley", external: true },
    { href: AIVALLEY_URL, label: "Contact", external: true },
    { href: "#", label: "Past Hackathons", external: false },
    { href: "#", label: "Code of Conduct", external: false },
  ];

  const socialIcons = ["🐦", "📸", "💼", "🎮"];

  return (
    <footer className="relative bg-dark text-white py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 50 }, (_, i) => (
          <span
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            🦆
          </span>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 comic-sans">
              Dumb Hackathon
            </h3>
            <p className="text-light/80 mb-4">
              Making the internet a weirder place, one hack at a time.
            </p>
            <Link
              href={AIVALLEY_URL}
              target="_blank"
              className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors group"
            >
              <span>Powered by</span>
              <Image 
                src="/ai-valley.png" 
                alt="AI Valley" 
                width={80} 
                height={24}
                className="h-6 w-auto brightness-0 invert group-hover:scale-105 transition-transform"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-semibold">AI Valley</span>
              <ExternalLink size={16} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    className="text-light/80 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    {link.label}
                    {link.external && <ExternalLink size={14} />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
            <a
              href={AIVALLEY_URL}
              target="_blank"
              className="flex items-center gap-2 text-light/80 hover:text-accent transition-colors mb-4"
            >
              <ExternalLink size={18} />
              AI Valley
            </a>
            <div className="flex gap-4">
              {socialIcons.map((icon, index) => (
                <motion.button
                  key={index}
                  className="text-2xl hover:scale-125 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {icon}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light/60 text-sm">
              © 2025 The Dumb Hackathon. All wrongs reserved.
            </p>
            <p className="text-light/60 text-sm flex items-center gap-1">
              Made with <Heart size={16} className="text-primary" /> and questionable judgment
            </p>
          </div>
          <p className="text-center text-xs text-light/40 mt-4">
            PS: Try the Konami code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA
          </p>
        </div>
      </div>
    </footer>
  );
}
