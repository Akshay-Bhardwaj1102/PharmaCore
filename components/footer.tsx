import Link from "next/link";
import {
  FlaskConical,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Certifications", href: "/certifications" },
    { label: "Manufacturing", href: "/about#manufacturing" },
    { label: "Careers", href: "/contact" },
  ],
  services: [
    { label: "Medicine Products", href: "/products" },
    { label: "White Label Services", href: "/white-label" },
    { label: "Distribution", href: "/products" },
    { label: "Custom Formulations", href: "/white-label" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "Partner Program", href: "/white-label" },
    { label: "Quality Standards", href: "/certifications" },
    { label: "Privacy Policy", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Pharma<span className="text-primary">Core</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              WHO-GMP and ISO certified pharmaceutical manufacturer delivering
              trusted medicines and white label solutions to partners worldwide.
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a
                href="mailto:info@pharmacore.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                info@pharmacore.com
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +91 12345 67890
              </a>
              <span className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                Plot 12, Pharma Industrial Zone,
                <br />
                Dhamandri, India - 147303
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, links]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} PharmaCore Laboratories. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
