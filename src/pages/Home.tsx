import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { TileCard } from "@/components/TileCard";
import { ServiceCard } from "@/components/ServiceCard";
import { MobileAppSection } from "@/components/MobileAppSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Shield, PenTool, TrendingUp, Gem, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const collections = [
  { id: 1, title: "Nero Marquina", category: "Marble Floor", image: "/images/collection-1.webp" },
  { id: 2, title: "Hexagon Noir", category: "Geometric Wall", image: "/images/collection-2.webp" },
  { id: 3, title: "Slate Aggregate", category: "Outdoor Stone", image: "/images/collection-3.webp" },
  { id: 4, title: "Brass Inlay", category: "Decorative Mosaic", image: "/images/collection-4.webp" },
];

const galleryPreview = [
  { src: "/images/gallery-1.webp", title: "Ritz Carlton Spa", category: "Hospitality" },
  { src: "/images/gallery-2.webp", title: "Madison Ave Lobby", category: "Commercial" },
  { src: "/images/gallery-3.webp", title: "Tribeca Penthouse", category: "Residential" },
  { src: "/images/gallery-4.webp", title: "Apex Tower Offices", category: "Commercial" },
  { src: "/images/gallery-5.webp", title: "Seaside Villa", category: "Residential" },
  { src: "/images/collection-1.webp", title: "Private Residence", category: "Residential" },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Differentiators */}
      <section className="py-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Gem, title: "Premium Materials", desc: "Directly sourced from the world's finest quarries and manufacturers." },
              { icon: PenTool, title: "Master Craftsmanship", desc: "Installation by certified artisans with decades of specialized experience." },
              { icon: Shield, title: "Enduring Quality", desc: "Warrantied installations designed to withstand time and intense use." },
              { icon: TrendingUp, title: "Project Management", desc: "Dedicated oversight ensuring on-time and on-budget delivery." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <item.icon size={32} className="text-primary mb-6" />
                <h3 className="text-xl font-display mb-3">{item.title}</h3>
                <p className="text-muted-foreground font-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-primary font-medium tracking-widest uppercase text-sm">Curated Selection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display">Featured Collections</h2>
            </div>
            <Link href="/products">
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors cursor-pointer border-b border-muted hover:border-primary pb-1">
                View All Products
              </div>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TileCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-display text-white mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-display text-white mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Years</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-display text-white mb-2">
                <AnimatedCounter end={2000} suffix="+" />
              </div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Tiles</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-display text-white mb-2">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <p className="text-primary text-sm font-bold uppercase tracking-widest">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <MobileAppSection />

      {/* Gallery Preview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-primary font-medium tracking-widest uppercase text-sm">Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display">Recent Projects</h2>
            </div>
            <Link href="/gallery">
              <div className="bg-transparent border border-white text-white px-8 py-3 uppercase tracking-wider text-sm font-bold hover:bg-white hover:text-black transition-colors cursor-pointer">
                View Gallery
              </div>
            </Link>
          </div>
          
          <GalleryGrid images={galleryPreview} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background py-32">
        {/* gold radial glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]" />
        {/* top hairline accent */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container relative z-10 mx-auto px-4 text-center md:px-8"
        >
          <div className="mb-6 inline-flex items-center gap-2">
            <div className="h-[2px] w-8 bg-primary" />
            <span className="text-sm font-medium uppercase tracking-widest text-primary">Start Your Project</span>
            <div className="h-[2px] w-8 bg-primary" />
          </div>

          <h2 className="mx-auto mb-6 max-w-3xl font-display text-4xl text-white md:text-6xl">
            Ready to{" "}
            <span className="bg-gradient-to-r from-amber-300 via-primary to-amber-400 bg-clip-text text-transparent">
              elevate
            </span>{" "}
            your space?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-white/60">
            Connect with our team of consultants to discuss your project requirements, material sourcing, and installation logistics.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <div className="inline-flex cursor-pointer bg-primary px-10 py-5 text-sm font-bold uppercase tracking-widest text-black shadow-[0_0_50px_-12px_hsl(48,100%,50%)] transition-all hover:bg-primary/90 hover:shadow-[0_0_70px_-8px_hsl(48,100%,50%)]">
                Schedule Consultation
              </div>
            </Link>
            <Link href="/products">
              <div className="inline-flex cursor-pointer border border-white/20 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:border-white/40 hover:bg-white/5">
                Explore Products
              </div>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
