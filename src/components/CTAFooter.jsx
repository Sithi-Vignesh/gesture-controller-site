import React from 'react';
import { motion } from 'framer-motion';
import HandSkeleton from '../effects/HandSkeleton';
import { GitBranchIcon, ChevronDown } from 'lucide-react';
import { RELEASE } from '../config/release';

export default function CTAFooter() {
  return (
    <footer className="w-full bg-brand-black relative flex flex-col items-center overflow-hidden">
      
      {/* CTA Section */}
      <div className="relative w-full py-40 flex flex-col items-center justify-center">
        {/* Warm radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.04)_0%,transparent_60%)] z-0 pointer-events-none" />
        
        {/* Ghost Hand - Final massive instance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
          <HandSkeleton opacity={1.2} scale={1.5} className="md:opacity-[1.2]" />
        </div>

        <div className="relative z-10 max-w-[800px] w-full mx-auto px-6 text-center flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[64px] md:text-[96px] text-brand-white leading-[0.9] mb-6"
          >
            READY TO PLAY DIFFERENT?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body text-lg text-brand-gray-text mb-12 max-w-[600px]"
          >
            "Download Gesture Controller. It's free. It's fast. It's unlike anything you've used before."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
          >
            <a 
              href={RELEASE.downloadUrl}
              className="font-display text-lg bg-brand-yellow text-brand-black px-10 py-4 rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,230,0,0.4)] active:scale-95 transition-all duration-200 tracking-wider flex items-center justify-center gap-2"
            >
              <ChevronDown size={20} className="stroke-[3]" />
              DOWNLOAD V1
            </a>
            <a 
              href={RELEASE.repoUrl}
              target="_blank" 
              rel="noreferrer"
              className="font-display text-lg border border-brand-white/20 text-brand-white px-10 py-4 rounded-full hover:bg-brand-white/5 hover:border-brand-white/40 active:scale-95 transition-all duration-200 tracking-wider flex items-center justify-center gap-2"
            >
              ★ STAR ON GITHUB
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="font-mono text-xs text-brand-gray-text"
          >
            MIT Licensed · Open Source · Built by Sithi Vignesh
          </motion.div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="w-full border-t border-brand-yellow/10 bg-brand-black z-20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left */}
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="Icon" className="w-6 h-6 grayscale opacity-70" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            <svg style={{display: 'none'}} className="w-6 h-6 text-brand-gray-text" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M14 0C14 0 13.9 1.9 14.8 3.1C15.6 4.3 17 5 17 5L15 6.5C15 6.5 13.8 5.4 12.8 5C11.8 4.6 10 4.5 10 4.5L10 0.5C10 0.5 11 0.8 11.5 1.5C12 2.2 12.2 3.5 12.2 3.5C12.2 3.5 12.8 3.8 13.2 4.2C13.6 4.6 14 0 14 0Z" />
                 <path d="M12.4 6.7C13.2 7 14.5 8 14.5 8C14.5 8 15.5 8.5 16.5 8.8C17.5 9.1 20 9.5 20 9.5C20 9.5 20.8 10 21 11C21.2 12 21 13 20 13.5C19 14 17 14.2 17 14.2C17 14.2 17.5 15.2 17.5 16.5C17.5 17.8 16.5 19 15.5 19.5C14.5 20 13 20.5 13 20.5L11.5 23H8L9.5 20C9.5 20 7 19.5 6 18.5C5 17.5 4 15.5 4 15.5C4 15.5 2 15 1.5 14C1 13 1 11.5 1.5 10.5C2 9.5 3 9 3 9C3 9 3.5 7.5 4 6.5C4.5 5.5 5.5 4.5 7 4C8.5 3.5 10.5 3.5 10.5 3.5C10.5 3.5 11.6 6.4 12.4 6.7Z" />
            </svg>
            <span className="font-display tracking-wider text-brand-white text-sm mt-1">Gesture Controller</span>
            <span className="font-mono text-xs text-brand-gray-text px-2 py-0.5 rounded bg-brand-white/5 border border-brand-white/10 ml-2">{RELEASE.label}</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#problem" className="font-heading text-xs text-brand-gray-text hover:text-brand-white transition-colors">How It Works</a>
            <a href="#gestures" className="font-heading text-xs text-brand-gray-text hover:text-brand-white transition-colors">Gestures</a>
            <a href="#setup" className="font-heading text-xs text-brand-gray-text hover:text-brand-white transition-colors">Setup</a>
            <a href="#roadmap" className="font-heading text-xs text-brand-gray-text hover:text-brand-white transition-colors">Roadmap</a>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* GitHub */}
            <a href={RELEASE.repoUrl} target="_blank" rel="noreferrer" className="text-brand-gray-text hover:text-brand-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/Sithi-Vignesh" target="_blank" rel="noreferrer" className="text-brand-gray-text hover:text-brand-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom Micro Line */}
        <div className="w-full text-center py-4 border-t border-brand-white/5">
          <span className="font-mono text-[10px] text-brand-gray-text/50">
            © 2026 Sithi Vignesh · MIT License · Made with obsession
          </span>
        </div>
      </div>
    </footer>
  );
}
