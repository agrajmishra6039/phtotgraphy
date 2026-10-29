import { motion } from "framer-motion";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-void px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src={about.portrait}
            alt={about.name}
            loading="lazy"
            decoding="async"
            className="h-[70vh] min-h-[420px] w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 flex justify-between border border-line bg-ink/70 px-5 py-4 backdrop-blur">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gold">{stat.value}</p>
                <p className="text-[10px] tracking-[0.22em] text-cream/70 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[11px] tracking-[0.4em] text-gold uppercase">The studio</p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-6xl">
            {about.name}
          </h2>
          <p className="mt-1 text-sm tracking-[0.2em] text-muted uppercase">{about.role}</p>
          <p className="mt-6 text-base leading-relaxed text-cream/80">{about.bio}</p>
          <blockquote className="mt-8 border-l border-gold pl-5 font-display text-2xl italic text-gold-bright">
            {about.philosophy}
          </blockquote>
          <div className="mt-10 space-y-4">
            <p className="text-[11px] tracking-[0.3em] text-gold uppercase">Kit</p>
            {about.gear.map((row) => (
              <div
                key={row.item}
                className="flex flex-col border-b border-line pb-3 sm:flex-row sm:justify-between"
              >
                <span className="text-sm text-cream">{row.item}</span>
                <span className="text-sm text-muted">{row.detail}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
