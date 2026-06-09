import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "HMPC transformed our commercial lobby into a breathtaking space. Their precision with large-format marble is unmatched in the industry.",
    author: "Elena Rodriguez",
    title: "Principal Architect, Nexus Design Group",
  },
  {
    quote: "When specifying materials for luxury residential projects, HMPC is our only choice. The quality of their stone and installation is flawless.",
    author: "Marcus Chen",
    title: "Director, Chen Interiors",
  },
  {
    quote: "A true partner in construction. They delivered a complex geometric tile installation across a 50,000 sq ft office perfectly on schedule.",
    author: "Sarah Jenkins",
    title: "VP of Construction, Altura Dev",
  },
];

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useState(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  });

  return (
    <div className="relative max-w-4xl mx-auto px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8"
              >
                <Quote size={48} className="text-primary mb-8 opacity-20" />
                <p className="text-xl md:text-3xl font-light leading-relaxed mb-10 italic text-white/90">
                  "{testimonial.quote}"
                </p>
                <div className="w-12 h-[2px] bg-primary mb-6" />
                <h4 className="text-lg font-bold tracking-wider uppercase mb-1">{testimonial.author}</h4>
                <p className="text-muted-foreground text-sm">{testimonial.title}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors bg-background"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors bg-background"
      >
        <ChevronRight size={20} />
      </button>

      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === selectedIndex ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
