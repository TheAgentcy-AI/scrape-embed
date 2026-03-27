import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="py-16 bg-background-deep border-t border-border/20">
      <Container>
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-text-primary mb-4">
              {SITE.name}
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              {SITE.tagline}. A luxury ski-in/ski-out home in Jay Peak,
              Vermont.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-text-muted mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  <Mail size={16} className="text-accent/60" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  <Phone size={16} className="text-accent/60" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-text-secondary text-sm">
                <MapPin size={16} className="text-accent/60 flex-shrink-0" />
                {SITE.address}
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors text-sm"
                >
                  <Globe size={16} className="text-accent/60" />
                  @peakhaus
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Peak Haus. All rights reserved.
          </p>
          <p className="text-text-muted/50 text-xs">
            Jay Peak, Vermont
          </p>
        </div>
      </Container>
    </footer>
  );
}
