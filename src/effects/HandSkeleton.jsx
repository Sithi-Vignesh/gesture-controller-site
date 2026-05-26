import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// MediaPipe hand skeleton topology (rough approximation for design)
// 21 points: 0 is wrist. 4, 8, 12, 16, 20 are fingertips.
const landmarks = [
  { id: 0, x: 50, y: 90 },  // Wrist
  // Thumb
  { id: 1, x: 30, y: 75 },
  { id: 2, x: 15, y: 60 },
  { id: 3, x: 5, y: 45 },
  { id: 4, x: 0, y: 30 },
  // Index
  { id: 5, x: 40, y: 55 },
  { id: 6, x: 35, y: 35 },
  { id: 7, x: 32, y: 15 },
  { id: 8, x: 30, y: 0 },
  // Middle
  { id: 9, x: 55, y: 50 },
  { id: 10, x: 55, y: 25 },
  { id: 11, x: 55, y: 5 },
  { id: 12, x: 55, y: -10 },
  // Ring
  { id: 13, x: 70, y: 55 },
  { id: 14, x: 75, y: 30 },
  { id: 15, x: 80, y: 10 },
  { id: 16, x: 82, y: -5 },
  // Pinky
  { id: 17, x: 85, y: 65 },
  { id: 18, x: 92, y: 45 },
  { id: 19, x: 98, y: 30 },
  { id: 20, x: 102, y: 15 },
];

const connections = [
  // Thumb
  [0, 1], [1, 2], [2, 3], [3, 4],
  // Index
  [0, 5], [5, 6], [6, 7], [7, 8],
  // Middle
  [5, 9], [9, 10], [10, 11], [11, 12],
  // Ring
  [9, 13], [13, 14], [14, 15], [15, 16],
  // Pinky
  [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]
];

export default function HandSkeleton({ opacity = 1, className = "", scale = 1 }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      return;
    }

    const handleMouseMove = (e) => {
      // Normalize mouse pos from -1 to 1 based on screen center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Max tilt is 15deg
  const tiltX = isMobile ? 0 : -mousePos.y * 15;
  const tiltY = isMobile ? 0 : mousePos.x * 15;
  const effectiveOpacity = isMobile ? 0.05 * opacity : 0.08 * opacity;

  return (
    <div 
      className={`pointer-events-none fixed z-0 ${className}`}
      style={{
        opacity: effectiveOpacity,
        willChange: 'transform',
      }}
    >
      <motion.div
        animate={{
          rotateX: tiltX,
          rotateY: tiltY,
          scale: [1 * scale, 1.02 * scale, 1 * scale],
        }}
        transition={{
          rotateX: { type: 'spring', stiffness: 50, damping: 20 },
          rotateY: { type: 'spring', stiffness: 50, damping: 20 },
          scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
        style={{
          transformStyle: 'preserve-3d',
          width: '60vh',
          height: '60vh',
          maxWidth: '500px',
          maxHeight: '500px',
        }}
      >
        <svg 
          viewBox="-20 -20 140 140" 
          width="100%" 
          height="100%" 
          style={{ overflow: 'visible' }}
        >
          <g>
            {/* Draw connections */}
            {connections.map(([startIdx, endIdx], i) => {
              const start = landmarks[startIdx];
              const end = landmarks[endIdx];
              return (
                <line
                  key={`line-${i}`}
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="var(--yellow)"
                  strokeWidth="0.5"
                  strokeOpacity="0.5" // 4% equivalent combined with container
                />
              );
            })}
            
            {/* Draw landmarks */}
            {landmarks.map((pt) => (
              <circle
                key={`pt-${pt.id}`}
                cx={pt.x}
                cy={pt.y}
                r="1.5"
                fill="var(--yellow)"
                fillOpacity="1" // 8% equivalent combined with container
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
