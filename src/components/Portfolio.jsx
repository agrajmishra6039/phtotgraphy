import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { categories, portfolio } from "../data/portfolioData";
import Lightbox from "./Lightbox";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? portfolio
        : portfolio.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <section id="portfolio" className="scroll-mt-24 bg-void px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.4em] text-gold uppercase">Selected work</p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-6xl">
              Portfolio
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-1.5 text-[11px] tracking-[0.18em] uppercase transition ${
                  filter === cat
                    ? "bg-gold text-ink"
                    : "border border-line text-muted hover:text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.button
              key={item.id}
              type="button"
              layout
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden bg-panel text-left ${
                i % 5 === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 min-h-[420px]" : "min-h-[280px]"
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent opacity-80 transition group-hover:opacity-95" />
              {item.type === "video" && (
                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-gold">
                  <Play size={16} fill="currentColor" />
                </span>
              )}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] tracking-[0.28em] text-gold uppercase">
                  {item.category}
                </p>
                <p className="font-display text-2xl text-cream">{item.title}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        items={items}
        index={active}
        onClose={() => setActive(null)}
        onPrev={() =>
          setActive((i) => (i == null ? i : (i + items.length - 1) % items.length))
        }
        onNext={() => setActive((i) => (i == null ? i : (i + 1) % items.length))}
      />
    </section>
  );
}
