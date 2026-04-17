"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Mascot from "@/components/Mascot";
import IngredientCarousel from "@/components/IngredientCarousel";

type Product = {
  name: string;
  ingredients: string;
  note: string;
  gradient: string;
  glow: string;
  image: string;
};

const features = [
  {
    title: "30g Protein",
    description: "A decisive hero claim that feels built for performance.",
    icon: (
      <path d="M8 14.5C8 10.36 11.36 7 15.5 7S23 10.36 23 14.5 19.64 22 15.5 22 8 18.64 8 14.5Zm7.5-5v10m-5-5h10" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Unique Stick Format",
    description: "A 16 cm stick that instantly separates the brand from bars.",
    icon: (
      <path d="M10 7h10a3 3 0 0 1 3 3v14H7V10a3 3 0 0 1 3-3Zm2 4h6m-6 4h6m-6 4h4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Clean Ingredients",
    description: "Readable, familiar ingredients that build trust fast.",
    icon: (
      <path d="M20.5 6.5c-4.2 0-8.2 1.8-10.5 5.1C7.4 14.8 7.7 19 10 21.5c2.5-2.2 6.7-2.4 9.9-1.1 1.6-4.8.9-10.1-1.4-13.9Zm-10.3 10.3c2.2-2.1 5.7-3 8.8-2.9" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "No Added Sugar",
    description: "A clean profile that stays premium and easy to understand.",
    icon: (
      <path d="M13 7.5h4a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4Zm1 3.5 6 6m0-6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Easy to Carry",
    description: "Made for bags, desks, gym counters, and retail racks.",
    icon: (
      <path d="M10.5 11V9.5A4.5 4.5 0 0 1 15 5a4.5 4.5 0 0 1 4.5 4.5V11m-8.5 0h8.5a2 2 0 0 1 2 2v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-6a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

const products: Product[] = [
  {
    name: "Classic Cocoa",
    ingredients: "Dates · Soy protein · Peanuts",
    note: "Balanced, rich, and easy to stock.",
    gradient: "linear-gradient(180deg, #12253e 0%, #223f66 48%, #101923 100%)",
     glow: "rgba(15, 23, 42, 0.28)",
     image: "/Gemini_Generated_Image_svb3oasvb3oasvb3.png",
  },
  {
    name: "Golden Peanut",
    ingredients: "Dates · Peanuts · Bajra",
    note: "Warm, clean, and gym-friendly.",
    gradient: "linear-gradient(180deg, #d7a470 0%, #e8bf93 48%, #8a5a2e 100%)",
    glow: "rgba(240, 165, 110, 0.26)",
    image: "/Gemini_Generated_Image_ggys2sggys2sggys.png",
  },
  {
    name: "Midnight Cocoa",
    ingredients: "Dates · Soy protein · Cocoa",
    note: "Premium, focused, and retail-ready.",
    gradient: "linear-gradient(180deg, #0d1522 0%, #223247 50%, #08101a 100%)",
    glow: "rgba(59, 130, 246, 0.22)",
    image: "/Gemini_Generated_Image_svb3oasvb3oasvb3.png",
  },
];

const storyPoints = [
  {
    title: "Built for performance",
    copy: "30g protein gives The Fit Tales a claim that speaks to athletes, gym-goers, and active consumers instantly.",
  },
  {
    title: "Designed for convenience",
    copy: "The stick format is easy to carry, easy to understand, and fits a busy daily routine.",
  },
  {
    title: "Not another boring bar",
    copy: "A long, premium stick silhouette makes the product memorable on shelf and easier to differentiate.",
  },
];

const ingredients = ["Dates", "Soy Protein", "Peanuts", "Bajra", "Cocoa"];

const ctaButtons = [
  { label: "Explore Product", href: "#products", primary: true },
  { label: "For Business", href: "#business", primary: false },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.08,
    },
  },
};

function AnimatedProteinCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    let frame = 0;

    const tick = (time: number) => {
      const progress = Math.min((time - startTime) / 1100, 1);
      setCount(Math.floor(progress * 30));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <span>{count}g</span>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div variants={sectionVariants} className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0f172a]/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#5b6472] shadow-sm backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-[#f0a56e]" />
        {eyebrow}
      </div>
      <h2 className="font-(family-name:--font-display) text-3xl font-semibold tracking-tight text-[#091423] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#5b6472] sm:text-lg">{description}</p>
    </motion.div>
  );
}

function FeatureIcon({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#0f172a]/8 bg-white shadow-sm">
      <svg viewBox="0 0 30 30" className="h-6 w-6 text-[#091423]" fill="none" stroke="currentColor" strokeWidth="1.8">
        {children}
      </svg>
    </div>
  );
}

function ProductMockup({ size = "base", animated = true, src = "/Gemini_Generated_Image_svb3oasvb3oasvb3.png" }: { size?: "sm" | "base" | "lg"; animated?: boolean; src?: string }) {
  const sizeMap = {
    sm: "w-20 h-32",
    base: "w-32 h-56",
    lg: "w-72 h-[40rem]",
  };

  return (
    <motion.div
      animate={animated ? { y: [0, -12, 0] } : {}}
      transition={animated ? { duration: 4, repeat: Infinity, ease: "easeInOut" } : {}}
      className={`${sizeMap[size]} relative mx-auto bg-transparent`}
      whileHover={animated ? { scale: 1.05 } : {}}
    >
      <Image
        src={src}
        alt="The Fit Tales product mockup"
        fill
        className="object-contain drop-shadow-2xl"
        priority
        sizes="(max-width: 768px) 120px, (max-width: 1024px) 200px, 300px"
      />
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Mascot />

      <main id="top" className="relative">
        <section className="relative z-30">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#dce9ff]/60 blur-3xl" />
            <div className="absolute -right-24 top-24 h-64 w-64 rounded-full bg-[#f0a56e]/12 blur-3xl" />
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-0 pt-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8 lg:pb-0 lg:pt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionVariants}
              className="relative z-10 flex flex-col justify-start lg:pt-4"
            >
              <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#091423]/10 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-[#5b6472] shadow-sm backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#f0a56e]" />
                Clean protein, premium format
              </div>

              <h1 className="max-w-3xl font-(family-name:--font-display) text-4xl font-semibold tracking-tight leading-[1.08] text-[#091423] sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block">Not Your Average Protein Bar.</span>
                <span className="block text-[#223f66]">This is a Protein Stick.</span>
              </h1>

              <p className="mt-4 max-w-2xl text-lg leading-7 text-[#5b6472] sm:text-xl">
                The Fit Tales is a premium high-protein snack stick for gym-goers, busy professionals,
                and B2B buyers who want a better shelf story. <span className="font-semibold text-[#091423]">30g protein, clean ingredients, and a format that stands out.</span>
              </p>    
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative z-10 lg:pt-4 flex justify-center"
            >
              <ProductMockup size="lg" animated={true} />
            </motion.div>
          </div>
        </section>

        {/* Packaging Zig-Zag Divider */}
        <div className="relative z-20 w-full h-6 pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)] -mt-12 lg:-mt-28 flex items-end">
          <svg width="100%" height="24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="zigzag" x="0" y="0" width="32" height="24" patternUnits="userSpaceOnUse">
                <path d="M-16 24 L0 8 L16 24 L32 8 L48 24 Z" fill="#d4e4fc" stroke="#d4e4fc"  />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="24" fill="url(#zigzag)" />
          </svg>
        </div>

        <div className="w-full bg-[#d4e4fc] pb-12 pt-4">

        <section className="mx-auto max-w-7xl px-6 pb-8 lg:px-8 lg:pb-12 lg:pt-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={sectionVariants}
            className="rounded-4xl border border-[#091423]/8 bg-white/75 px-6 py-8 shadow-[0_18px_60px_rgba(9,20,35,0.06)] backdrop-blur-xl lg:px-8"
          >
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ y: -4 }}
                  className="group rounded-3xl border border-[#091423]/8 bg-white/85 p-5 shadow-[0_12px_30px_rgba(9,20,35,0.05)] transition-shadow hover:shadow-[0_18px_38px_rgba(9,20,35,0.08)]"
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <h3 className="mt-4 font-(family-name:--font-display) text-lg font-semibold text-[#091423]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5b6472]">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Product Showcase"
            title="A stick format that looks premium, converts quickly, and explains itself instantly."
            description="Clean cards, strong shelf presence, and flavor stories that feel elevated rather than generic."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={sectionVariants}
            className="mt-10 grid gap-5 lg:grid-cols-3"
          >
            {products.map((product) => (
              <motion.article
                key={product.name}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ duration: 0.25 }}
                className="group overflow-hidden rounded-4xl border border-[#091423]/8 bg-white/82 shadow-[0_18px_50px_rgba(9,20,35,0.06)] backdrop-blur-xl"
              >
                <div className="p-5">
                  <div className="relative overflow-hidden rounded-3xl border border-white/70 bg-[#f7f9fc] p-8 flex justify-center min-h-72">
                    <ProductMockup size="sm" animated={true} src={product.image} />
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-(family-name:--font-display) text-2xl font-semibold tracking-tight text-[#091423]">{product.name}</h3>
                      <p className="mt-1 text-sm text-[#5b6472]">{product.note}</p>
                    </div>
                    <div className="rounded-full border border-[#091423]/8 bg-[#f7f9fc] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#091423]">
                      30g
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-[#5b6472]">{product.ingredients}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section id="nutrition" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Core Nutrition"
            title="Clean macros. No hiding behind the label."
            description="We focus on what matters most: high protein and clean energy, without the added junk."
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {[
              { label: "Protein", value: "30g" },
              { label: "Calories", value: "220" },
              { label: "Added Sugar", value: "0g" },
              { label: "Net Carbs", value: "8g" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center justify-center rounded-3xl border border-[#091423]/8 bg-white/85 p-6 shadow-[0_12px_30px_rgba(9,20,35,0.05)] transition-shadow hover:shadow-[0_18px_38px_rgba(9,20,35,0.08)]"
              >
                <p className="font-(family-name:--font-display) text-3xl font-bold text-[#091423] lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-[#5b6472]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Why Fit Tales"
            title="A product story that balances performance, convenience, and premium shelf appeal."
            description="This is positioned for consumers who want cleaner fuel and for buyers who want a differentiated format."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="space-y-4"
            >
              {storyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  whileHover={{ x: 4 }}
                  className="rounded-3xl border border-[#091423]/8 bg-white/82 p-6 shadow-[0_16px_40px_rgba(9,20,35,0.06)] backdrop-blur-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#091423] text-sm font-semibold text-white shadow-[0_14px_30px_rgba(9,20,35,0.18)]">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-(family-name:--font-display) text-xl font-semibold text-[#091423]">{point.title}</h3>
                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5b6472] sm:text-base">{point.copy}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-4xl border border-[#091423]/8 bg-white/78 p-5 shadow-[0_20px_60px_rgba(9,20,35,0.08)] backdrop-blur-xl flex justify-center"
              >
                <ProductMockup size="base" animated={true} />
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-[#091423]/8 bg-[#f7f9fc] p-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#5b6472]">Protein</p>
                    <p className="mt-2 font-(family-name:--font-display) text-2xl font-semibold text-[#091423]"><AnimatedProteinCount /></p>
                  </div>
                  <div className="rounded-2xl border border-[#091423]/8 bg-[#f7f9fc] p-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#5b6472]">Format</p>
                    <p className="mt-2 font-(family-name:--font-display) text-2xl font-semibold text-[#091423]">Stick</p>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-[#091423]/8 bg-[#f7f9fc] p-3 sm:col-span-1">
                    <p className="text-xs uppercase tracking-[0.24em] text-[#5b6472]">Positioning</p>
                    <p className="mt-2 font-(family-name:--font-display) text-2xl font-semibold text-[#091423]">Premium</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="positioning" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Versatile Form Factor"
            title="Designed for where your customers are."
            description="A premium product means it works perfectly in high-end retail, hospitality, fitness, and corporate environments. Slide to explore."
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 -mx-6 px-6 lg:-mx-8 lg:px-8"
          >
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 hide-scrollbar">
              {[
                { title: "Hotel Minibars", description: "Elevate your guest experience with a clean, guilt-free premium snack." },
                { title: "Gym Counters", description: "A high-protein impulse buy perfectly positioned for post-workout recovery." },
                { title: "Corporate Pantries", description: "Provide employees with steady energy instead of sugar crashes." },
                { title: "Cafes & Coffee Shops", description: "A sleek add-on to morning orders that complements your brand." },
                { title: "Travel & Transit", description: "Easy-to-carry nourishment for busy professionals on the move." }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="min-w-[280px] max-w-[320px] shrink-0 snap-center snap-always rounded-3xl border border-[#091423]/8 bg-white/82 shadow-[0_16px_40px_rgba(9,20,35,0.06)] backdrop-blur-xl overflow-hidden flex flex-col"
                >
                  <div className="h-48 w-full bg-[#f7f9fc] border-b border-[#091423]/5 flex items-center justify-center text-[#5b6472]">
                    <span className="text-sm font-medium opacity-50">[Image: {item.title}]</span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-(family-name:--font-display) text-xl font-semibold text-[#091423]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5b6472]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Minimal Custom Scrollbar Styles for the Carousel */}
            <style jsx>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
              .hide-scrollbar {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
              }
            `}</style>
          </motion.div>
        </section>

        <IngredientCarousel />

        <section id="business" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Partner With Us"
            title="B2B-ready positioning for gyms, distributors, and retail partners."
            description="The Fit Tales is built to move from consumer demand into wholesale and distribution conversations without losing premium appeal."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              className="grid gap-4"
            >
              {[
                ["Bulk supply", "Reliable volume conversations for recurring procurement."],
                ["Gym partnerships", "A high-conversion snack for fitness counters and member programs."],
                ["Retail distribution", "Shelf-friendly packaging and a format that stands out fast."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-3xl border border-[#091423]/8 bg-white/82 p-6 shadow-[0_16px_40px_rgba(9,20,35,0.06)] backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#f0a56e] shadow-[0_0_0_6px_rgba(240,165,110,0.18)]" />
                    <div>
                      <h3 className="font-(family-name:--font-display) text-xl font-semibold text-[#091423]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#5b6472] sm:text-base">{copy}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border border-[#091423]/8 bg-[#091423] p-6 text-white shadow-[0_22px_60px_rgba(9,20,35,0.18)]">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">Wholesale CTA</p>
                <h3 className="mt-3 font-(family-name:--font-display) text-2xl font-semibold tracking-tight">Contact for bulk orders</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/70">Use this for pricing, sample requests, or distribution discussions.</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#091423] shadow-[0_12px_30px_rgba(255,255,255,0.12)] transition-transform hover:-translate-y-0.5"
                >
                  Start a conversation
                </a>
              </div>
            </motion.div>

            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-4xl border border-[#091423]/8 bg-white/82 p-6 shadow-[0_20px_60px_rgba(9,20,35,0.08)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-[#091423]/8 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#5b6472]">B2B inquiry</p>
                  <h3 className="mt-2 font-(family-name:--font-display) text-2xl font-semibold text-[#091423]">Tell us about your channel</h3>
                </div>
                <div className="rounded-full border border-[#091423]/8 bg-[#f7f9fc] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#091423]">
                  24h response
                </div>
              </div>

              <form className="mt-6 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#091423]">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      className="rounded-2xl border border-[#091423]/10 bg-white px-4 py-3 text-sm text-[#091423] outline-none transition focus:border-[#091423]/20 focus:ring-4 focus:ring-[#dce9ff]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-[#091423]">
                    Company
                    <input
                      type="text"
                      placeholder="Company / gym / retailer"
                      className="rounded-2xl border border-[#091423]/10 bg-white px-4 py-3 text-sm text-[#091423] outline-none transition focus:border-[#091423]/20 focus:ring-4 focus:ring-[#dce9ff]"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-medium text-[#091423]">
                    Email
                    <input
                      type="email"
                      placeholder="name@company.com"
                      className="rounded-2xl border border-[#091423]/10 bg-white px-4 py-3 text-sm text-[#091423] outline-none transition focus:border-[#091423]/20 focus:ring-4 focus:ring-[#dce9ff]"
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-medium text-[#091423]">
                    Estimated volume
                    <input
                      type="text"
                      placeholder="e.g. 5,000 sticks/month"
                      className="rounded-2xl border border-[#091423]/10 bg-white px-4 py-3 text-sm text-[#091423] outline-none transition focus:border-[#091423]/20 focus:ring-4 focus:ring-[#dce9ff]"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-medium text-[#091423]">
                  Notes
                  <textarea
                    rows={4}
                    placeholder="Tell us about your retail, gym, or distribution requirement."
                    className="rounded-2xl border border-[#091423]/10 bg-white px-4 py-3 text-sm text-[#091423] outline-none transition focus:border-[#091423]/20 focus:ring-4 focus:ring-[#dce9ff]"
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#091423] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(9,20,35,0.2)] transition-transform hover:-translate-y-0.5"
                  >
                    Contact for Bulk Orders
                  </button>
                  <p className="text-sm leading-6 text-[#5b6472]">A simple, trustworthy inquiry path designed to convert wholesale interest.</p>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        <section id="ingredients" className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Ingredients Transparency"
            title="Simple ingredients, presented with the clarity modern buyers expect."
            description="Keep the promise clean and easy to understand. No clutter, no confusion, just trust-forward design."
            align="center"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          >
            {ingredients.map((ingredient) => (
              <motion.div
                key={ingredient}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-[#091423]/8 bg-white/84 p-5 text-center shadow-[0_14px_35px_rgba(9,20,35,0.06)] backdrop-blur-xl"
              >
                <div className="mx-auto h-12 w-12 rounded-2xl bg-[linear-gradient(180deg,rgba(220,233,255,0.88),rgba(255,255,255,0.9))] shadow-inner shadow-white/60" />
                <p className="mt-4 font-(family-name:--font-display) text-lg font-semibold text-[#091423]">{ingredient}</p>
                <p className="mt-2 text-sm leading-6 text-[#5b6472]">Visible, familiar, and easy to trust.</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-20">
          <div className="overflow-hidden rounded-[2.2rem] border border-[#091423]/8 bg-[#091423] px-6 py-10 text-white shadow-[0_24px_70px_rgba(9,20,35,0.2)] sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-white/55">Final CTA</p>
                <h2 className="mt-4 max-w-3xl font-(family-name:--font-display) text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  Fuel your day smarter with a stick that actually stands out.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Fit Tales is made to sell to consumers and to convince buyers. The same product story works across D2C, wholesale, and retail.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a href="#products" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-[#091423] shadow-[0_14px_30px_rgba(255,255,255,0.16)] transition-transform hover:-translate-y-0.5">Buy Now</a>
                <a href="#business" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur transition-transform hover:-translate-y-0.5 hover:bg-white/12">Become a Partner</a>
              </div>
            </div>
          </div>
        </section>

        </div>

        <section className="w-full bg-[#d4e4fc]">
          <Image
            src="/Gemini_Generated_Image_ggys2sggys2sggys.png"
            alt="The Fit Tales Full Page Visual"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </section>
      </main>

      <footer className="border-t border-[#091423]/8 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-(family-name:--font-display) text-lg font-semibold text-[#091423]">The Fit Tales</p>
            <p className="mt-1 text-sm text-[#5b6472]">High-protein sticks for D2C and B2B growth.</p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-[#5b6472]">
            <a className="transition-colors hover:text-[#091423]" href="#top">About</a>
            <a className="transition-colors hover:text-[#091423]" href="#products">Product</a>
            <a className="transition-colors hover:text-[#091423]" href="#contact">Contact</a>
            <a className="transition-colors hover:text-[#091423]" href="#business">B2B</a>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#5b6472]">
            <a className="rounded-full border border-[#091423]/8 bg-white px-3 py-2 transition-colors hover:text-[#091423]" href="#top">Instagram</a>
            <a className="rounded-full border border-[#091423]/8 bg-white px-3 py-2 transition-colors hover:text-[#091423]" href="#top">LinkedIn</a>
            <a className="rounded-full border border-[#091423]/8 bg-white px-3 py-2 transition-colors hover:text-[#091423]" href="#top">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
