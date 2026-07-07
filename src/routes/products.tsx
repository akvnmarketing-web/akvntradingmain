import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMAGES, products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Marine Navigation & Bridge Equipment | AKVN Trading" },
      { name: "description", content: "Type-approved marine navigation equipment, bridge consoles, DGPS, echo sounders, chartplotters and displays from trusted global manufacturers." },
      { property: "og:title", content: "Marine Navigation & Bridge Equipment" },
      { property: "og:description", content: "Type-approved marine electronics distributed by AKVN Trading FZ-LLC." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Equipment"
        title="Marine Navigation &"
        highlight="Bridge Equipment"
        subtitle="Type-approved marine electronics from trusted global manufacturers."
        image={IMAGES.gBridge}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <motion.div key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-1 transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-gold"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-dark">
                  <img src={p.img} alt={p.name} width={900} height={700} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-bold">{p.name}</h2>
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

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Need a specific make or model?</p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-royal">
              Enquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
