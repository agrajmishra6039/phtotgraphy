import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "../data/portfolioData";

export default function Services({ onInquire }) {
  return (
    <section id="services" className="scroll-mt-24 bg-ink px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] tracking-[0.4em] text-gold uppercase">Offerings</p>
        <h2 className="mt-3 font-display text-4xl text-cream md:text-6xl">
          Services & investment
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted">
          Pricing is a starting point. Every brief is quoted after a conversation —
          so the work is sized to the story, not a template.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col border border-line bg-panel p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-3xl text-cream">{service.name}</h3>
                <span className="text-[11px] tracking-[0.18em] text-gold uppercase">
                  {service.price}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{service.summary}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-cream/85">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => onInquire(service.name)}
                className="gold-btn mt-8 self-start rounded-full px-6 py-2.5 text-[11px] tracking-[0.2em] uppercase"
              >
                Inquire now
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
