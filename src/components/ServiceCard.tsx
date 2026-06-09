import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, Icon, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border p-8 group hover:border-primary/50 transition-colors"
    >
      <div className="w-14 h-14 rounded-none bg-muted flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
        <Icon size={28} className="text-foreground group-hover:text-black transition-colors" />
      </div>
      <h3 className="text-2xl font-display text-white mb-4">{title}</h3>
      <p className="text-muted-foreground mb-8 leading-relaxed font-light text-sm">
        {description}
      </p>
      <Link href="/services">
        <div className="inline-flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors cursor-pointer uppercase tracking-wider">
          Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
