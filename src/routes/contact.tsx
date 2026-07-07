import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ContactForm } from "@/components/site/ContactForm";
import { CONTACT, IMAGES, whatsappLink } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AKVN Trading FZ-LLC | Maritime Enquiries Dubai" },
      { name: "description", content: "Get in touch with AKVN Trading FZ-LLC in Dubai for ship management, marine consultancy, dry dock and marine equipment enquiries. WhatsApp, email and phone." },
      { property: "og:title", content: "Contact AKVN Trading FZ-LLC" },
      { property: "og:description", content: "Reach our Dubai-based maritime team via WhatsApp, email or phone." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's chart your"
        highlight="next voyage"
        subtitle="Send an enquiry and it will be delivered straight to our WhatsApp for the fastest response."
        image={IMAGES.gPort}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr]">
            <ContactForm />

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
              <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-dark p-8 text-white shadow-elegant">
                <h2 className="font-display text-xl font-bold">Contact Details</h2>
                <div className="mt-6 space-y-5">
                  <InfoRow icon={Mail} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
                  <InfoRow icon={Phone} label="Phone" value={CONTACT.phone} href={CONTACT.phoneHref} />
                  {/* <InfoRow icon={MessageCircle} label="WhatsApp" value={CONTACT.phone} href={whatsappLink("Hello AKVN, I'd like to enquire about your services.")} /> */}
                  <InfoRow icon={MapPin} label="Location" value={CONTACT.location} />
                  <InfoRow icon={Clock} label="Business Hours" value={CONTACT.hours} />
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
    </SiteLayout>
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
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="block transition-colors hover:text-gold">{Body}</a>
  ) : Body;
}
