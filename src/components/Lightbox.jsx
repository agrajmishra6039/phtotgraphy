import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const item = index == null ? null : items[index];

  useEffect(() => {
    if (index == null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 text-cream/80 hover:text-gold"
            onClick={onClose}
          >
            <X size={28} />
          </button>
          <button
            type="button"
            aria-label="Previous"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-cream/70 hover:text-gold md:left-8"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            type="button"
            aria-label="Next"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-cream/70 hover:text-gold md:right-8"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
          >
            <ChevronRight size={36} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            className="max-h-[88vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {item.type === "video" && item.youtubeId ? (
              <div className="aspect-video w-full overflow-hidden bg-black">
                <iframe
                  title={item.title}
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={item.src}
                alt={item.title}
                className="mx-auto max-h-[78vh] w-auto max-w-full object-contain"
              />
            )}
            <div className="mt-4 text-center">
              <p className="font-display text-2xl text-cream">{item.title}</p>
              <p className="mt-1 text-sm text-muted">{item.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
