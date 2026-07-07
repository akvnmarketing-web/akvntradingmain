import { Ship, Wrench, Anchor, Compass, Waves, Package } from "lucide-react";
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

export const IMAGES = { hero, aboutImg, sMgmt, sSurvey, sDock, sCharter, sConsult, sSupply, gBridge, gPort };

export const CONTACT = {
  email: "info@akvntrading.com",
  phone: "+971 58 292 6466",
  phoneHref: "tel:+971582926466",
  whatsappNumber: "971582926466",
  location: "Dubai, United Arab Emirates",
  hours: "Mon – Sat · 9:00 AM – 6:00 PM GST",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const services = [
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

export const serviceOptions = [
  "Ship Management", "Marine Survey", "Dry Dock Management",
  "Charter Operations", "Marine Consultancy", "Ship Supplies", "Navigation Equipment",
];

export const products = [
  { name: "Alpha Heading + Indicator", img: pHeading, features: ["MFL Display & Type Approved", "Clear bright touch display", "Uniform design", "Simple operation", "Various display sizes", "Central dimming"] },
  { name: "JLR 7900 DGPS", img: pDgps, features: ["IMO Type Approved", "Built-in SBAS", "RAIM Function", "3 NMEA0183 Ports", "10.8–31.2 VDC"] },
  { name: "AlphaScreen 19\" Display", img: pDisplay, features: ["LED Backlight", "ECDIS Calibrated", "Wide Dimming", "Class Society Approved"] },
  { name: "AlphaBridge Console", img: pConsole, features: ["Ergonomic Design", "International Standards", "Space Saving", "Flexible Integration"] },
  { name: "JFE-380 Echo Sounder", img: pEcho, features: ["6.5\" TFT Display", "High Accuracy", "Wide Depth Range", "24 Hour Memory"] },
  { name: "FF-901 Chartplotter / Fishfinder", img: pFish, features: ["Airmar Support", "Ultra Bright Display", "Wi-Fi Connectivity", "Cloud Access"] },
];

export const gallery = [sMgmt, sSurvey, sDock, gBridge, sCharter, sSupply, gPort, hero];
