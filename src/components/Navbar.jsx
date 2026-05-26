import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'How It Works', href: '#problem' },
    { name: 'Gestures', href: '#gestures' },
    { name: 'Setup', href: '#setup' },
    { name: 'Roadmap', href: '#roadmap' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full h-16 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-black/85 backdrop-blur-[20px] border-b border-brand-yellow/15' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 z-50">
            <img src="/icon-transparent.png" alt="Icon" className="w-7 h-7" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
            {/* Fallback svg if icon missing */}
            <svg style={{display: 'none'}} className="w-7 h-7 text-brand-yellow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 0C14 0 13.9 1.9 14.8 3.1C15.6 4.3 17 5 17 5L15 6.5C15 6.5 13.8 5.4 12.8 5C11.8 4.6 10 4.5 10 4.5L10 0.5C10 0.5 11 0.8 11.5 1.5C12 2.2 12.2 3.5 12.2 3.5C12.2 3.5 12.8 3.8 13.2 4.2C13.6 4.6 14 0 14 0Z" />
              <path d="M12.4 6.7C13.2 7 14.5 8 14.5 8C14.5 8 15.5 8.5 16.5 8.8C17.5 9.1 20 9.5 20 9.5C20 9.5 20.8 10 21 11C21.2 12 21 13 20 13.5C19 14 17 14.2 17 14.2C17 14.2 17.5 15.2 17.5 16.5C17.5 17.8 16.5 19 15.5 19.5C14.5 20 13 20.5 13 20.5L11.5 23H8L9.5 20C9.5 20 7 19.5 6 18.5C5 17.5 4 15.5 4 15.5C4 15.5 2 15 1.5 14C1 13 1 11.5 1.5 10.5C2 9.5 3 9 3 9C3 9 3.5 7.5 4 6.5C4.5 5.5 5.5 4.5 7 4C8.5 3.5 10.5 3.5 10.5 3.5C10.5 3.5 11.6 6.4 12.4 6.7Z" />
            </svg>
            <span className="font-display text-xl text-brand-yellow tracking-wider mt-1">
              GESTURE <span className="text-brand-white">CONTROLLER</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="font-heading text-sm text-brand-gray-text hover:text-brand-white tracking-wider relative group transition-colors duration-200"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-yellow scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            
            <a 
              href="https://github.com/Sithi-Vignesh/Gesture-Controller/releases/download/v1.0.0/GestureController_Setup.exe"
              className="font-display text-[15px] bg-brand-yellow text-brand-black px-6 py-2 rounded-full hover:scale-105 hover:shadow-[0_0_15px_rgba(255,230,0,0.4)] active:scale-95 transition-all duration-200 tracking-wider mt-1"
            >
              DOWNLOAD V1
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-brand-white hover:text-brand-yellow transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-lg flex flex-col items-center justify-center pt-16"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-5xl text-brand-white hover:text-brand-yellow transition-colors tracking-widest"
                >
                  {link.name.toUpperCase()}
                </a>
              ))}
              <a 
                href="#setup"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 font-display text-2xl bg-brand-yellow text-brand-black px-10 py-4 rounded-full tracking-wider"
              >
                DOWNLOAD V1
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
