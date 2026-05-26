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
              <svg className="w-8 h-8 text-brand-yellow" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M14 0C14 0 13.9 1.9 14.8 3.1C15.6 4.3 17 5 17 5L15 6.5C15 6.5 13.8 5.4 12.8 5C11.8 4.6 10 4.5 10 4.5L10 0.5C10 0.5 11 0.8 11.5 1.5C12 2.2 12.2 3.5 12.2 3.5C12.2 3.5 12.8 3.8 13.2 4.2C13.6 4.6 14 0 14 0Z" />
                 <path d="M12.4 6.7C13.2 7 14.5 8 14.5 8C14.5 8 15.5 8.5 16.5 8.8C17.5 9.1 20 9.5 20 9.5C20 9.5 20.8 10 21 11C21.2 12 21 13 20 13.5C19 14 17 14.2 17 14.2C17 14.2 17.5 15.2 17.5 16.5C17.5 17.8 16.5 19 15.5 19.5C14.5 20 13 20.5 13 20.5L11.5 23H8L9.5 20C9.5 20 7 19.5 6 18.5C5 17.5 4 15.5 4 15.5C4 15.5 2 15 1.5 14C1 13 1 11.5 1.5 10.5C2 9.5 3 9 3 9C3 9 3.5 7.5 4 6.5C4.5 5.5 5.5 4.5 7 4C8.5 3.5 10.5 3.5 10.5 3.5C10.5 3.5 11.6 6.4 12.4 6.7Z" />
              </svg>
            </div>
            
            <p className="font-mono text-brand-gray-text text-sm">Demo video dropping soon</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
