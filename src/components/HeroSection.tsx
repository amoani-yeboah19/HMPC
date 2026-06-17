import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Star, ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  { src: "/images/gallery-5.webp", label: "Seaside Villa Terrace" },
  { src: "/images/gallery-2.webp", label: "Madison Ave Lobby" },
  { src: "/images/gallery-1.webp", label: "Ritz Carlton Spa" },
  { src: "/images/gallery-3.webp", label: "Tribeca Penthouse" },
];

const SLIDE_MS = 6000;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  // Preload slide images so crossfades are instant
  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex h-screen min-h-[640px] items-center justify-center overflow-hidden">
      {/* Crossfading background slideshow */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-background">
        <AnimatePresence>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
                current % 2 === 0 ? "animate-kenburns" : "animate-kenburns-alt"
              }`}
              style={{ backgroundImage: `url('${slides[current].src}')` }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered overlays for depth + legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
        {/* Gold ambient glow */}
        <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container relative z-10 mx-auto flex flex-col items-center px-4 text-center md:items-start md:px-8 md:text-left"
      >
        <motion.div variants={item} className="mb-5 inline-flex items-center gap-2">
          <div className="h-[2px] w-8 bg-primary" />
          <span className="text-sm font-medium uppercase tracking-widest text-primary">
            HMPC Tiling Atelier
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-6 max-w-4xl font-display text-5xl font-bold leading-[0.9] text-white md:text-7xl lg:text-8xl"
        >
          Precision Tiling.
          <br />
          <span className="text-gold-gradient">Enduring Luxury.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-8 max-w-2xl text-lg font-light text-gray-300 md:text-xl"
        >
          Elevating architectural spaces through uncompromising craftsmanship and premium
          materials. Built for those who demand excellence.
        </motion.p>

        {/* Trust row */}
        <motion.div
          variants={item}
          className="mb-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="text-sm font-medium text-white/80">
              5.0 · Trusted by 500+ projects
            </span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <span className="text-sm font-medium uppercase tracking-wider text-white/60">
            15+ Years of Craft
          </span>
        </motion.div>

        <motion.div
          variants={item}
          className="flex w-full flex-col gap-4 sm:flex-row md:w-auto"
        >
          <Link href="/products">
            <div className="group flex w-full cursor-pointer items-center justify-center gap-2 bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_0_50px_-12px_hsl(48,100%,50%)] transition-all hover:shadow-[0_0_70px_-8px_hsl(48,100%,50%)] sm:w-auto">
              Explore Products
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
          <Link href="/contact">
            <div className="flex w-full cursor-pointer items-center justify-center border border-white/30 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/10 sm:w-auto">
              Get a Free Quote
            </div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-2 md:right-10">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Show ${s.label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-7 bg-primary" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-scroll-cue text-primary" />
      </div>
    </section>
  );
}
