import { motion } from "framer-motion";
import { ServiceCard } from "@/components/ServiceCard";
import { ShoppingBag, Hammer, Lightbulb, Wrench, Truck, Building2 } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Tile Sales & Sourcing",
    description: "Access our exclusive catalog of premium materials sourced globally. We negotiate directly with quarries to provide unparalleled quality and unique runs.",
    Icon: ShoppingBag,
  },
  {
    title: "Master Installation",
    description: "Our certified installation teams execute complex layouts with surgical precision. Fully warrantied work that stands the test of time.",
    Icon: Hammer,
  },
  {
    title: "Interior Consultation",
    description: "Collaborate with our in-house design experts to select the perfect materials, finishes, and patterns to achieve your architectural vision.",
    Icon: Lightbulb,
  },
  {
    title: "Tiling Accessories",
    description: "We provide high-grade grouts, sealants, and trims specifically formulated to complement and protect luxury tile installations.",
    Icon: Wrench,
  },
  {
    title: "White-Glove Delivery",
    description: "Secure, tracked, and scheduled delivery to your job site. We handle the logistics so your materials arrive pristine and on time.",
    Icon: Truck,
  },
  {
    title: "Commercial Projects",
    description: "End-to-end management for large-scale enterprise developments. Scalable solutions without compromising on premium quality.",
    Icon: Building2,
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 justify-center">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Capabilities</span>
              <div className="h-[2px] w-8 bg-primary" />
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground font-light">
              A comprehensive suite of solutions tailored for architects, designers, and commercial developers who refuse to compromise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                {...service} 
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-display text-black mb-8">Need a custom solution?</h2>
          <Link href="/contact">
            <div className="inline-flex bg-black text-white px-10 py-5 uppercase tracking-widest text-sm font-bold hover:bg-gray-900 transition-colors cursor-pointer">
              Get in Touch
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
