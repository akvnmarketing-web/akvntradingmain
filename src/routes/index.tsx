import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ShieldCheck, Check, Clock, Users, Globe2, Award, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { IMAGES, services, products } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AKVN Trading FZ-LLC | Maritime Services & Ship Management UAE" },
      { name: "description", content: "UAE-based maritime firm offering ship management, marine surveys, dry dock, charter operations, marine consultancy, ship supplies and navigation equipment." },
      { property: "og:title", content: "AKVN Trading FZ-LLC | Maritime Services UAE" },
      { property: "og:description", content: "Integrated maritime solutions from Dubai — ship management, engineering, charters, consultancy and marine equipment." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "AKVN Trading FZ-LLC",
        url: "/",
        email: "info@akvntrading.com",
        telephone: "+971582926466",
        address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
        areaServed: "Worldwide",
      }),
    }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <Slider />
      <WhyUs />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-dark">
      <motion.div style={{ y }} className="absolute inset-0">
        <img src={IMAGES.hero} alt="Container ship at sea" width={1920} height={1080} fetchPriority="high"
          className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-navy-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/40" />

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
            <Link to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-7 py-4 text-sm font-semibold text-navy shadow-gold transition-all hover:-translate-y-0.5 hover:shadow-2xl">
              Explore Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-gold hover:bg-white/10">
              Contact Us
            </Link>
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

      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg viewBox="0 0 1440 100" className="h-16 w-full sm:h-24" preserveAspectRatio="none" aria-hidden>
          <path fill="var(--background)" d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,100L0,100Z" />
        </svg>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-gold" />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={IMAGES.aboutImg} alt="AKVN maritime office" width={1200} height={900} loading="lazy"
              className="h-full w-full object-cover" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="h-px w-8 bg-gold" /> About Us
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            About AKVN Trading <span className="text-royal">FZ-LLC</span>
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            A dynamic maritime firm delivering comprehensive, integrated solutions for the global
            shipping industry. Founded by experienced maritime professionals and headquartered in
            Dubai, UAE.
          </p>
          <Link to="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-royal">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesTeaser() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
            <span className="h-px w-8 bg-gold" /> What We Do <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our Maritime <span className="text-royal">Services</span>
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
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
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-gold">
                  Read More <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-royal">
            All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Slider() {
  const imgs = [products[0].img, products[1].img, products[2].img, products[3].img, products[4].img, products[5].img];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % imgs.length), 4500);
    return () => clearInterval(t);
  }, [imgs.length]);
  return (
    <section className="relative overflow-hidden bg-navy-dark py-4">
      <div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
        <img src={imgs[i]} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/70 via-navy-dark/20 to-navy-dark/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Bridge Equipment</p>
          <h3 className="mt-3 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Type-approved marine electronics</h3>
          <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold hover:-translate-y-0.5 transition">
            View Products <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { icon: Clock, t: "24/7 Support", d: "Round-the-clock marine operations assistance." },
    { icon: Users, t: "Professional Experts", d: "Class-experienced marine engineers and mariners." },
    { icon: Globe2, t: "Global Network", d: "Established partners across major shipping hubs." },
    { icon: ShieldCheck, t: "Reliable Operations", d: "Consistent, accountable service delivery." },
    { icon: Award, t: "International Compliance", d: "Aligned with SOLAS, MARPOL and class standards." },
    { icon: Check, t: "Quality Assurance", d: "Rigorous QA on every project and delivery." },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-dark py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold" /> Why Choose Us
          </div>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Built on <span className="text-gradient-gold">Trust</span>, Delivered with Precision
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.t} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-gold/50">
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

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl bg-gradient-to-br from-navy to-royal p-10 text-center text-white shadow-elegant lg:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Ready to work with AKVN?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">Get in touch with our maritime team — we typically respond within one business hour.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy shadow-gold transition-all hover:-translate-y-0.5">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
