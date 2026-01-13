const footerLinks = {
  services: [
    "Ecosystem & Business Architecture",
    "Technology & Platform Development",
    "Data, AI & Intelligence",
    "Growth & Revenue Systems",
    "Experience Strategy",
  ],
  work: [
    "Electric Animals",
    "Pura Tinta Fest",
    "Blockchain Jungle",
    "Magflow",
    "Sweetspot",
    "Bandida Tattoo Studio",
    "Magflow Studio",
  ],
};

export function Footer() {
  return (
    <footer className="py-16 px-6 md:px-12 lg:px-24 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Broccoli Studios</h3>
            <p className="text-sm text-muted-foreground">
              Technology, Data & Ecosystem Design
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Work</h4>
            <ul className="space-y-2">
              {footerLinks.work.map((project) => (
                <li key={project}>
                  <a
                    href="#work"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Method
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Broccoli Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
