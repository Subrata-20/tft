"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const ingredients = [
  {
    id: "cocoa",
    name: "Classic Cocoa",
    why: "We use premium, Dutch-processed cocoa to deliver a rich, authentic chocolate experience without relying on artificial flavors or heavy sugar syrups.",
    benefit: "Antioxidant Rich",
    image: "/Gemini_Generated_Image_svb3oasvb3oasvb3.png", // Reusing existing mockup
    theme: "#12253e", // Cocoa Brown/Navy
  },
  {
    id: "peanut",
    name: "Golden Peanut",
    why: "Roasted peanuts provide a natural source of healthy fats and sustained energy, perfectly complementing our protein blend for a satisfying crunch.",
    benefit: "Healthy Fats",
    image: "/Gemini_Generated_Image_ggys2sggys2sggys.png", // Reusing existing mockup
    theme: "#8a5a2e", // Deep Teal / Peanut Brown
  },
  {
    id: "bajra",
    name: "Pearl Bajra",
    why: "A drought-resistant ancient grain that adds a unique crunch and complex carbohydrates to keep you fueled longer during intense workouts.",
    benefit: "Low Glycemic Index",
    image: "/Gemini_Generated_Image_svb3oasvb3oasvb3.png", // Fallback
    theme: "#223f66",
  },
];

const variants = {
  topLeft: {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  topRight: {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  bottomLeft: {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  bottomRight: {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

const transition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] };

export default function IngredientCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ingredients.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ingredients.length) % ingredients.length);
  };

  const current = ingredients[currentIndex];

  return (
    <motion.section
      className="relative min-h-[100svh] w-full overflow-hidden text-white"
      animate={{ backgroundColor: current.theme }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Minimalist Centered Navigation */}
      <nav className="absolute left-0 right-0 top-0 z-50 flex justify-center p-8">
        <ul className="flex gap-12 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-white/90">
          <li><a href="#shop" className="hover:text-white transition-colors">Shop</a></li>
          <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
        </ul>
      </nav>

      {/* Grid Container */}
      <div className="mx-auto grid h-screen w-full max-w-[100rem] p-4 pt-24 md:p-8 md:pt-28 grid-cols-1 md:grid-cols-[1.2fr_0.8fr] md:grid-rows-[1.1fr_0.9fr] gap-4">
        
        <AnimatePresence mode="wait">
          {/* Top Left: The Name (Panel B) */}
          <motion.div
            key={`tl-${current.id}`}
            variants={variants.topLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="flex flex-col justify-end rounded-3xl bg-white/5 p-8 backdrop-blur-sm md:p-12 md:row-start-1 md:col-start-1"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              Ingredient 0{currentIndex + 1}
            </p>
            <h2 className="font-(family-name:--font-display) text-5xl font-bold leading-none tracking-tight sm:text-7xl md:text-8xl">
              {current.name}
            </h2>
          </motion.div>

          {/* Top Right: The Image (Panel A) */}
          <motion.div
            key={`tr-${current.id}`}
            variants={variants.topRight}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="group relative flex items-center justify-center overflow-hidden rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:row-start-1 md:col-start-2 min-h-[300px]"
          >
            <div className="relative h-64 w-64 transition-transform duration-700 ease-out group-hover:scale-105 md:h-full md:w-full">
              <Image
                src={current.image}
                alt={current.name}
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Bottom Left: The Why (Panel C) */}
          <motion.div
            key={`bl-${current.id}`}
            variants={variants.bottomLeft}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 backdrop-blur-sm md:p-12 md:row-start-2 md:col-start-1"
          >
            <p className="text-xl leading-relaxed text-white/80 md:max-w-xl md:text-2xl lg:text-3xl">
              "{current.why}"
            </p>
            
            <div className="mt-8 flex gap-4">
              <button 
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
                aria-label="Previous ingredient"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-black"
                aria-label="Next ingredient"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Bottom Right: The Benefit (Panel D) */}
          <motion.div
            key={`br-${current.id}`}
            variants={variants.bottomRight}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="flex flex-col justify-center rounded-3xl bg-white/10 p-8 backdrop-blur-sm md:p-12 md:row-start-2 md:col-start-2"
          >
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-white/60">
              The Benefit
            </p>
            <h3 className="font-(family-name:--font-display) text-3xl font-semibold md:text-4xl lg:text-5xl">
              {current.benefit}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}