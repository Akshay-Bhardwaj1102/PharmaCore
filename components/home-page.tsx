import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  Award,
  TruckIcon,
  Tags,
  ShieldCheck,
  Star,
  CheckCircle2,
  ChevronRight,
  Globe,
  Users,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: FlaskConical,
    title: "Medicine Manufacturing",
    description:
      "State-of-the-art GMP-compliant facilities producing tablets, capsules, syrups, and injections to the highest quality standards.",
    href: "/products",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: TruckIcon,
    title: "Distribution Network",
    description:
      "Reliable pan-India and international distribution ensuring your medicines reach pharmacies and hospitals on time.",
    href: "/products",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Tags,
    title: "White Label Solutions",
    description:
      "Launch your own pharmaceutical brand with our end-to-end white labeling — from product selection to custom packaging.",
    href: "/white-label",
    color: "bg-teal-100 text-teal-600",
  },
];

const certifications = [
  { label: "WHO-GMP Certified", icon: "🏆" },
  { label: "ISO 9001:2015", icon: "✓" },
  { label: "Drug License Holder", icon: "🛡" },
  { label: "FSSAI Approved", icon: "✓" },
];

const stats = [
  { value: "500+", label: "Products", icon: Package },
  { value: "200+", label: "Partners", icon: Users },
  { value: "30+", label: "Countries", icon: Globe },
  { value: "15+", label: "Years Experience", icon: Award },
];

const testimonials = [
  {
    name: "Dr. Ramesh Patel",
    role: "Director, MediCare Distributors",
    text: "PharmaCore has been our trusted manufacturing partner for 8 years. Their quality consistency and timely delivery have helped us scale our distribution business significantly.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "CEO, Wellness Brand Co. UK",
    text: "Their white label service is exceptional. We launched our own pharma brand in under 60 days with full regulatory compliance. Highly professional team.",
    rating: 5,
  },
  {
    name: "Anita Sharma",
    role: "Owner, PharmaTech Exports",
    text: "We export PharmaCore products to 12 countries. Their WHO-GMP certification makes customs clearance seamless everywhere.",
    rating: 5,
  },
];

const productCategories = [
  { label: "Tablets", image: "/images/tablets.jpg", count: "150+" },
  { label: "Capsules", image: "/images/capsules.jpg", count: "80+" },
  { label: "Syrups", image: "/images/syrups.jpg", count: "60+" },
  { label: "Injections", image: "/images/injections.jpg", count: "40+" },
];

export default function HeroSection() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.jpg"
          alt="Pharmaceutical manufacturing facility"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
        {/* Subtle teal accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-xs font-medium tracking-wide uppercase">
              WHO-GMP &amp; ISO Certified Manufacturer
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              Trusted Pharmaceutical Manufacturing &amp;{" "}
              <span className="text-primary">White Label</span> Solutions
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-8 max-w-xl">
              PharmaCore delivers high-quality medicines and end-to-end white
              labeling services — helping businesses launch, scale, and
              succeed in the pharmaceutical industry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                <Link href="/products">
                  View Products <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white hover:border-white/60 font-semibold">
                <Link href="/white-label">
                  Start Your Brand <ChevronRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {certifications.map((cert) => (
                <div
                  key={cert.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                  <span className="text-white/90 text-xs font-medium">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <div className="w-px h-10 bg-white/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(({ value, label, icon: Icon }) => (
              <div key={label} className="text-center">
                <Icon className="w-6 h-6 text-white/60 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white">{value}</div>
                <div className="text-white/70 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 text-primary font-semibold">
                About PharmaCore
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight text-balance mb-6">
                Setting the Standard in Pharmaceutical Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Founded with a vision to make quality healthcare accessible, PharmaCore
                Laboratories operates a state-of-the-art, WHO-GMP certified manufacturing
                facility in Gujarat, India. We serve distributors, hospitals, and
                entrepreneurs across 30+ countries.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Fully automated, contamination-free production lines",
                  "In-house R&D and quality control laboratories",
                  "Dedicated export and regulatory compliance team",
                  "Flexible MOQs for startups and large enterprises",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-auto min-h-72">
              <Image
                src="/images/manufacturing.jpg"
                alt="PharmaCore manufacturing facility"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">WHO-GMP Certified</p>
                    <p className="text-muted-foreground text-xs">International Quality Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4 text-primary font-semibold">Our Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Everything You Need to Build a Pharma Business
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, href, color }) => (
              <Link key={title} href={href} className="group">
                <div className="bg-card rounded-2xl p-7 border border-border h-full flex flex-col hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-5 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Product categories */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <Badge variant="secondary" className="mb-4 text-primary font-semibold">Product Range</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
                Wide Range of Quality Medicines
              </h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/products">
                View All Products <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {productCategories.map(({ label, image, count }) => (
              <Link key={label} href={`/products?category=${label.toLowerCase()}`} className="group">
                <div className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={image}
                      alt={label}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{label}</p>
                      <p className="text-muted-foreground text-sm">{count} Products</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* White label CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight text-balance mb-5">
                Ready to Launch Your Own Pharmaceutical Brand?
              </h2>
              <p className="text-white/75 leading-relaxed mb-8">
                Our white label program gives you access to 500+ proven formulations,
                custom packaging design, full regulatory support, and fast turnaround —
                all under your own brand name.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  <Link href="/white-label">
                    Request White Label Partnership <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">
                  <Link href="/contact">Talk to an Expert</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-72 lg:h-80 shadow-2xl">
              <Image
                src="/images/white-label.jpg"
                alt="White label pharmaceutical packaging"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4 text-primary font-semibold">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Trusted by Partners Across the Globe
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }) => (
              <div
                key={name}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{name}</p>
                    <p className="text-muted-foreground text-xs">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
