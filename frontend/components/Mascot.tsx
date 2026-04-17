"use client";

import { motion, useScroll, useTransform, useAnimation, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

export default function Mascot() {
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Monitor scroll to trigger repeat: infinity pull-ups and typewriter
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // Top-section specific repeat: infinity for Gym Phase (40% - 60%)
    if (v >= 0.4 && v <= 0.6) {
      controls.start({
        y: [0, -15, 0],
        transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
      });
    } else {
      controls.stop();
      controls.set({ y: 0 }); // reset
    }

    // Typewriter trigger
    if (v > 0.85 && !isTyping) {
      setIsTyping(true);
      let i = 0;
      const text = "30g later...";
      const interval = setInterval(() => {
        setTypedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, 100);
    } else if (v <= 0.85 && isTyping) {
      setIsTyping(false);
      setTypedText("");
    }
  });

  // Keyframes for sequences
  // 0.0 - 0.15: Hero (slim, right arm extending out left to grip stick)
  // 0.20 - 0.30: Hand-off (pointing right)
  // 0.40 - 0.60: Gym (pull-up down/up via simple keyframes representation)
  // 0.70 - 0.85: Consumption (chewing tilt)
  // 0.90 - 1.00: Power pose
  const keyframes = [0, 0.15, 0.25, 0.4, 0.6, 0.75, 0.9, 1];

  
  const headX = useTransform(scrollYProgress, keyframes, [50, 50, 50, 50, 50, 55, 50, 50]);
  const headY = useTransform(scrollYProgress, keyframes, [30, 30, 30, 40, 40, 35, 15, 15]);
  const headR = useTransform(scrollYProgress, keyframes, [9, 9, 9, 9, 9, 9, 12, 12]);

  const bodyD = useTransform(scrollYProgress, keyframes, [
    "M 50 40 Q 50 60 50 80",   // Hero
    "M 50 40 Q 50 60 50 80",
    "M 50 40 Q 50 60 50 80",   // Pointing
    "M 50 52 Q 50 65 50 85",   // Gym start
    "M 50 52 Q 50 65 50 85",   // Gym end
    "M 50 45 Q 50 65 50 85",   // Consumption
    "M 50 29 Q 50 49 50 70",   // Power pose
    "M 50 29 Q 50 49 50 70"
  ]);
  
  const lArmD = useTransform(scrollYProgress, keyframes, [
    "M 50 50 L 45 65 L 40 80", // Hero
    "M 50 50 L 45 65 L 40 80",
    "M 50 50 L 45 65 L 40 80", // Pointing
    "M 45 55 L 20 25 L 20 5",  // Gym start (Shoulders widen)
    "M 45 55 L 20 25 L 20 5",  // Gym end
    "M 50 55 L 40 60 L 50 70", // Consumption
    "M 40 35 L 20 45 L 35 65", // Power pose (Bulked)
    "M 40 35 L 20 45 L 35 65"
  ]);

  const rArmD = useTransform(scrollYProgress, keyframes, [
    "M 50 50 L -150 150 L -150 150",   // Hero (Grip left out of bounds 200px)
    "M 50 50 L -150 50 L -150 50",     // Traveling up
    "M 50 50 L 100 50 L 100 50",       // Pointing right edge
    "M 55 55 L 80 25 L 80 5",          // Gym start (Shoulders widen)
    "M 55 55 L 80 25 L 80 5",          // Gym end
    "M 50 55 L 60 50 L 55 40",         // Consumption 
    "M 60 35 L 80 45 L 65 65",         // Power pose (Bulked)
    "M 60 35 L 80 45 L 65 65"
  ]);

  const lLegD = useTransform(scrollYProgress, keyframes, [
    "M 50 80 L 40 90 L 40 100",  
    "M 50 80 L 40 90 L 40 100",
    "M 50 80 L 40 90 L 40 100",
    "M 50 85 L 40 95 L 40 100",  
    "M 50 85 L 40 95 L 40 100",
    "M 50 85 L 40 100 L 40 115", 
    "M 50 70 L 25 85 L 25 100",  
    "M 50 70 L 25 85 L 25 100"
  ]);

  const rLegD = useTransform(scrollYProgress, keyframes, [
    "M 50 80 L 60 90 L 60 100",  
    "M 50 80 L 60 90 L 60 100",
    "M 50 80 L 60 90 L 60 100",
    "M 50 85 L 60 95 L 60 100",  
    "M 50 85 L 60 95 L 60 100",
    "M 50 85 L 60 100 L 60 115", 
    "M 50 70 L 75 85 L 75 100",  
    "M 50 70 L 75 85 L 75 100"
  ]);

  // Small stick prop for Consumption phase
  const smallStickOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
  const smallStickD = useTransform(scrollYProgress, keyframes, [
    "M 0 0 L 0 0",
    "M 0 0 L 0 0",
    "M 0 0 L 0 0",
    "M 0 0 L 0 0",
    "M 0 0 L 0 0",
    "M 65 50 L 55 40",  // Held in hand during consumption
    "M 0 0 L 0 0",
    "M 0 0 L 0 0"
  ]);

  // Color switches based on section contrast roughly
  const strokeColor = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.8, 0.9],
    ["#000000", "#000000", "#000000", "#ffffff"]
  );

  // Stroke width growth (bulk up from 1.5 to 3px)
  const strokeWidth = useTransform(scrollYProgress, [0.4, 0.6, 0.9, 1.0], [1.5, 3, 3, 3]);

  // Shimmer effect (Power pose)
  const shimmer = useTransform(scrollYProgress, [0.9, 1], ["drop-shadow(0 0 0px rgba(0,0,0,0))", "drop-shadow(0 0 8px rgba(255,255,255,0.8))"]);

  const bubbleOpacity = useTransform(scrollYProgress, [0.8, 0.85], [0, 1]);
  const bubbleScale = useTransform(scrollYProgress, [0.8, 0.85], [0.8, 1]);

  if (!mounted) return null;

  return (
    <div className="fixed z-10 flex flex-col items-center justify-end pointer-events-none 
      bottom-8 right-2 sm:right-4 md:right-8 lg:right-[max(1rem,calc(50%-46rem))]">
      
      <motion.div animate={controls} className="relative flex h-24 w-24 items-center justify-center lg:h-28 lg:w-28 backdrop-blur-[2px] rounded-full will-change-transform">

        
        {/* Handwritten thought bubble */}
        <motion.div
          style={{ opacity: bubbleOpacity, scale: bubbleScale, transformOrigin: 'bottom center', transitionDelay: '1s' }}
          className="absolute -top-6 -right-4 -rotate-12 whitespace-nowrap px-2 py-1 text-[10px] font-medium tracking-wider text-[#5b6472]"
        >
          {typedText}
        </motion.div>
        
        {/* Mascot character */}
        <motion.svg
          viewBox="0 0 100 120"
          className="h-full w-full overflow-visible"
          style={{ color: strokeColor, filter: shimmer }}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Head */}
          <motion.circle cx={headX} cy={headY} r={headR} fill="none" stroke="currentColor" style={{ strokeWidth }} />
          {/* Body */}
          <motion.path d={bodyD} fill="none" stroke="currentColor" style={{ strokeWidth }} />
          {/* Left Arm */}
          <motion.path d={lArmD} fill="none" stroke="currentColor" style={{ strokeWidth }} />
          {/* Right Arm */}
          <motion.path d={rArmD} fill="none" stroke="currentColor" style={{ strokeWidth }} />
          {/* Left Leg */}
          <motion.path d={lLegD} fill="none" stroke="currentColor" style={{ strokeWidth }} />
          {/* Right Leg */}
          <motion.path d={rLegD} fill="none" stroke="currentColor" style={{ strokeWidth }} />
          
          {/* Small Stick */ }
          <motion.path d={smallStickD} fill="none" stroke="#f0a56e" style={{ strokeWidth: 3, opacity: smallStickOpacity }} />
        </motion.svg>
      </motion.div>
    </div>
  );
}
