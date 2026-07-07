import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, ShieldCheck, Globe2, Users, ArrowRight } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { IMAGES } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — AKVN Trading FZ-LLC | Maritime Firm Dubai" },
      { name: "description", content: "Learn about AKVN Trading FZ-LLC, a Dubai-based maritime firm delivering integrated ship management, engineering, consultancy and marine equipment services." },
      { property: "og:title", content: "About AKVN Trading FZ-LLC" },
      { property: "og:description", content: "Dubai-headquartered maritime firm founded by experienced professionals delivering integrated solutions for global shipping." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Integrated Maritime Solutions"
        highlight="from Dubai"
        subtitle="A dynamic maritime firm dedicated to providing comprehensive services for ship owners, operators and marine businesses worldwide."
        image={IMAGES.aboutImg}
      />

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl border-2 border-gold" />
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={IMAGES.aboutImg} alt="AKVN maritime office" width={1200} height={900} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-gradient-to-br from-gold to-gold-soft p-6 text-navy shadow-gold sm:block">
              <div className="font-display text-4xl font-bold">10+</div>
              <div className="text-xs font-semibold uppercase tracking-widest">Years Combined Experience</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-royal">
              <span className="h-px w-8 bg-gold" /> Our Story
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              About AKVN Trading <span className="text-royal">FZ-LLC</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              AKVN Trading FZ-LLC is a dynamic maritime firm dedicated to providing comprehensive and integrated solutions for the shipping industry. Founded by industry veterans with a deep and holistic understanding of marine operations, we are committed to delivering exceptional service and tailored solutions to meet the diverse needs of modern vessel owners and operators.
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
                <div key={label} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg">
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

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-card p-10 shadow-sm">
            <h3 className="font-display text-2xl font-bold">Our Mission</h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              To provide dependable and efficient maritime supply solutions through transparent processes, coordinated operations, and disciplined execution. We focus on delivering consistent service that supports safe, compliant, and uninterrupted vessel operations.
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-10 text-white shadow-elegant">
            <h3 className="font-display text-2xl font-bold">Our Vision</h3>
            <p className="mt-4 text-white/80 leading-relaxed">
              To become a trusted multi-regional supply partner for the shipping industry, recognized for reliability, integrity, and operational excellence. We aim to build long-term partnerships by aligning global standards with strong local execution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">Ready to talk to our team?</h3>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-royal">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
