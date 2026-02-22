import { Zap } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Documentation", href: "https://docs.jato.dev", external: true },
    { label: "GitHub", href: "https://github.com/jato-dev", external: true },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  Community: [
    { label: "Discord", href: "#", external: true },
    { label: "Twitter / X", href: "#", external: true },
    { label: "GitHub", href: "https://github.com/jato-dev", external: true },
  ],
};

const JatoFooter = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="gradient-bg rounded-lg p-1.5">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground">Jato</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your AI coding companion that learns with you. Built for developers who ship.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jato. Built for developers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default JatoFooter;
