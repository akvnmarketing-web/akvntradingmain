import { useEffect, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  Anchor, ArrowRight, Menu, X, Mail, Phone, MapPin,
  Facebook, Linkedin, Instagram, MessageCircle,
} from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy-dark/95 backdrop-blur-xl shadow-lg py-3" : "bg-navy-dark/40 backdrop-blur-sm py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft shadow-gold">
            <Anchor className="h-5 w-5 text-navy" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">AKVN</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Trading FZ-LLC</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-gold" }}
              inactiveProps={{ className: "text-white/85 hover:text-gold" }}
              className="text-sm font-medium transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-5 py-2.5 text-sm font-semibold text-navy shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-xl hover:from-royal hover:to-navy hover:text-white">
            Get Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
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
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "bg-white/5 text-gold" }}
                  inactiveProps={{ className: "text-white/85 hover:bg-white/5 hover:text-gold" }}
                  className="rounded-lg px-3 py-3 text-sm font-medium">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-navy">
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-navy-dark pt-20 pb-8 text-white/80">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold to-gold-soft">
              <Anchor className="h-5 w-5 text-navy" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display text-lg font-bold text-white">AKVN</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold">Trading FZ-LLC</div>
            </div>
          </Link>
          <p className="mt-5 text-sm leading-relaxed">
            AKVN Trading FZ-LLC delivers integrated maritime services, engineering solutions and
            marine equipment for global shipping operations.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={whatsappLink("Hello AKVN, I'd like to know more about your services.")} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy">
              <MessageCircle className="h-4 w-4" />
            </a>
            {[Facebook, Linkedin, Instagram].map((Ic, i) => (
              <a key={i} href="#" aria-label="Social" className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy">
                <Ic className="h-4 w-4" />
              </a>
            ))}
            <a href={`mailto:${CONTACT.email}`} aria-label="Email"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {links.map((l) => (
              <li key={l.to}><Link to={l.to} className="transition-colors hover:text-gold">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Services</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {["Ship Management","Marine Survey","Dry Dock","Marine Consultancy","Ship Supplies"].map((s) => (
              <li key={s}><Link to="/services" className="transition-colors hover:text-gold">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-gold">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-gold" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a></li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-gold" /> <a href={CONTACT.phoneHref} className="hover:text-gold">{CONTACT.phone}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-gold" /> {CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} AKVN Trading FZ-LLC. All Rights Reserved.
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello AKVN Trading, I'd like to enquire about your maritime services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function PageHero({ eyebrow, title, highlight, subtitle, image }: {
  eyebrow: string; title: string; highlight?: string; subtitle?: string; image: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-navy-dark pt-32 pb-16">
      <img src={image} alt="" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/70 to-navy-dark/40" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{subtitle}</p>}
      </div>
    </section>
  );
}
