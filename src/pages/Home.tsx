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
  { id: 1, title: "Nero Marquina", category: "Marble Floor", image: "/images/collection-1.png" },
  { id: 2, title: "Hexagon Noir", category: "Geometric Wall", image: "/images/collection-2.png" },
  { id: 3, title: "Slate Aggregate", category: "Outdoor Stone", image: "/images/collection-3.png" },
  { id: 4, title: "Brass Inlay", category: "Decorative Mosaic", image: "/images/collection-4.png" },
];

const galleryPreview = [
  { src: "/images/gallery-1.png", title: "Ritz Carlton Spa", category: "Hospitality" },
  { src: "/images/gallery-2.png", title: "Madison Ave Lobby", category: "Commercial" },
  { src: "/images/gallery-3.png", title: "Tribeca Penthouse", category: "Residential" },
  { src: "/images/gallery-4.png", title: "Apex Tower Offices", category: "Commercial" },
  { src: "/images/gallery-5.png", title: "Seaside Villa", category: "Residential" },
  { src: "/images/collection-1.png", title: "Private Residence", category: "Residential" },
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
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0yMCAwaDIwdjQwSDIweiIgZmlsbD0iIzAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPg==')]"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display text-black mb-6">Ready to elevate your space?</h2>
          <p className="text-black/80 font-medium max-w-2xl mx-auto mb-10 text-lg">
            Connect with our team of consultants to discuss your project requirements, material sourcing, and installation logistics.
          </p>
          <Link href="/contact">
            <div className="inline-flex bg-black text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-gray-900 transition-colors cursor-pointer">
              Schedule Consultation
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
