import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function GestureReference() {
  const containerRef = useRef(null);
  
  // Track scroll progress for the central spine line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const gestures = [
    {
      id: 1,
      image: 'move.png',
      name: "Left Fist + Drag",
      mapping: "→ WASD (8-DIR)",
      description: "8-direction control. Small wrist movements, big plays."
    },
    {
      id: 2,
      image: 'attack.png',
      name: "Right Pinch Tap",
      mapping: "→ E (Instant Attack)",
      description: "Quick tap. Instant fire. No aim needed."
    },
    {
      id: 3,
      image: 'aim.png',
      name: "Right Pinch + Drag",
      mapping: "→ X (Aimed Attack)",
      description: "Hold and drag. Lock your shot."
    },
    {
      id: 4,
      image: 'super.png',
      name: "Right Fist Tap",
      mapping: "→ F (Super)",
      description: "Unleash your super. One fist tap."
    },
    {
      id: 5,
      image: 'aimed-super.png',
      name: "Right Fist + Drag",
      mapping: "→ C (Aimed Super)",
      description: "Precision super. Drag to aim."
    },
    {
      id: 6,
      image: 'hypercharge.png',
      name: "Right Peace ✌️",
      mapping: "→ R (Hypercharge)",
      description: "Flash the peace sign. Activate hypercharge."
    },
    {
      id: 7,
      image: 'gadget.png',
      name: "Right L-Shape 🤙",
      mapping: "→ Q (Gadget)",
      description: "Drop the gadget. Game-changing."
    }
  ];

  return (
    <section id="gestures" ref={containerRef} className="py-[120px] bg-brand-black relative flex flex-col items-center overflow-hidden">
      
      {/* Background Gradient for Spine */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-[radial-gradient(ellipse_at_center,rgba(255,230,0,0.02)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1000px] w-full mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-brand-yellow text-xs tracking-widest mb-6"
          >
            [ 7 GESTURES. INFINITE POSSIBILITIES. ]
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[56px] md:text-[80px] text-brand-white leading-[0.9]"
          >
            YOUR HAND IS THE CONTROLLER.
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Spine Background (Gray) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-gray-mid -translate-x-1/2 z-0 hidden md:block" />
          
          {/* Spine Fill (Yellow) - Animates on Scroll */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-yellow -translate-x-1/2 z-0 origin-top shadow-[0_0_10px_rgba(255,230,0,0.5)] hidden md:block"
            style={{ scaleY }}
          />

          {/* Mobile Spine (Static) */}
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-brand-yellow/20 z-0 md:hidden" />

          {/* Gesture Cards */}
          <div className="flex flex-col gap-12 md:gap-24 relative z-10">
            {gestures.map((gesture, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={gesture.id} className={`flex flex-col md:flex-row items-center w-full relative ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Central Node (Desktop) */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-brand-yellow shadow-[0_0_15px_rgba(255,230,0,0.8)] z-20 hidden md:block" />
                  
                  {/* Mobile Node */}
                  <div className="absolute left-[28px] top-6 w-3 h-3 rounded-full bg-brand-yellow shadow-[0_0_15px_rgba(255,230,0,0.8)] z-20 md:hidden -translate-x-1/2" />

                  {/* Empty Spacer (Desktop) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Container */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}
                  >
                    <div className="bg-brand-gray-dark border border-brand-yellow/10 rounded-xl overflow-hidden group hover:border-brand-yellow/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,230,0,0.05)] relative flex flex-col sm:flex-row">
                      
                      {/* Left: Image Area */}
                      <div className="w-full sm:w-[140px] h-[140px] bg-brand-gray-mid flex items-center justify-center shrink-0 border-b sm:border-b-0 sm:border-r border-brand-white/5 relative overflow-hidden">
                        {/* Glow Behind Image */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,230,0,0.1)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <img 
                          src={`/gestures/${gesture.image}`} 
                          alt={gesture.name}
                          className="w-[100px] h-[100px] object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 relative z-10"
                          onError={(e) => { 
                            e.target.style.display = 'none'; 
                            e.target.nextSibling.style.display = 'flex'; 
                          }}
                        />
                        {/* Placeholder if image missing */}
                        <div className="hidden absolute inset-0 items-center justify-center font-mono text-xs text-brand-gray-text/50">
                          [IMG]
                        </div>
                      </div>

                      {/* Right: Content Area */}
                      <div className="p-6 flex flex-col justify-center w-full">
                        <h3 className="font-heading font-bold text-xl text-brand-white mb-1">{gesture.name}</h3>
                        <div className="font-mono text-sm text-brand-yellow mb-3">{gesture.mapping}</div>
                        <p className="font-body text-sm text-brand-gray-text leading-relaxed">
                          {gesture.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
