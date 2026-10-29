import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import About from "./components/About";
import InstagramFeed from "./components/InstagramFeed";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedService, setSelectedService] = useState("");

  function onInquire(name) {
    setSelectedService(name);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="film-grain" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services onInquire={onInquire} />
        <About />
        <InstagramFeed />
        <Contact
          selectedService={selectedService}
          setSelectedService={setSelectedService}
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
