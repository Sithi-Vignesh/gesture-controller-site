import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Hand } from 'lucide-react';

export default function ProblemSolution() {
  const words = [
    "You're on a laptop.",
    "Your fingers are tired.",
    "Your keyboard doesn't cut it."
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const featureCards = [
    {
      icon: <Target className="text-brand-yellow mb-4" size={32} />,
      title: "Precision",
      description: "Tap vs drag intelligence. 8-direction movement. Zero accidental triggers."
    },
    {
      icon: <Zap className="text-brand-yellow mb-4" size={32} />,
      title: "Speed",
      description: "Sub-20ms latency. 30 FPS pipeline. Feels instant."
    },
    {
      icon: <Hand className="text-brand-yellow mb-4" size={32} />,
      title: "Natural",
      description: "7 gestures that mirror how you'd play on a real touchscreen."
    }
  ];

  return (
    <section id="problem" className="py-[120px] bg-brand-black relative flex flex-col items-center">
      <div className="max-w-[900px] w-full mx-auto px-6 text-center">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-brand-yellow text-xs tracking-widest mb-8"
        >
          [ THE PROBLEM ]
        </motion.div>

        {/* The Problem Statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[56px] md:text-[72px] text-brand-white leading-[0.9] mb-4"
        >
          BRAWL STARS NEEDS<br/>
          A TOUCHSCREEN.
        </motion.h2>

        {/* Typewriter Effect Container */}
        <div className="h-10 mb-16 flex items-center justify-center">
          <motion.p
            key={currentWordIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-brand-gray-text text-lg"
          >
            "{words[currentWordIndex]}"
          </motion.p>
        </div>

        {/* Divider */}
        <div className="w-[120px] h-[2px] bg-brand-yellow mx-auto mb-16 shadow-[0_0_10px_rgba(255,230,0,0.5)]" />

        {/* The Solution Statement */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-display text-[56px] md:text-[72px] leading-[0.9] mb-20"
        >
          <span className="text-brand-white">YOUR WEBCAM</span><br/>
          <span className="text-brand-yellow">IS NOW A CONTROLLER.</span>
        </motion.h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {featureCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              className="bg-brand-gray-dark border border-brand-yellow/10 rounded-xl p-8 text-left group hover:-translate-y-1 hover:border-brand-yellow/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-yellow/0 group-hover:bg-brand-yellow/5 transition-colors duration-300" />
              <div className="relative z-10">
                {card.icon}
                <h3 className="font-heading font-bold text-xl text-brand-white mb-3">{card.title}</h3>
                <p className="font-body text-brand-gray-text text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll Tease */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="font-body text-brand-gray-text/50 text-sm flex items-center justify-center gap-2"
        >
          See the numbers <span className="animate-bounce inline-block">↓</span>
        </motion.div>

      </div>
    </section>
  );
}
