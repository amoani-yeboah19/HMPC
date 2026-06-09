import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-8">Architectural Rigor.<br />Material Obsession.</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Founded in 2008, HMPC emerged from a simple observation: the luxury construction market lacked a tiling partner that understood both the aesthetic demands of world-class design and the technical realities of massive commercial projects. We bridge that gap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision / Image */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-card overflow-hidden"
            >
              <img 
                src="/images/gallery-4.webp" 
                alt="HMPC Team at work" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-display mb-6">The HMPC Standard</h2>
              <div className="space-y-6 text-muted-foreground font-light">
                <p>
                  We don't just supply tiles; we engineer surfaces. Our team consists of master craftsmen, material scientists, and project managers who treat every installation as a permanent architectural statement.
                </p>
                <p>
                  From sourcing rare Calacatta marble in Italy to developing proprietary installation methods for high-traffic commercial spaces, our approach is defined by an uncompromising commitment to quality.
                </p>
                <p>
                  When you work with HMPC, you're not just hiring a contractor. You're partnering with an atelier that takes absolute ownership of the outcome.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-border">
                <div>
                  <div className="text-4xl font-display text-white mb-2">01</div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-xs mb-2">Sourcing</h4>
                  <p className="text-sm text-muted-foreground">Direct relationships with top global quarries.</p>
                </div>
                <div>
                  <div className="text-4xl font-display text-white mb-2">02</div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-xs mb-2">Engineering</h4>
                  <p className="text-sm text-muted-foreground">Technical planning for flawless execution.</p>
                </div>
                <div>
                  <div className="text-4xl font-display text-white mb-2">03</div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-xs mb-2">Installation</h4>
                  <p className="text-sm text-muted-foreground">Precision craftsmanship by certified artisans.</p>
                </div>
                <div>
                  <div className="text-4xl font-display text-white mb-2">04</div>
                  <h4 className="text-primary font-bold uppercase tracking-wider text-xs mb-2">Support</h4>
                  <p className="text-sm text-muted-foreground">Long-term maintenance and warranty programs.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display mb-8">Discuss Your Next Project</h2>
          <Link href="/contact">
            <div className="inline-flex items-center text-primary font-bold uppercase tracking-widest text-sm hover:text-white transition-colors cursor-pointer">
              Contact Our Team <ArrowRight size={18} className="ml-2" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
