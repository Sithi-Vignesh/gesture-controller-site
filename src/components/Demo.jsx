import React from 'react';
import { motion } from 'framer-motion';
import HandSkeleton from '../effects/HandSkeleton';

export default function Demo() {
  return (
    <section className="relative w-full min-h-[80vh] bg-brand-black flex flex-col items-center justify-center py-24 overflow-hidden">
      
      {/* Ghost Hand Background - Fainter instance */}
      <div className="absolute right-1/4 bottom-0 z-0 pointer-events-none transform scale-75 opacity-50">
        <HandSkeleton opacity={0.6} scale={0.8} />
      </div>

      <div className="max-w-[900px] w-full mx-auto px-6 relative z-10 text-center">
        
        {/* Eyebrow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-brand-yellow text-xs tracking-widest mb-6"
        >
          [ DEMO ]
        </motion.div>

        {/* Headline */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[56px] md:text-[80px] text-brand-white leading-[0.9] mb-12"
        >
          WATCH IT WORK.
        </motion.h2>

        {/* Video Player Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative w-full aspect-video bg-brand-gray-dark rounded-xl border border-brand-gray-mid shadow-[0_0_50px_rgba(255,230,0,0.05)] overflow-hidden flex flex-col items-center justify-center group"
        >
          {/* Subtle glow underneath */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Animated Ring & Hand Icon */}
            <div className="w-20 h-20 rounded-full border border-brand-yellow/30 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full border-2 border-brand-yellow animate-ping opacity-20" />
              <img src="/icon-transparent.png" alt="Gesture Controller" className="w-10 h-10 object-contain" />
            </div>
            
            <p className="font-mono text-brand-gray-text text-sm">Demo video dropping soon</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
