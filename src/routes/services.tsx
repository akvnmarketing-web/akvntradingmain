import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronRight, X } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMAGES, services, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Maritime Services — Ship Management, Survey, Dry Dock | AKVN Trading" },
      { name: "description", content: "Comprehensive maritime services: ship management, marine surveys, dry dock management, charter operations, marine consultancy and ship supplies." },
      { property: "og:title", content: "Maritime Services — AKVN Trading" },
      { property: "og:description", content: "Six integrated maritime service lines covering the full lifecycle of vessel ownership and operation." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((s, i) => ({
          "@type": "Service", position: i + 1, name: s.title, description: s.short,
          provider: { "@type": "Organization", name: "AKVN Trading FZ-LLC" },
        })),
      }),
    }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Services"
        title="Maritime services for"
        highlight="every stage of a voyage"
        subtitle="Six integrated service lines covering the full lifecycle of vessel ownership and operation."
        image={IMAGES.sMgmt}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                  <h2 className="font-display text-xl font-bold leading-tight">{s.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <button onClick={() => setActive(i)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal transition-colors hover:text-gold">
                    Read More <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold to-royal transition-transform duration-500 group-hover:scale-x-100" />
              </motion.article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy to-royal p-10 text-center text-white lg:p-14">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Need a tailored maritime solution?</h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/80">Speak directly with our team about your vessel or operation.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy shadow-gold hover:-translate-y-0.5 transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={whatsappLink("Hi AKVN, I'd like to discuss a service enquiry.")} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

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
                <button onClick={() => setActive(null)} aria-label="Close"
                  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-navy transition-colors hover:bg-gold">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{services[active].title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{services[active].full}</p>
                <Link to="/contact" onClick={() => setActive(null)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-gold-soft px-6 py-3 text-sm font-semibold text-navy shadow-gold transition-all hover:from-royal hover:to-navy hover:text-white">
                  Request This Service <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SiteLayout>
  );
}
