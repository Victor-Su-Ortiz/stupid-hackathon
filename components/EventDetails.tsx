"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import { EVENT_DATE, LUMA_REGISTRATION_URL } from "@/lib/constants";

export default function EventDetails() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);
  const [glitchTime, setGlitchTime] = useState(false);
  const [currentTimezone, setCurrentTimezone] = useState("PST");

  const timezones = ["PST", "EST", "GMT", "JST", "MARS"];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const calculateTimeLeft = () => {
      const eventDate = new Date(EVENT_DATE);
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        // Occasionally glitch the numbers for fun
        if (Math.random() > 0.95) {
          setGlitchTime(true);
          setTimeLeft({
            days: Math.floor(Math.random() * 999),
            hours: Math.floor(Math.random() * 99),
            minutes: Math.floor(Math.random() * 99),
            seconds: Math.floor(Math.random() * 99),
          });
          setTimeout(() => {
            setGlitchTime(false);
            setTimeLeft({ days, hours, minutes, seconds });
          }, 500);
        } else {
          setTimeLeft({ days, hours, minutes, seconds });
        }
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [mounted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimezone(timezones[Math.floor(Math.random() * timezones.length)]);
    }, 5000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    setButtonPosition({ x, y });
  };

  if (!mounted) return null;

  return (
    <section id="event" className="py-20 bg-gradient-to-br from-secondary via-accent to-chaos">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="comic-sans">When & Where</span>
          </h2>
          <p className="text-xl text-white/90">
            Mark your calendar, quit your job, fake your death. This is happening.
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl ${
                glitchTime ? "glitch" : ""
              }`}
            >
              <p className="text-5xl font-bold text-primary mb-2">{value}</p>
              <p className="text-dark/70 uppercase tracking-wider">{unit}</p>
            </motion.div>
          ))}
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-dark">Location</h3>
            </div>
            <p className="text-xl text-dark mb-2">Location: TBD</p>
            <p className="text-dark/70 mb-4">To be announced soon - stay tuned for the chaos location!</p>
            
            {/* Fake Treasure Map */}
            <div className="bg-accent/20 rounded-lg p-4 relative overflow-hidden">
              <p className="text-sm text-dark/60 mb-2">🗺️ Treasure Map to Stupidity:</p>
              <ol className="text-sm space-y-1 text-dark/70">
                <li>1. Exit reality</li>
                <li>2. Turn left at common sense</li>
                <li>3. Walk past logic</li>
                <li>4. You&apos;ve arrived! 🎉</li>
              </ol>
              <div className="absolute top-2 right-2 text-4xl opacity-20 rotate-12">
                🏴‍☠️
              </div>
            </div>
          </motion.div>

          {/* Time Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <div className="flex items-center mb-4">
              <Clock className="w-8 h-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold text-dark">Date & Time</h3>
            </div>
            <p className="text-xl text-dark mb-2">September 20th, 2025</p>
            <p className="text-dark/70 mb-4">10:00 AM - 9:00 PM ({currentTimezone})</p>
            
            {/* Capacity */}
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-chaos mr-2" />
              <p className="text-dark">Limited to 100 chaos agents</p>
            </div>

            {/* Registration Button that moves */}
            <motion.a
              href={LUMA_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-full shadow-lg transition-all text-center"
              animate={{ x: buttonPosition.x, y: buttonPosition.y }}
              onMouseEnter={handleMouseEnter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now (If you can click me) 🎯
            </motion.a>
          </motion.div>
        </div>

        {/* Warning Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/80 italic">
            ⚠️ Warning: Side effects may include uncontrollable laughter, 
            existential crisis about your career choices, and the urge to use Comic Sans everywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
