import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Search,
  Paintbrush,
  Factory,
  Truck,
  TrendingUp,
  Shield,
  Zap,
  HeadphonesIcon,
  DollarSign,
  Globe,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    icon: Search,
    title: "Choose Your Products",
    description:
      "Browse our catalogue of 500+ proven formulations across all therapeutic categories. Select the products that fit your target market and business goals.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    step: "02",
    icon: Paintbrush,
    title: "Customize Your Branding",
    description:
      "Work with our design team to create your brand identity — logo, packaging design, label artwork, and colour schemes that resonate with your market.",
    color: "bg-primary/10 text-primary",
  },
  {
    step: "03",
    icon: Factory,
    title: "Manufacturing & QC",
    description:
      "We manufacture your products in our WHO-GMP certified facility with stringent quality control checks at every stage of production.",
    color: "bg-teal-50 text-teal-600",
  },
  {
    step: "04",
    icon: Truck,
    title: "Packaging & Delivery",
    description:
      "Your branded products are packed and dispatched directly to you or your distribution network — on time, every time.",
    color: "bg-amber-50 text-amber-600",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "No Manufacturing Investment",
    description:
      "Launch your pharma brand without investing crores in setting up a manufacturing plant. We handle the infrastructure.",
  },
  {
    icon: Shield,
    title: "Full Regulatory Support",
    description:
      "We assist with drug licensing, labeling compliance, and export documentation. Our regulatory team handles all the paperwork.",
  },
  {
    icon: Zap,
    title: "Fast Time-to-Market",
    description:
      "Launch your brand in as few as 45-60 days. Our streamlined process ensures minimal delays from concept to shelf.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Account Manager",
    description:
      "Every white label partner gets a dedicated manager who coordinates production, branding, and delivery for your account.",
  },
  {
    icon: DollarSign,
    title: "Flexible MOQ",
    description:
      "Start small and scale as you grow. We offer flexible minimum order quantities suitable for startups and large distributors.",
  },
  {
    icon: Globe,
    title: "Export-Ready Products",
    description:
      "All products are manufactured to international standards and are export-ready with WHO-GMP and ISO certification documentation.",
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity for white labeling?",
    a: "MOQs vary by product type — generally starting from 1,000 units for tablets/capsules and 500 units for liquid formulations. We are flexible for new partners.",
  },
  {
    q: "How long does the entire process take?",
    a: "From product selection to first delivery typically takes 45-60 days, which includes regulatory paperwork, design, manufacturing, and QC.",
  },
  {
    q: "Do you help with drug licensing?",
    a: "Yes. Our regulatory affairs team provides full support in obtaining drug manufacturing licenses, import/export licenses, and product registrations.",
  },
  {
    q: "Can I request custom formulations?",
    a: "Absolutely. Our R&D team can develop custom formulations based on your market requirements. This may require additional lead time.",
  },
  {
    q: "Do you provide packaging design services?",
    a: "Yes. We offer in-house branding and packaging design services, or we can work with your existing design team.",
  },
];

const testimonials = [
  {
    name: "James L.",
    company: "HealthFirst Pharma, Nigeria",
    text: "PharmaCore helped us launch 20 products under our brand within 2 months. The quality and pricing are unbeatable in the market.",
    rating: 5,
  },
  {
    name: "Priya M.",
    company: "VitaCure Brands, India",
    text: "The entire white label process was seamless. Our dedicated account manager was always responsive and the products passed all quality tests.",
    rating: 5,
  },
];

export default function WhiteLabelPage() {
  return (
    <main className="pt-20 bg-background">
      {/* Hero */}
      <section className="bg-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">White Label Services</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-5 bg-white/20 text-white border-white/30 text-xs uppercase tracking-wide">
                White Label Program
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-5">
                Launch Your Own Pharmaceutical Brand with Confidence
              </h1>
              <p className="text-white/70 leading-relaxed mb-8">
                Partner with PharmaCore for end-to-end white label
                pharmaceutical manufacturing. From product selection to branded
                delivery — we make building your pharma business simple, fast,
                and compliant.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link href="/contact?type=whitelabel">
                    Request Partnership <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                >
                  <Link href="/products">Browse Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
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

      {/* What is white labeling */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-5 text-primary font-semibold"
            >
              What Is White Labeling?
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-6">
              Your Brand, Our Expertise
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              White labeling in pharmaceuticals means we manufacture the
              medicines and you sell them under your own brand name. You get
              full brand ownership — the packaging, labels, and product identity
              are entirely yours — while we handle the complex manufacturing,
              quality control, and compliance.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              This model eliminates the need for your own manufacturing plant,
              saving you significant capital investment while giving you a
              competitive, fully compliant product portfolio in a fraction of
              the time.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge
              variant="secondary"
              className="mb-5 text-primary font-semibold"
            >
              Our Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Simple 4-Step Journey to Your Brand
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(
              ({ step, icon: Icon, title, description, color }, idx) => (
                <div key={step} className="relative">
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 right-0 w-full h-px bg-border translate-x-1/2 z-0" />
                  )}
                  <div className="relative z-10 bg-card rounded-2xl p-6 border border-border h-full hover:shadow-lg hover:border-primary/30 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-black text-muted/60">
                        {step}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge
              variant="secondary"
              className="mb-5 text-primary font-semibold"
            >
              Why Choose Us
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              The PharmaCore White Label Advantage
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge
              variant="secondary"
              className="mb-5 text-primary font-semibold"
            >
              Partner Stories
            </Badge>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              What Our White Label Partners Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map(({ name, company, text, rating }) => (
              <div
                key={name}
                className="bg-card rounded-2xl p-6 border border-border shadow-sm"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 italic">
                  &ldquo;{text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {name}
                  </p>
                  <p className="text-muted-foreground text-xs">{company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge
              variant="secondary"
              className="mb-5 text-primary font-semibold"
            >
              FAQ
            </Badge>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground mb-2">{q}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance mb-5">
            Ready to Start Your Pharmaceutical Brand?
          </h2>
          <p className="text-white/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            Join 200+ businesses that have successfully launched under our white
            label program. Fill out the form and our team will reach out within
            24 hours.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
          >
            <Link href="/contact?type=whitelabel">
              Request White Label Partnership{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
