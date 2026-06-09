import { motion } from "framer-motion";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 inline-flex items-center gap-2"
        >
          <div className="h-[2px] w-8 bg-primary" />
          <span className="text-primary font-medium tracking-widest uppercase text-sm">HMPC Tiling Atelier</span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.9] mb-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Precision Tiling.<br />Enduring Luxury.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Elevating architectural spaces through uncompromising craftsmanship and premium materials. Built for those who demand excellence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="/products">
            <div className="bg-primary text-black font-semibold py-4 px-8 flex items-center justify-center hover:bg-white transition-colors cursor-pointer w-full sm:w-auto uppercase tracking-wide text-sm">
              Explore Products
            </div>
          </Link>
          <Link href="/contact">
            <div className="bg-transparent border border-white text-white font-semibold py-4 px-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer w-full sm:w-auto uppercase tracking-wide text-sm">
              Contact Us
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
