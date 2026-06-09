import { motion } from "framer-motion";
import { Link } from "wouter";

interface GalleryGridProps {
  images: { src: string; title: string; category: string }[];
  limit?: number;
}

export function GalleryGrid({ images, limit }: GalleryGridProps) {
  const displayImages = limit ? images.slice(0, limit) : images;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {displayImages.map((img, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
        >
          <img 
            src={img.src} 
            alt={img.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100">
            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {img.category}
            </span>
            <h3 className="text-white text-2xl font-display transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
              {img.title}
            </h3>
            <div className="mt-6 w-10 h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 delay-150 origin-left" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
