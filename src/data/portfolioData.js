/**
 * FRAME & FILM — client content file
 * Edit this file to update photos, videos, services, contact details, and SEO.
 * Image URLs can be Unsplash/CDN links or local files placed in /public/images.
 */

export const site = {
  name: "Frame & Film",
  studio: "Atelier Visuals",
  location: "Los Angeles & Destination",
  email: "bookings@frameandfilm.studio",
  phoneDisplay: "+1 (323) 555-0148",
  /** International format, no + or spaces — used for wa.me links */
  whatsapp: "13235550148",
  /** Formspree form ID. Create one at https://formspree.io and paste it here. */
  formspreeId: "YOUR_FORMSPREE_ID",
  /** Google Analytics 4 measurement ID (G-XXXXXXXXXX). Leave as-is until you have one. */
  gaId: "G-XXXXXXXXXX",
  social: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    vimeo: "https://vimeo.com/",
  },
};

export const seo = {
  title: "Frame & Film — Cinematic Photography & Videography",
  description:
    "Luxury photography and cinematic videography for weddings, portraits, commercial campaigns, and live events. Destination-ready. Book a session with Frame & Film.",
  url: "https://frameandfilm.studio",
  ogImage:
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
  keywords:
    "wedding photographer, cinematic videography, commercial photography, portrait studio, event film, luxury photography",
};

export const hero = {
  headline: "Stories, framed in light.",
  subheadline:
    "Cinematic photography and film for people who want their moments to feel like cinema — not content.",
  video:
    "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
  poster:
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80",
  primaryCta: "Book a Session",
  secondaryCta: "Explore Portfolio",
};

export const about = {
  name: "Elena Voss",
  role: "Director of Photography",
  portrait:
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
  bio: `I built Frame & Film on a simple belief: the camera should disappear. What remains is tension, tenderness, and the kind of light you remember years later. I shoot stills and motion as one language — so a wedding film, a campaign, and a portrait session all feel like they belong to the same world.`,
  philosophy:
    "Restraint over noise. Emotion over spectacle. Every frame should earn its place.",
  stats: [
    { value: "12+", label: "Years" },
    { value: "480+", label: "Stories told" },
    { value: "28", label: "Countries" },
  ],
  gear: [
    { item: "Bodies", detail: "Sony A1 II · Canon C70 · ARRI Alexa Mini LF (rental)" },
    { item: "Glass", detail: "G-Master 24–70 / 50 / 85 · Cooke S4/i primes" },
    { item: "Light", detail: "Aputure 600c · Nanlite Forza · natural window, always first" },
    { item: "Motion", detail: "DJI RS 4 Pro · Ronin 4D · 6K RAW + 4K 120" },
  ],
};

export const categories = [
  "All",
  "Weddings",
  "Portraits",
  "Commercial",
  "Events",
  "Videography",
];

/**
 * type: "photo" | "video"
 * For videos, set youtubeId (preferred in lightbox) and a poster image.
 * src is the gallery thumbnail / still.
 */
export const portfolio = [
  {
    id: "w-01",
    title: "Amalfi Vows",
    category: "Weddings",
    type: "photo",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80",
    caption: "Cliffside ceremony, golden hour processional.",
  },
  {
    id: "w-02",
    title: "Silk & Cypress",
    category: "Weddings",
    type: "photo",
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1600&q=80",
    caption: "Editorial portraits between the ceremony and dinner.",
  },
  {
    id: "p-01",
    title: "Studio Noir",
    category: "Portraits",
    type: "photo",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80",
    caption: "Single-source portrait. Quiet, unhurried.",
  },
  {
    id: "p-02",
    title: "Desert Light",
    category: "Portraits",
    type: "photo",
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
    caption: "Location portraiture with hard sun and open shade.",
  },
  {
    id: "c-01",
    title: "Maison Campaign",
    category: "Commercial",
    type: "photo",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    caption: "Retail campaign stills — texture, space, product in context.",
  },
  {
    id: "c-02",
    title: "After Hours",
    category: "Commercial",
    type: "photo",
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    caption: "Lookbook sequence for a nightwear house.",
  },
  {
    id: "e-01",
    title: "Gala, Midnight",
    category: "Events",
    type: "photo",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80",
    caption: "Documentary coverage of a black-tie fundraiser.",
  },
  {
    id: "e-02",
    title: "Table, Lit",
    category: "Events",
    type: "photo",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80",
    caption: "Atmosphere over posed groups — always.",
  },
  {
    id: "v-01",
    title: "Coastal Film",
    category: "Videography",
    type: "video",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
    youtubeId: "Scxs7L0vhZ4",
    caption: "A short coastal film study. Replace youtubeId with your own work.",
  },
  {
    id: "v-02",
    title: "Rehearsal Cut",
    category: "Videography",
    type: "video",
    src: "https://images.unsplash.com/photo-1478146893577-c009d9d8290d?auto=format&fit=crop&w=1600&q=80",
    youtubeId: "aqz-KE-bpKQ",
    caption: "Wedding film teaser — swap for your Vimeo/YouTube reel.",
  },
  {
    id: "w-03",
    title: "Hands, Rings",
    category: "Weddings",
    type: "photo",
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80",
    caption: "Detail work: metal, fabric, skin.",
  },
  {
    id: "p-03",
    title: "In Repose",
    category: "Portraits",
    type: "photo",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80",
    caption: "Editorial headshot, north light.",
  },
];

export const services = [
  {
    id: "photography",
    name: "Photography",
    price: "From $3,800",
    summary: "Full-day coverage or a crafted studio sitting — delivered as a refined gallery, not a dump of files.",
    features: [
      "Pre-production mood board & shot list",
      "Color-graded selects (not every frame)",
      "Private online gallery + print-ready files",
      "Optional album design & fine-art prints",
    ],
  },
  {
    id: "videography",
    name: "Videography",
    price: "From $6,500",
    summary: "Cinematic films with a documentary spine — ceremony, campaign, or brand story.",
    features: [
      "Director + 1st AC on larger days",
      "Highlight film + ceremony/long-form cut",
      "Licensed music or original score consult",
      "4K master + social cuts",
    ],
  },
  {
    id: "commercial",
    name: "Commercial Shoots",
    price: "Day rate on request",
    summary: "Campaign stills and motion for fashion, hospitality, and product houses that care about craft.",
    features: [
      "Usage-licensed imagery",
      "On-set digital tech available",
      "Art direction collaboration",
      "Rush turnaround options",
    ],
  },
  {
    id: "events",
    name: "Events",
    price: "From $2,400",
    summary: "Discreet coverage of galas, launches, and private gatherings — atmosphere first.",
    features: [
      "Two-photographer option for scale",
      "Same-night teaser set",
      "Press-ready selects",
      "NDA-friendly workflow",
    ],
  },
];

export const instagram = [
  {
    id: "ig-1",
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    alt: "Wedding veil in wind",
  },
  {
    id: "ig-2",
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=80",
    alt: "Fashion editorial",
  },
  {
    id: "ig-3",
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    alt: "Couple at dusk",
  },
  {
    id: "ig-4",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    alt: "Concert lights",
  },
  {
    id: "ig-5",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    alt: "Portrait close-up",
  },
  {
    id: "ig-6",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    alt: "Landscape still",
  },
];

export const navLinks = [
  { href: "#portfolio", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];
