import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { serviceOptions, whatsappLink } from "@/lib/site-data";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const text =
`New Enquiry — AKVN Trading

Name: ${name}
${company ? `Company: ${company}\n` : ""}Email: ${email}
${phone ? `Phone: ${phone}\n` : ""}Service: ${service}

Message:
${message}`;

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-8 shadow-elegant lg:p-10"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-semibold text-[#128C7E]">
        <MessageCircle className="h-3.5 w-3.5" /> Sends directly to our WhatsApp
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" />
        <Field label="Email" type="email" name="email" required />
        <Field label="Phone" name="phone" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</label>
          <select name="service" defaultValue={serviceOptions[0]}
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30">
            {serviceOptions.map((o) => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message <span className="text-gold">*</span></label>
          <textarea name="message" rows={5} required maxLength={2000}
            className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/30" />
        </div>
      </div>
      <button type="submit" disabled={status === "sending"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] px-8 py-4 text-sm font-semibold text-white shadow-gold transition-all hover:-translate-y-0.5 disabled:opacity-70 sm:w-auto">
        {status === "sent" ? "Opened WhatsApp — send to complete" : "Send via WhatsApp"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </motion.form>
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
