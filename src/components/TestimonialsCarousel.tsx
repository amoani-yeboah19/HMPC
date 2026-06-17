import { motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "HMPC transformed our commercial lobby into a breathtaking space. Their precision with large-format marble is unmatched in the industry.",
    author: "Elena Rodriguez",
    title: "Principal Architect, Nexus Design Group",
    rating: 5,
  },
  {
    quote:
      "When specifying materials for luxury residential projects, HMPC is our only choice. The quality of their stone and installation is flawless.",
    author: "Marcus Chen",
    title: "Director, Chen Interiors",
    rating: 5,
  },
  {
    quote:
      "A true partner in construction. They delivered a complex geometric tile installation across a 50,000 sq ft office perfectly on schedule.",
    author: "Sarah Jenkins",
    title: "VP of Construction, Altura Development",
    rating: 5,
  },
  {
    quote:
      "From sourcing rare Italian marble to the final grout line, every detail was handled with care. Our clients are consistently stunned by the result.",
    author: "David Okoye",
    title: "Founder, Studio Okoye Architects",
    rating: 5,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <div className="relative mx-auto max-w-4xl px-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {testimonials.map((t, index) => (
            <div key={index} className="min-w-0 flex-[0_0_100%]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mx-2 flex flex-col items-center rounded-2xl border border-border bg-card/40 p-8 text-center backdrop-blur-sm md:p-12"
              >
                <Quote size={44} className="mb-6 text-primary opacity-25" />

                <div className="mb-6 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                <p className="mb-10 text-xl font-light italic leading-relaxed text-white/90 md:text-2xl">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-sm font-bold uppercase tracking-wider text-primary ring-1 ring-primary/30">
                    {initials(t.author)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold uppercase tracking-wider">{t.author}</h4>
                    <p className="text-sm text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={scrollNext}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <ChevronRight size={20} />
      </button>

      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
