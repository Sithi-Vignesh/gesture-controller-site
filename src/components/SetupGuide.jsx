import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Keyboard, Download, ChevronRight, ChevronDown, Play } from 'lucide-react';
import clsx from 'clsx';
import { RELEASE } from '../config/release';

export default function SetupGuide() {
  const [view, setView] = useState('doc'); // 'doc' or 'video'
  const [sysReqOpen, setSysReqOpen] = useState(false);

  const steps = [
    {
      num: "01",
      icon: <Monitor size={24} className="text-brand-white" />,
      title: "Install LDPlayer 9",
      body: "Download and install LDPlayer 9 from ldplayer.net. Launch it and install Brawl Stars from the Play Store inside.",
      link: { text: "→ ldplayer.net", url: "https://www.ldplayer.net/" }
    },
    {
      num: "02",
      icon: <Keyboard size={24} className="text-brand-white" />,
      title: "Set Up Keybindings",
      body: "In LDPlayer's keyboard control panel, assign: W/A/S/D for movement, E for attack, X for aimed attack, F for super, C for aimed super, R for hypercharge, Q for gadget."
    },
    {
      num: "03",
      icon: <Download size={24} className="text-brand-white" />,
      title: "Download & Launch",
      body: "Run GestureController_Setup.exe. Launch Gesture Controller, open LDPlayer, enter a match and start gesturing.",
      action: <a href={RELEASE.downloadUrl} className="mt-4 inline-block font-display text-sm bg-brand-yellow text-brand-black px-6 py-2 rounded-full hover:scale-105 active:scale-95 transition-all">DOWNLOAD V1</a>
    }
  ];

  return (
    <section id="setup" className="py-24 bg-[#0D0D0D] w-full flex flex-col items-center border-t border-brand-yellow/5">
      <div className="max-w-[800px] w-full mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-yellow text-xs tracking-widest mb-6"
          >
            [ GET STARTED ]
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[56px] md:text-[72px] text-brand-white leading-[0.9] mb-10"
          >
            UP AND RUNNING IN 3 STEPS.
          </motion.h2>

          {/* View Toggles */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <button 
              onClick={() => setView('doc')}
              className={clsx(
                "font-mono text-sm px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
                view === 'doc' 
                  ? "bg-brand-yellow text-brand-black shadow-[0_0_15px_rgba(255,230,0,0.3)]" 
                  : "border border-brand-gray-text text-brand-gray-text hover:border-brand-white hover:text-brand-white"
              )}
            >
              📄 DOCUMENTATION
            </button>
            <button 
              onClick={() => setView('video')}
              className={clsx(
                "font-mono text-sm px-6 py-2 rounded-full transition-all duration-300 flex items-center gap-2",
                view === 'video' 
                  ? "bg-brand-yellow text-brand-black shadow-[0_0_15px_rgba(255,230,0,0.3)]" 
                  : "border border-brand-gray-text text-brand-gray-text hover:border-brand-white hover:text-brand-white"
              )}
            >
              🎥 VIDEO
            </button>
          </motion.div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {view === 'doc' ? (
              <motion.div 
                key="doc"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                {/* Steps */}
                {steps.map((step, idx) => (
                  <div key={idx} className="relative bg-brand-gray-dark border border-brand-yellow/10 rounded-xl p-8 overflow-hidden group hover:border-brand-yellow/30 transition-colors">
                    {/* Background Number */}
                    <div className="absolute -right-4 -bottom-8 font-display text-[120px] text-brand-yellow/5 select-none pointer-events-none group-hover:text-brand-yellow/10 transition-colors">
                      {step.num}
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row gap-6">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-brand-gray-mid flex items-center justify-center border border-brand-white/10 group-hover:border-brand-yellow/30 transition-colors">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-brand-white mb-2">{step.title}</h3>
                        <p className="font-body text-brand-gray-text text-sm leading-relaxed mb-2 max-w-[500px]">
                          {step.body}
                        </p>
                        {step.link && (
                          <a href={step.link.url} target="_blank" rel="noreferrer" className="font-mono text-sm text-brand-yellow hover:text-brand-white transition-colors mt-2 inline-block">
                            {step.link.text}
                          </a>
                        )}
                        {step.action}
                      </div>
                    </div>
                  </div>
                ))}

                {/* System Requirements Toggle */}
                <div className="mt-8 border border-brand-gray-mid rounded-xl overflow-hidden">
                  <button 
                    onClick={() => setSysReqOpen(!sysReqOpen)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-brand-gray-dark hover:bg-brand-gray-mid/50 transition-colors"
                  >
                    <span className="font-mono text-sm text-brand-gray-text group-hover:text-brand-white flex items-center gap-2">
                      {sysReqOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                      System Requirements
                    </span>
                  </button>
                  <AnimatePresence>
                    {sysReqOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-brand-black"
                      >
                        <ul className="p-6 list-disc list-inside font-body text-sm text-brand-gray-text space-y-2">
                          <li>Windows 10 / 11</li>
                          <li>Webcam (built-in or external)</li>
                          <li>LDPlayer 9 installed at default path</li>
                          <li>4GB RAM minimum</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="video"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full aspect-video bg-brand-gray-dark rounded-xl border border-brand-gray-mid shadow-[0_0_30px_rgba(255,230,0,0.05)] overflow-hidden flex flex-col items-center justify-center group"
              >
                <div className="w-16 h-16 rounded-full border border-brand-yellow/30 flex items-center justify-center mb-4 relative">
                  <div className="absolute inset-0 rounded-full border-2 border-brand-yellow animate-ping opacity-20" />
                  <Play className="text-brand-yellow fill-brand-yellow ml-1" size={24} />
                </div>
                <p className="font-mono text-brand-gray-text text-sm">Setup tutorial dropping soon</p>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
