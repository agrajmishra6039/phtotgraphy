import { useState } from "react";
import { services, site } from "../data/portfolioData";

export default function Contact({ selectedService, setSelectedService }) {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!site.formspreeId || site.formspreeId === "YOUR_FORMSPREE_ID") {
      const body = encodeURIComponent(
        `Service: ${data.get("service")}\nDate: ${data.get("date")}\n\n${data.get("message")}`
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Inquiry — " + data.get("name"))}&body=${body}`;
      setStatus("Opening your email client. Add a Formspree ID in portfolioData.js for in-browser sending.");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        form.reset();
        setStatus("Received. We’ll reply within two business days.");
      } else {
        setStatus("Something went wrong. Please WhatsApp or email us directly.");
      }
    } catch {
      setStatus("Network error. Please try WhatsApp instead.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-void px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
        <div>
          <p className="text-[11px] tracking-[0.4em] text-gold uppercase">Bookings</p>
          <h2 className="mt-3 font-display text-4xl text-cream md:text-6xl">
            Let’s make something quiet and unforgettable.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Share a date, a place, and a feeling. We’ll come back with availability
            and a tailored proposal — no automated quotes.
          </p>
          <div className="mt-10 space-y-2 text-sm">
            <p className="text-cream">{site.email}</p>
            <p className="text-cream">{site.phoneDisplay}</p>
            <p className="text-muted">{site.location}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="name"
            placeholder="Name"
            className="w-full border border-line bg-panel px-4 py-3 text-sm text-cream outline-none placeholder:text-muted focus:border-gold"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-line bg-panel px-4 py-3 text-sm text-cream outline-none placeholder:text-muted focus:border-gold"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <select
              name="service"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full border border-line bg-panel px-4 py-3 text-sm text-cream outline-none focus:border-gold"
            >
              <option value="">Service</option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              className="w-full border border-line bg-panel px-4 py-3 text-sm text-cream outline-none focus:border-gold"
            />
          </div>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell us about the day — people, place, tone."
            className="w-full resize-none border border-line bg-panel px-4 py-3 text-sm text-cream outline-none placeholder:text-muted focus:border-gold"
          />
          <button
            type="submit"
            className="gold-btn w-full rounded-full py-3 text-[12px] tracking-[0.24em] uppercase"
          >
            Send inquiry
          </button>
          {status && <p className="text-sm text-gold">{status}</p>}
        </form>
      </div>
    </section>
  );
}
