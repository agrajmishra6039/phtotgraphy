import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { hero, site } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="top" className="relative h-svh min-h-[640px] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={hero.poster}
      >
        <source src={hero.video} type="video/mp4" />
      </video>
      <img
        src={hero.poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(7,7,10,0.55)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-[11px] tracking-[0.5em] text-gold uppercase"
        >
          {site.location}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-5xl leading-[0.95] text-cream sm:text-7xl md:text-8xl"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-cream/75 sm:text-base"
        >
          {hero.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="gold-btn rounded-full px-8 py-3 text-[12px] font-medium tracking-[0.22em] uppercase"
          >
            {hero.primaryCta}
          </a>
          <a
            href="#portfolio"
            className="ghost-btn rounded-full px-8 py-3 text-[12px] tracking-[0.22em] uppercase"
          >
            {hero.secondaryCta}
          </a>
        </motion.div>
      </div>

      <a
        href="#portfolio"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold/80"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
