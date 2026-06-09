import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface TileCardProps {
  title: string;
  category: string;
  image: string;
  id: string | number;
}

export function TileCard({ title, category, image, id }: TileCardProps) {
  return (
    <Link href={`/products`}>
      <motion.div 
        className="group relative cursor-pointer overflow-hidden bg-card border border-border"
        whileHover="hover"
      >
        <div className="aspect-square overflow-hidden relative">
          <motion.img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
        
        <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-primary text-xs font-bold uppercase tracking-wider mb-2">{category}</p>
          <div className="flex justify-between items-end">
            <h3 className="text-xl font-display text-white">{title}</h3>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={16} className="text-primary" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
