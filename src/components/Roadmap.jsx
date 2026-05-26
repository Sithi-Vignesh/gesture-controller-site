import React from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
  const nodes = [
    {
      id: "v1",
      status: "SHIPPED",
      badgeColor: "text-brand-yellow bg-brand-yellow/10 border-brand-yellow/20",
      dotClass: "bg-brand-yellow shadow-[0_0_15px_rgba(255,230,0,0.8)] animate-pulse",
      title: "Gesture Controller V1",
      description: "7 gestures. Brawl Stars on LDPlayer. Windows installer. Real-time 30 FPS pipeline. Shipped.",
      link: { text: "GitHub Release →", url: "#" }
    },
    {
      id: "v2",
      status: "IN PLANNING",
      badgeColor: "text-brand-gray-text bg-brand-white/5 border-brand-white/10",
      dotClass: "bg-[#3366FF] shadow-[0_0_10px_rgba(51,102,255,0.4)] opacity-60",
      title: "Multi-Game Support",
      description: "New games. New gesture profiles. More ways to play.",
      footer: "Stay tuned."
    },
    {
      id: "v3",
      status: "CLASSIFIED",
      badgeColor: "text-[#FF4444] bg-[#FF4444]/10 border-[#FF4444]/20",
      dotClass: "bg-brand-gray-mid border border-brand-white/10",
      title: "???",
      description: "The biggest update we've ever planned. We're not ready to talk about it yet.",
      blurText: true
    }
  ];

  return (
    <section id="roadmap" className="py-32 bg-brand-black w-full flex flex-col items-center overflow-hidden border-t border-brand-white/5">
      <div className="max-w-[1200px] w-full mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-yellow text-xs tracking-widest mb-6"
          >
            [ WHAT'S COMING ]
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[56px] md:text-[80px] text-brand-white leading-[0.9]"
          >
            THIS IS JUST THE BEGINNING.
          </motion.h2>
        </div>

        {/* Journey Visualization */}
        <div className="relative mt-12 md:mt-24">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-brand-gray-mid -z-10" />
          <div className="hidden md:block absolute top-6 left-0 w-1/3 h-[2px] bg-brand-yellow shadow-[0_0_10px_rgba(255,230,0,0.5)] -z-10" />
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-[23px] w-[2px] bg-brand-gray-mid -z-10" />
          <div className="md:hidden absolute top-0 h-1/3 left-[23px] w-[2px] bg-brand-yellow shadow-[0_0_10px_rgba(255,230,0,0.5)] -z-10" />

          {/* Nodes Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {nodes.map((node, idx) => (
              <motion.div 
                key={node.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center group"
              >
                {/* Node Dot */}
                <div className={`w-12 h-12 rounded-full bg-brand-black border-4 border-brand-black flex items-center justify-center shrink-0 mb-0 md:mb-8 z-10 mr-6 md:mr-0`}>
                  <div className={`w-3 h-3 rounded-full ${node.dotClass}`} />
                </div>

                {/* Content Area */}
                <div className="flex flex-col items-start md:items-center flex-1">
                  {/* Badge */}
                  <div className={`font-mono text-[10px] tracking-widest px-3 py-1 rounded border mb-4 ${node.badgeColor}`}>
                    {node.status}
                  </div>
                  
                  <h3 className={`font-heading font-bold text-xl mb-3 ${node.title === '???' ? 'font-display text-4xl tracking-widest' : 'text-brand-white'}`}>
                    {node.title}
                  </h3>
                  
                  <p className={`font-body text-sm text-brand-gray-text leading-relaxed max-w-[280px] ${node.blurText ? 'blur-[3px] select-none opacity-50' : ''}`}>
                    {node.description}
                  </p>

                  {node.link && (
                    <a href={node.link.url} className="mt-4 font-mono text-xs text-brand-yellow hover:text-brand-white transition-colors">
                      {node.link.text}
                    </a>
                  )}

                  {node.footer && (
                    <p className="mt-4 font-mono text-xs text-brand-gray-text italic">
                      {node.footer}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
