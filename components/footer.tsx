import { Logo } from '@/components/logo';

const footerLinks = {
  services: [
    'Ecosystem & Business Architecture',
    'Technology & Platform Development',
    'Data, AI & Intelligence',
    'Growth & Revenue Systems',
    'Experience Strategy',
  ],
  work: [
    'Electric Animals',
    'Pura Tinta Fest',
    'Blockchain Jungle',
    'Magflow',
    'Sweetspot',
    'Bandida Tattoo Studio',
    'Magflow Studio',
  ],
};

export function Footer() {
  return (
    <footer className="border-t px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Logo size={24} />
              <h3 className="text-lg font-bold">Broccoli Studios</h3>
            </div>
            <p className="text-muted-foreground text-sm">Technology, Data & Ecosystem Design</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Work</h4>
            <ul className="space-y-2">
              {footerLinks.work.map((project) => (
                <li key={project}>
                  <a
                    href="#work"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {project}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Method
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Broccoli Studios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
