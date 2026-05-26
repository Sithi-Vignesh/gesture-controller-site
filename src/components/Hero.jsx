import React from 'react';
import { motion } from 'framer-motion';
import HandSkeleton from '../effects/HandSkeleton';
import { ChevronDown, Play } from 'lucide-react';
import { RELEASE } from '../config/release';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  const chipVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-brand-black z-0" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.03)_0%,transparent_70%)]" />
      
      {/* Ghost Hand Skeleton */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 md:translate-x-0 z-0 pointer-events-none">
        <HandSkeleton opacity={1} scale={1.2} />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-between z-10 relative">
        
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-[55%] flex flex-col items-start pt-10 md:pt-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse" />
            <span className="font-mono text-xs text-brand-yellow tracking-widest">{RELEASE.label}</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="font-display text-[56px] md:text-[96px] leading-[0.9] tracking-wide text-brand-white mb-6">
            THE GAME DOESN'T <br className="hidden md:block" />
            CHANGE. HOW YOU <br className="hidden md:block" />
            <span className="text-brand-yellow">PLAY DOES.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="font-body text-lg text-brand-gray-text max-w-[480px] mb-10 leading-relaxed">
            Control Brawl Stars with nothing but your hands. Real-time gesture recognition. Zero extra hardware.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6">
            <a 
              href={RELEASE.downloadUrl}
              className="font-display text-lg bg-brand-yellow text-brand-black px-8 py-3 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,230,0,0.4)] active:scale-95 transition-all duration-200 tracking-wider text-center flex items-center justify-center gap-2"
            >
              <ChevronDown size={20} className="stroke-[3]" />
              DOWNLOAD FOR WINDOWS
            </a>
            
            <a 
              href={RELEASE.repoUrl}
              target="_blank" 
              rel="noreferrer"
              className="font-display text-lg border-2 border-brand-yellow text-brand-yellow px-8 py-3 rounded-full hover:bg-brand-yellow/10 hover:shadow-[0_0_15px_rgba(255,230,0,0.2)] active:scale-95 transition-all duration-200 tracking-wider text-center"
            >
              ★ STAR ON GITHUB
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="font-mono text-xs text-[#555]">
            7 gestures · 30 FPS · &lt;20ms latency
          </motion.div>

        </motion.div>

        {/* Right Visual */}
        <div className="w-full md:w-[45%] mt-16 md:mt-0 relative flex justify-center md:justify-end">
          
          {/* Floating Chips */}
          <div className="absolute top-10 -left-4 md:-left-12 z-20 hidden sm:flex flex-col gap-3">
            <motion.div initial="hidden" animate="visible" variants={chipVariants} transition={{ delay: 0.8 }} className="bg-brand-gray-dark border border-brand-yellow/20 px-4 py-2 rounded-lg font-mono text-sm text-brand-white shadow-lg backdrop-blur-sm">
              ✊ Move
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={chipVariants} transition={{ delay: 0.95 }} className="bg-brand-gray-dark border border-brand-yellow/20 px-4 py-2 rounded-lg font-mono text-sm text-brand-white shadow-lg backdrop-blur-sm ml-6">
              👆 Gadget
            </motion.div>
            <motion.div initial="hidden" animate="visible" variants={chipVariants} transition={{ delay: 1.1 }} className="bg-brand-gray-dark border border-brand-yellow/20 px-4 py-2 rounded-lg font-mono text-sm text-brand-white shadow-lg backdrop-blur-sm">
              ✌️ Hypercharge
            </motion.div>
          </div>

          {/* Mockup Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-[500px] aspect-[16/10] bg-brand-gray-dark rounded-xl border border-brand-gray-mid shadow-[0_20px_50px_rgba(255,230,0,0.05)] animate-bob"
          >
            {/* Screen Content Placeholder */}
            <div className="absolute inset-2 bg-brand-black rounded-lg overflow-hidden flex flex-col items-center justify-center border border-brand-gray-mid">
              <div className="w-16 h-16 rounded-full bg-brand-yellow-dim flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full border-2 border-brand-yellow animate-ping opacity-20"></div>
                <Play className="text-brand-yellow fill-brand-yellow ml-1" size={24} />
              </div>
              <span className="font-mono text-brand-gray-text text-sm">Demo Coming Soon</span>
            </div>
            {/* Mockup Base */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2/3 h-4 bg-brand-gray-mid rounded-b-xl"></div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Hook */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[11px] text-brand-gray-text tracking-widest">SCROLL TO EXPLORE</span>
        <ChevronDown size={16} className="text-brand-gray-text animate-bounce" />
      </motion.div>
    </section>
  );
}
