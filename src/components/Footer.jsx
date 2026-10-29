import { site } from "../data/portfolioData";

function Icon({ path, size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <path d={path} />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl tracking-[0.2em] text-cream uppercase">
            {site.name}
          </p>
          <p className="mt-1 text-xs text-muted">
            © {new Date().getFullYear()} {site.studio}. All frames reserved.
          </p>
        </div>
        <div className="flex items-center gap-5 text-cream/80">
          <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-gold">
            <Icon path="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm6.5-.9h.01" />
          </a>
          <a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-gold">
            <Icon path="M22.5 6.5a3 3 0 0 0-2.1-2.1C18.7 4 12 4 12 4s-6.7 0-8.4.4A3 3 0 0 0 1.5 6.5 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2.1 2.1C5.3 20 12 20 12 20s6.7 0 8.4-.4a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.5ZM10 15.5v-7l6 3.5-6 3.5Z" />
          </a>
          <a href={site.social.vimeo} target="_blank" rel="noreferrer" aria-label="Vimeo" className="hover:text-gold">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M22.4 7.2c-.1 2.3-1.7 5.5-4.8 9.6-3.2 4.3-5.9 6.4-8.1 6.4-1.4 0-2.5-1.3-3.5-3.8L4.4 12c-.7-2.5-1.5-3.8-2.3-3.8-.2 0-.8.4-1.9 1.1L0 7.7C1.2 6.6 2.4 5.5 3.5 4.4 5.1 3 6.3 2.3 7.2 2.2c2.1-.2 3.4 1.2 3.9 4.2.5 3.2.9 5.2 1.1 6 .6 2.8 1.3 4.2 2.1 4.2.6 0 1.5-.9 2.7-2.8 1.2-1.9 1.8-3.3 1.9-4.3.2-1.6-.4-2.4-1.8-2.4-.6 0-1.3.1-2 .4 1.4-4.5 4-6.7 8-6.5 2.9.1 4.3 2 4.3 5.6Z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
