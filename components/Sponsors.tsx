"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";
import { AIVALLEY_URL, CONTACT_EMAIL, SPONSOR_BENEFITS } from "@/lib/constants";

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 bg-dark text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 10,
              delay: i * 0.2,
              repeat: Infinity,
            }}
          >
            💰
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-accent comic-sans">Companies Brave Enough</span>
            <br />
            <span className="text-white">to Support Stupidity</span>
          </h2>
          <p className="text-xl text-white/80">
            These legends embrace chaos and questionable decision-making
          </p>
        </motion.div>

        {/* AI Valley Featured Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-3xl">
            <div className="bg-dark rounded-3xl p-12">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 mb-4">
                  <Sparkles className="w-8 h-8 text-accent" />
                  <h3 className="text-3xl font-bold text-white">Presenting Partner</h3>
                  <Sparkles className="w-8 h-8 text-accent" />
                </div>
                <Link
                  href={AIVALLEY_URL}
                  target="_blank"
                  className="group inline-block"
                >
                  <motion.div
                    className="bg-white text-dark px-12 py-8 rounded-2xl shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring" }}
                  >
                    <div className="flex flex-col items-center gap-4">
                      <Image 
                        src="/ai-valley.png" 
                        alt="AI Valley" 
                        width={200} 
                        height={60}
                        className="h-16 w-auto group-hover:scale-110 transition-transform"
                        onError={(e) => {
                          // If image doesn't exist, hide it and show text instead
                          e.currentTarget.style.display = 'none';
                          const textFallback = document.getElementById('ai-valley-text-fallback');
                          if (textFallback) textFallback.style.display = 'block';
                        }}
                      />
                      <h4 id="ai-valley-text-fallback" className="text-4xl font-bold group-hover:text-primary transition-colors" style={{ display: 'none' }}>
                        AI Valley
                      </h4>
                      <p className="text-dark/70 flex items-center justify-center gap-2">
                        Where AI meets Absurdity
                        <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>
                  </motion.div>
                </Link>
                <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                  AI Valley is proud to support this celebration of creative chaos. 
                  Because sometimes the best innovations come from the worst ideas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Sponsor Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-2">Our Amazing Sponsor</h3>
            <p className="text-white/70">Supporting innovation through absurdity</p>
          </div>
          <div className="max-w-md mx-auto">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring" }}
            >
              <Link
                href="https://google.com"
                target="_blank"
                className="group inline-block"
              >
                <motion.div
                  className="bg-white text-dark px-8 py-6 rounded-xl shadow-xl"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image 
                      src="/google.png" 
                      alt="Google" 
                      width={160} 
                      height={54}
                      className="h-14 w-auto group-hover:scale-110 transition-transform"
                    />
                    <p className="text-dark/70 flex items-center justify-center gap-2">
                      Empowering developers to build the unthinkable
                      <ExternalLink className="w-4 h-4" />
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Become a Sponsor CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary to-chaos rounded-3xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4 text-dark comic-sans">
            Join the Madness as a Sponsor!
          </h3>
          <p className="text-dark/80 text-xl mb-6">
            $2,000 flat rate to be associated with glorious failure
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
            {SPONSOR_BENEFITS.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 text-left"
              >
                <span className="text-2xl">✅</span>
                <span className="text-dark/90">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <motion.a
            href={`mailto:${CONTACT_EMAIL}?subject=Sponsorship Inquiry - Stupid Hackathon`}
            className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Sponsor
            <ExternalLink className="w-5 h-5" />
          </motion.a>
          <p className="text-dark/60 mt-4">
            Contact: {CONTACT_EMAIL}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
