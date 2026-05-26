import React from 'react';
import CountUpObj from 'react-countup';
import { motion } from 'framer-motion';

const CountUp = CountUpObj.default || CountUpObj;

export default function StatsStrip() {
  const stats = [
    { num: 7, suffix: '', label: 'GESTURES' },
    { num: 30, suffix: '', label: 'FPS' },
    { num: 20, prefix: '<', suffix: '', label: 'MS LATENCY' },
    { num: 0, suffix: '', label: 'EXTRA HARDWARE' }
  ];

  return (
    <section className="w-full bg-brand-gray-dark border-y border-brand-yellow/15 py-10 md:py-0 md:h-[160px] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-0 divide-x-0 md:divide-x divide-brand-yellow/15">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="font-display text-6xl md:text-[80px] text-brand-yellow leading-none mb-2 text-glow">
                {stat.prefix}
                <CountUp 
                  end={stat.num} 
                  duration={2.5} 
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  separator=","
                />
                {stat.suffix}
              </div>
              <div className="font-body text-xs md:text-sm text-brand-gray-text tracking-[0.1em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
