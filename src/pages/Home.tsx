import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { TileCard } from "@/components/TileCard";
import { MobileAppSection } from "@/components/MobileAppSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { Shield, PenTool, TrendingUp, Gem, Ruler, Layers, Hammer, Sparkles } from "lucide-react";
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

const trustedBy = [
  "RITZ-CARLTON",
  "NEXUS DESIGN",
  "ALTURA DEV",
  "CHEN INTERIORS",
  "APEX TOWER",
  "STUDIO OKOYE",
];

const differentiators = [
  { icon: Gem, title: "Premium Materials", desc: "Directly sourced from the world's finest quarries and manufacturers." },
  { icon: PenTool, title: "Master Craftsmanship", desc: "Installation by certified artisans with decades of specialized experience." },
  { icon: Shield, title: "Enduring Quality", desc: "Warrantied installations designed to withstand time and intense use." },
  { icon: TrendingUp, title: "Project Management", desc: "Dedicated oversight ensuring on-time and on-budget delivery." },
];

const process = [
  { icon: Ruler, step: "01", title: "Consultation & Survey", desc: "We assess your space, understand your vision, and take precise measurements on-site." },
  { icon: Layers, step: "02", title: "Material & Design", desc: "Curate the perfect tiles, patterns, and finishes with our design consultants." },
  { icon: Hammer, step: "03", title: "Expert Installation", desc: "Our certified artisans execute with millimetre precision and a clean worksite." },
  { icon: Sparkles, step: "04", title: "Finishing & Handover", desc: "Detailing, sealing, and a final walkthrough — delivered on time, guaranteed." },
];

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Trusted-by logo marquee */}
      <section className="border-y border-border bg-card/40 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by leading architects & developers
          </p>
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee gap-16">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap font-display text-2xl tracking-wider text-white/35 transition-colors hover:text-primary"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="border-b border-border bg-background py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-14 max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Why HMPC</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl">The Difference Is In The Detail</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden border border-border bg-card/40 p-8 transition-colors duration-300 hover:border-primary/50"
              >
                <div className="absolute -right-6 -top-6 font-display text-8xl text-white/[0.03] transition-colors group-hover:text-primary/10">
                  0{i + 1}
                </div>
                <item.icon size={32} className="mb-6 text-primary" />
                <h3 className="mb-3 font-display text-xl">{item.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="bg-background py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-sm font-medium uppercase tracking-widest text-primary">Curated Selection</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl">Featured Collections</h2>
            </div>
            <Link href="/products">
              <div className="cursor-pointer border-b border-muted pb-1 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                View All Products
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Our Process */}
      <section className="relative overflow-hidden border-y border-border bg-black py-28">
        <div className="bg-tile-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-primary">How We Work</span>
              <div className="h-[2px] w-8 bg-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">A Seamless Process, Start To Finish</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                {/* connector line */}
                {i < process.length - 1 && (
                  <div className="absolute left-[3.25rem] top-6 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-primary/40 to-transparent lg:block" />
                )}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                  <p.icon size={24} />
                </div>
                <div className="mb-2 font-display text-sm tracking-widest text-primary">{p.step}</div>
                <h3 className="mb-3 font-display text-2xl">{p.title}</h3>
                <p className="text-sm font-light text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-border bg-card py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {[
              { end: 500, suffix: "+", label: "Projects" },
              { end: 15, suffix: "+", label: "Years" },
              { end: 2000, suffix: "+", label: "Tiles" },
              { end: 98, suffix: "%", label: "Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="mb-2 font-display text-5xl text-white md:text-6xl">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-primary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MobileAppSection />

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-background py-28">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[140px]" />
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-sm font-medium uppercase tracking-widest text-primary">Client Voices</span>
              <div className="h-[2px] w-8 bg-primary" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl">Loved By Architects & Homeowners</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="border-t border-border bg-background py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <div className="mb-4 inline-flex items-center gap-2">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-sm font-medium uppercase tracking-widest text-primary">Portfolio</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl">Recent Projects</h2>
            </div>
            <Link href="/gallery">
              <div className="cursor-pointer border border-white bg-transparent px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black">
                View Gallery
              </div>
            </Link>
          </div>

          <GalleryGrid images={galleryPreview} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-background py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[130px]" />
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
            Ready to <span className="text-gold-gradient">elevate</span> your space?
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg font-medium text-white/60">
            Connect with our team of consultants to discuss your project requirements, material
            sourcing, and installation logistics.
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
