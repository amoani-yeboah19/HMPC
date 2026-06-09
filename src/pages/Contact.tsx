import { motion } from "framer-motion";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you supply materials only, or do you also install?",
    a: "We offer both. We can supply premium materials directly to your contractor, or provide end-to-end service including professional installation by our certified artisans.",
  },
  {
    q: "What is the typical lead time for custom material sourcing?",
    a: "Standard catalog items are available immediately. For bespoke sourcing directly from European or South American quarries, lead times typically range from 6 to 12 weeks depending on material rarity.",
  },
  {
    q: "Do you offer warranties on your installations?",
    a: "Yes. All HMPC installations come with a comprehensive 5-year warranty covering workmanship, with extended warranties available for commercial projects.",
  },
  {
    q: "Can you assist with design and layout planning?",
    a: "Absolutely. Our in-house consultation team works closely with your architects and interior designers to optimize layout patterns, minimize waste, and ensure structural integrity.",
  },
  {
    q: "Do you work outside of the local area?",
    a: "Yes. For large-scale commercial projects and luxury estates, our installation teams and logistics network operate nationwide.",
  },
  {
    q: "How do I request a sample?",
    a: "Contact us using the form on this page with your project details. We provide curated sample boxes to qualified architects, designers, and enterprise clients.",
  },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-20">
      <section className="py-20 border-b border-border bg-card">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-primary font-medium tracking-widest uppercase text-sm">Reach Out</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground font-light">
              Connect with our atelier. Whether you are in the initial planning stages or ready to source materials, our team is here to assist.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display mb-8">Send an Inquiry</h2>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-12"
            >
              <div>
                <h2 className="text-3xl font-display mb-8">Business Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <MapPin className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Headquarters</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        124 Industrial Way<br />
                        Design District<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Phone</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        +1 (555) 123-4567<br />
                        <span className="opacity-50">Mon-Fri, 9am - 6pm</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Email</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        contact@hmpc.com<br />
                        sales@hmpc.com
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Clock className="text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-white mb-2 uppercase tracking-wider text-sm">Showroom</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        By appointment only.<br />
                        Please call to schedule.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-card border border-border flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                <div className="text-center z-10">
                  <MapPin size={32} className="text-primary mx-auto mb-3" />
                  <p className="text-sm font-bold uppercase tracking-widest">HMPC Location</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
