import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const echoRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if it's a touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over clickable elements
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (isTouchDevice) return null;

  // Sizes
  const size = isClicking ? 6 : isHovering ? 12 : 8;
  const haloSize = isClicking ? 16 : isHovering ? 32 : 20;

  return (
    <>
      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePosition.x - haloSize / 2,
          y: mousePosition.y - haloSize / 2,
          width: haloSize,
          height: haloSize,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{
          backgroundColor: 'rgba(255, 230, 0, 0.2)', // yellow-dim
          boxShadow: '0 0 10px rgba(255, 230, 0, 0.4)', // yellow-glow
        }}
      />
      
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-brand-yellow"
        animate={{
          x: mousePosition.x - size / 2,
          y: mousePosition.y - size / 2,
          width: size,
          height: size,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0 }}
      />
      
      {/* Trailing Echo */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full bg-brand-yellow opacity-40"
        animate={{
          x: mousePosition.x - (size - 2) / 2,
          y: mousePosition.y - (size - 2) / 2,
          width: size - 2,
          height: size - 2,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
      />
    </>
  );
}
