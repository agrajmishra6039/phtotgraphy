import { instagram, site } from "../data/portfolioData";

export default function InstagramFeed() {
  return (
    <section id="journal" className="scroll-mt-24 bg-ink px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-[11px] tracking-[0.4em] text-gold uppercase">On film</p>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">
              Instagram
            </h2>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] tracking-[0.22em] text-gold uppercase hover:text-gold-bright"
          >
            Follow →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
          {instagram.map((post) => (
            <a
              key={post.id}
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={post.src}
                alt={post.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/35" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
