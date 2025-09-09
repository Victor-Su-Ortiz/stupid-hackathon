"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Sparkles, ExternalLink } from "lucide-react";

export default function VenueHost() {
  const founders = [
    {
      name: "Pam Vagata",
      role: "Partner",
      credentials: "Co-founder of OpenAI, Former AI Lead at Stripe, Inventor of FBLearner Flow",
      highlight: "OpenAI Co-founder"
    },
    {
      name: "Keith Adams",
      role: "Partner",
      credentials: "Founded Facebook AI Research, Former Chief Architect at Slack, 20th Engineer at VMware",
      highlight: "FAIR Founder"
    },
    {
      name: "Luke Byrne",
      role: "Partner",
      credentials: "Former Partner at Tapestry",
      highlight: "Tapestry Partner"
    },
    {
      name: "Tammie Siew",
      role: "Partner",
      credentials: "Former Sequoia Southeast Asia Investor, Sequoia & GGV backed Founder",
      highlight: "Sequoia Investor"
    }
  ];

  return (
    <section id="venue" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234ECDC4' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-8 h-8 text-secondary" />
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="text-dark">Our Venue Host</span>
            </h2>
            <MapPin className="w-8 h-8 text-secondary" />
          </div>
          <p className="text-xl text-dark/70 max-w-3xl mx-auto">
            Proudly hosted at the offices of Pebblebed, where innovation meets investment
          </p>
        </motion.div>

        {/* Pebblebed Main Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-1">
            <div className="bg-white rounded-3xl p-12">
              <div className="text-center mb-8">
                <Link
                  href="https://pebblebed.com"
                  target="_blank"
                  className="inline-block group"
                >
                  <motion.div
                    className="flex flex-col items-center mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image 
                      src="/pebblebed.png" 
                      alt="Pebblebed" 
                      width={200} 
                      height={60}
                      className="h-16 w-auto mb-2 group-hover:scale-105 transition-transform"
                      onError={(e) => {
                        // If image doesn't exist, hide it and show text instead
                        e.currentTarget.style.display = 'none';
                        const textFallback = document.getElementById('pebblebed-text-fallback');
                        if (textFallback) textFallback.style.display = 'block';
                      }}
                    />
                    <h3 id="pebblebed-text-fallback" className="text-4xl font-bold text-dark flex items-center justify-center gap-2" style={{ display: 'none' }}>
                      Pebblebed
                      <ExternalLink className="w-6 h-6 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </motion.div>
                </Link>
                <p className="text-xl text-dark/80 mb-2 font-semibold">
                  Technical Early-Stage Venture Capital
                </p>
                <p className="text-lg text-dark/60 max-w-3xl mx-auto">
                  Supporting the next generation of technical founders building breakthrough technologies
                </p>
              </div>

              {/* About Description */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-dark mb-4 flex items-center justify-center gap-2">
                  <Sparkles className="w-6 h-6 text-accent" />
                  About Our Host
                  <Sparkles className="w-6 h-6 text-accent" />
                </h4>
                <p className="text-dark/80 text-center leading-relaxed">
                  Pebblebed is a technical early-stage VC that partners with exceptional founders 
                  building the future of technology. With deep expertise in AI, infrastructure, 
                  and developer tools, Pebblebed provides not just capital but hands-on technical 
                  guidance from operators who&apos;ve built and scaled some of the world&apos;s most 
                  innovative technology companies.
                </p>
              </div>

              {/* Founders Grid */}
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-dark mb-6 text-center flex items-center justify-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  The Team
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {founders.map((founder, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
                    >
                      <div className="flex flex-col">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="text-xl font-bold text-dark">{founder.name}</h5>
                          <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full font-semibold">
                            {founder.highlight}
                          </span>
                        </div>
                        <p className="text-sm text-primary font-semibold mb-2">{founder.role}</p>
                        <p className="text-sm text-dark/70 leading-relaxed">
                          {founder.credentials}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why Pebblebed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-6 text-center"
              >
                <p className="text-lg text-dark/80 font-medium">
                  By hosting at Pebblebed, participants will have the unique opportunity to 
                  showcase their creativity in front of industry leaders who&apos;ve shaped the 
                  landscape of modern technology.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <p className="text-dark/60 mb-4">
            Join us at Pebblebed&apos;s San Francisco office for a day of innovation and creativity
          </p>
          <motion.div
            className="inline-flex items-center gap-2 text-secondary font-semibold"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MapPin className="w-5 h-5" />
            <span>Location details will be shared with registered participants</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
