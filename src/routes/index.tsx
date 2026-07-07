import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Anchor, Ship, Wrench, Waves, Compass, Package, ArrowRight, Menu, X,
  Mail, Phone, MapPin, Clock, Facebook, Linkedin, Instagram, MessageCircle,
  ShieldCheck, Globe2, Users, Award, ChevronRight, Check,
} from "lucide-react";

import hero from "@/assets/hero-ship.jpg";
import aboutImg from "@/assets/about-office.jpg";
import sMgmt from "@/assets/service-ship-mgmt.jpg";
import sSurvey from "@/assets/service-survey.jpg";
import sDock from "@/assets/service-drydock.jpg";
import sCharter from "@/assets/service-charter.jpg";
import sConsult from "@/assets/service-consult.jpg";
import sSupply from "@/assets/service-supplies.jpg";
import gBridge from "@/assets/gallery-bridge.jpg";
import gPort from "@/assets/gallery-port.jpg";
import pHeading from "@/assets/product-heading.jpg";
import pDgps from "@/assets/product-dgps.jpg";
import pDisplay from "@/assets/product-display.jpg";
import pConsole from "@/assets/product-console.jpg";
import pEcho from "@/assets/product-echo.jpg";
import pFish from "@/assets/product-fish.jpg";

export const Route = createFileRoute("/")({ component: Home });

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const services = [
  { icon: Ship, title: "Ship Management and Operations", img: sMgmt,
    short: "Comprehensive vessel management including technical operations, maintenance, crew management, compliance, performance monitoring and operational efficiency.",
    full: "Our ship management team delivers end-to-end operational oversight for owners and operators. From technical management, planned maintenance and crew welfare to statutory compliance, performance analytics and voyage efficiency, we treat every vessel as our own — protecting your asset, your reputation and your bottom line." },
  { icon: Wrench, title: "Marine Survey & Engineering Services", img: sSurvey,
    short: "Marine inspections, engineering consultancy, structural surveys, machinery assessment, repairs and compliance verification.",
    full: "Independent marine surveys, condition assessments, damage and P&I inspections, structural evaluations and machinery diagnostics — carried out by class-experienced engineers. Detailed reports, actionable findings and support through repair supervision to closeout." },
  { icon: Anchor, title: "Dry Dock Management", img: sDock,
    short: "Planning, supervision and complete management of dry dock projects ensuring quality, efficiency and cost optimization.",
    full: "Full lifecycle dry docking — specification writing, yard selection, cost negotiation, on-site supervision, quality control and final delivery. We keep projects on schedule, on budget and in class." },
  { icon: Compass, title: "Voyage / Charter Operations & Post Fixtures", img: sCharter,
    short: "Charter execution, voyage monitoring, freight management, documentation, demurrage claims and operational coordination.",
    full: "Post-fixture voyage management, laytime and demurrage handling, freight collection, port coordination and documentation. A single point of accountability that turns fixtures into completed, profitable voyages." },
  { icon: Waves, title: "Marine Consultancies", img: sConsult,
    short: "Strategic maritime consulting including risk assessment, operational planning, feasibility studies and regulatory guidance.",
    full: "Strategic advisory for maritime businesses — market entry, fleet optimisation, risk assessments, feasibility studies, regulatory navigation and operational transformation. Practical, senior-level guidance rooted in industry reality." },
  { icon: Package, title: "Ship Supplies", img: sSupply,
    short: "Supply of provisions, deck equipment, engine spares, safety products and technical consumables through an efficient logistics network.",
    full: "A reliable ship supply arm covering provisions, bonded stores, deck and engine spares, cabin stores, safety and firefighting equipment. Fast quotations, competitive pricing and dependable UAE-wide delivery to your vessel." },
];

const products = [
  { name: "Alpha Heading + Indicator", img: pHeading, features: ["MFL Display & Type Approved", "Clear bright touch display", "Uniform design", "Simple operation", "Various display sizes", "Central dimming"] },
  { name: "JLR 7900 DGPS", img: pDgps, features: ["IMO Type Approved", "Built-in SBAS", "RAIM Function", "3 NMEA0183 Ports", "10.8–31.2 VDC"] },
  { name: "AlphaScreen 19\" Display", img: pDisplay, features: ["LED Backlight", "ECDIS Calibrated", "Wide Dimming", "Class Society Approved"] },
  { name: "AlphaBridge Console", img: pConsole, features: ["Ergonomic Design", "International Standards", "Space Saving", "Flexible Integration"] },
  { name: "JFE-380 Echo Sounder", img: pEcho, features: ["6.5\" TFT Display", "High Accuracy", "Wide Depth Range", "24 Hour Memory"] },
  { name: "FF-901 Chartplotter / Fishfinder", img: pFish, features: ["Airmar Support", "Ultra Bright Display", "Wi-Fi Connectivity", "Cloud Access"] },
];

const gallery = [sMgmt, sSurvey, sDock, gBridge, sCharter, sSupply, gPort, hero];

function Home() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ImageSlider />
      <Products />
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-dark/95 backdrop-blur-xl shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3 text-white">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft shadow-gold">
            <Anchor className="h-5 w-5 text-navy" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">AKVN</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Trading FZ-LLC</div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-gold">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:from-royal hover:to-navy hover:text-white">
            Get Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-navy-dark md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-gold">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy">
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-navy-dark">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={hero} alt="Container ship at sunset" width={1920} height={1080}
          className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-navy-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/40" />

      {/* floating ambient shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-royal/20 blur-3xl animate-float-slow" />
        <div className="absolute right-10 top-1/2 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 pt-32 pb-20 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" /> UAE Based Maritime Firm
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
            Maritime Solutions for{" "}
            <span className="text-gradient-gold">Global Shipping</span> Excellence
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            AKVN Trading FZ-LLC delivers professional maritime services including ship management,
            marine consultancy, engineering support, charter operations, ship supplies and navigation
            equipment across the UAE and international markets.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4">
            <a href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-4 text-sm font-semibold text-navy shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-2xl">
              Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-gold hover:bg-white/10">
              Contact Us
            </a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="glass-card rounded-3xl p-6 lg:p-8">
          <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-4">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-gold/20">
              <ShieldCheck className="h-5 w-5 text-gold" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold">Trusted Partner</div>
              <div className="font-display text-white">Why AKVN</div>
            </div>
          </div>
          <ul className="space-y-4">
            {["24/7 Marine Support", "Global Operations", "Expert Marine Team", "UAE Based"].map((t) => (
              <li key={t} className="flex items-center gap-3 text-white/90">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-gold text-navy">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* wave divider */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg viewBox="0 0 1440 100" className="h-16 w-full sm:h-24" preserveAspectRatio="none">
          <path fill="var(--background)" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div {...fadeUp} className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-gold" />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={aboutImg} alt="AKVN maritime office" width={1200} height={900}
              loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-gold to-gold-soft p-6 text-navy shadow-gold sm:block">
            <div className="font-display text-4xl font-bold">10+</div>
            <div className="text-xs font-semibold uppercase tracking-widest">Years Combined Experience</div>
          </div>
        </motion.div>

        <motion.div {...fadeUp}>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="h-px w-8 bg-gold" /> About Us
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            About AKVN Trading <span className="text-royal">FZ-LLC</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            AKVN Trading FZ-LLC is a dynamic maritime firm dedicated to providing comprehensive and
            integrated solutions for the shipping industry. Founded by experienced maritime
            professionals, we provide tailored services for ship owners, operators and marine
            businesses across the UAE and international markets.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Based in Dubai, United Arab Emirates, we deliver excellence through operational expertise,
            integrity and a client-first approach. Our goal is to become a trusted long-term maritime
            partner by delivering sustainable and innovative solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { icon: Award, label: "Industry Experience" },
              { icon: ShieldCheck, label: "Operational Excellence" },
              { icon: Globe2, label: "Global Standards" },
              { icon: Users, label: "Trusted Marine Partner" },
            ].map(({ icon: Icon, label }) => (
              <div key={label}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-navy transition-colors group-hover:bg-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="services" className="relative bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="h-px w-8 bg-gold" /> What We Do <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Maritime <span className="text-royal">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six integrated service lines covering the full lifecycle of vessel ownership and operation.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} width={1024} height={640} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/20 to-transparent" />
                <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft text-navy shadow-gold">
                  <s.icon className="h-6 w-6" strokeWidth={2.2} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold leading-tight">{s.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {s.short}
                </p>
                <button onClick={() => setActive(i)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-gold">
                  Read More <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-royal transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-navy-dark/80 p-4 backdrop-blur-md"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-elegant"
            >
              <div className="relative aspect-[16/8] overflow-hidden">
                <img src={services[active].img} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                <button onClick={() => setActive(null)}
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy transition-colors hover:bg-gold">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{services[active].title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{services[active].full}</p>
                <a href="#contact" onClick={() => setActive(null)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-navy shadow-gold transition-all hover:from-royal hover:to-navy hover:text-white">
                  Request This Service <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ImageSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % gallery.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative overflow-hidden bg-navy-dark py-4">
      <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img key={i} src={gallery[i]} alt=""
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/70 via-navy-dark/20 to-navy-dark/70" />
        <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2">
          {gallery.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-10 bg-gold" : "w-2 bg-white/40 hover:bg-white/70"
              }`} aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="h-px w-8 bg-gold" /> Equipment
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Marine Navigation & <span className="text-royal">Bridge Equipment</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Type-approved marine electronics from trusted global manufacturers.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-1 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-gold"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-dark">
                <img src={p.img} alt={p.name} width={900} height={700} loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <ul className="mt-3 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!ref) return;
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        const dur = 1600, start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(p * end));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(ref);
    return () => io.disconnect();
  }, [ref, end]);
  return <div ref={setRef} className="font-display text-4xl font-bold text-gold sm:text-5xl">{n}{suffix}</div>;
}

function WhyUs() {
  const stats = [
    { n: 24, s: "/7", label: "Marine Support" },
    { n: 50, s: "+", label: "Marine Experts" },
    { n: 100, s: "%", label: "Compliance Rate" },
    { n: 30, s: "+", label: "Global Partners" },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-dark py-24 text-white lg:py-32">
      <div className="absolute inset-0 opacity-30">
        <img src={gBridge} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-navy-dark/80" />
      </div>
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-royal/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" /> Why Choose Us
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built on <span className="text-gradient-gold">Trust</span>, Delivered with Precision
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="flex items-baseline justify-center">
                <Counter end={s.n} suffix={s.s} />
              </div>
              <div className="mt-2 text-sm font-medium text-white/75">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Clock, t: "24/7 Support", d: "Round-the-clock marine operations assistance." },
            { icon: Users, t: "Professional Experts", d: "Class-experienced marine engineers and mariners." },
            { icon: Globe2, t: "Global Network", d: "Established partners across major shipping hubs." },
            { icon: ShieldCheck, t: "Reliable Operations", d: "Consistent, accountable service delivery." },
            { icon: Award, t: "International Compliance", d: "Aligned with SOLAS, MARPOL and class standards." },
            { icon: Check, t: "Quality Assurance", d: "Rigorous QA on every project and delivery." },
          ].map((f) => (
            <div key={f.t}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/50">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{f.t}</h3>
              <p className="mt-1 text-sm text-white/70">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="h-px w-8 bg-gold" /> Get In Touch
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Let's Chart Your <span className="text-royal">Next Voyage</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.form {...fadeUp}
            onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 4000); }}
            className="rounded-3xl border border-border bg-card p-8 shadow-elegant lg:p-10"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" type="email" name="email" required />
              <Field label="Phone" name="phone" />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</label>
                <select className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30">
                  <option>Ship Management</option>
                  <option>Marine Survey</option>
                  <option>Dry Dock Management</option>
                  <option>Charter Operations</option>
                  <option>Marine Consultancy</option>
                  <option>Ship Supplies</option>
                  <option>Navigation Equipment</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea rows={5} required
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30" />
              </div>
            </div>
            <button type="submit"
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-8 py-4 text-sm font-semibold text-navy shadow-gold transition-all hover:-translate-y-0.5 hover:from-royal hover:to-navy hover:text-white sm:w-auto">
              {sent ? "Sent — we'll be in touch" : "Send Inquiry"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>

          <motion.div {...fadeUp} className="flex flex-col gap-6">
            <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-8 text-white shadow-elegant">
              <h3 className="font-display text-xl font-bold">Contact Details</h3>
              <div className="mt-6 space-y-5">
                <InfoRow icon={Mail} label="Email" value="info@akvntrading.com" href="mailto:info@akvntrading.com" />
                <InfoRow icon={Phone} label="Phone" value="+971 58 292 6466" href="tel:+971582926466" />
                <InfoRow icon={MapPin} label="Location" value="Dubai, United Arab Emirates" />
                <InfoRow icon={Clock} label="Business Hours" value="Mon – Sat · 9:00 AM – 6:00 PM GST" />
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
              <iframe
                title="AKVN Dubai location"
                src="https://www.google.com/maps?q=Dubai,United%20Arab%20Emirates&output=embed"
                className="h-64 w-full" loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-gold"> *</span>}
      </label>
      <input type={type} name={name} required={required} maxLength={200}
        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30" />
    </div>
  );
}

function InfoRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const Body = (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/20 text-gold">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
        <div className="mt-0.5 truncate font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block transition-colors hover:text-gold">{Body}</a> : Body;
}

function Footer() {
  return (
    <footer className="relative bg-navy-dark pt-20 pb-8 text-white/80">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft">
              <Anchor className="h-5 w-5 text-navy" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white">AKVN</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Trading FZ-LLC</div>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed">
            AKVN Trading FZ-LLC delivers integrated maritime services, engineering solutions and
            marine equipment for global shipping operations.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Linkedin, Instagram, MessageCircle, Mail].map((Ic, i) => (
              <a key={i} href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy">
                <Ic className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[["#home","Home"],["#about","About"],["#services","Services"],["#products","Products"],["#contact","Contact"]].map(([h,l]) => (
              <li key={l}><a href={h} className="transition-colors hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["Ship Management","Marine Survey","Dry Dock","Marine Consultancy","Ship Supplies"].map((s) => (
              <li key={s}><a href="#services" className="transition-colors hover:text-gold">{s}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> info@akvntrading.com</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> +971 58 292 6466</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/50">
        © 2026 AKVN Trading FZ-LLC. All Rights Reserved.
      </div>
    </footer>
  );
}
