import { useTranslations } from 'next-intl';
import { Logo } from '@/components/logo';
import { LanguageSelector } from '@/components/language-selector';

const workProjects = [
  'Electric Animals',
  'Pura Tinta Fest',
  'Blockchain Jungle',
  'Magflow',
  'Sweetspot',
  'Bandida Tattoo Studio',
  'Magflow Studio',
];

export function Footer() {
  const t = useTranslations('footer');
  const tServices = useTranslations('services');

  return (
    <footer className="border-t px-6 py-16 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-muted-foreground mb-4 text-sm">{t('tagline')}</p>
            <LanguageSelector />
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t('services')}</h4>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {tServices(`service${i}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">{t('work')}</h4>
            <ul className="space-y-2">
              {workProjects.map((project) => (
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
            <h4 className="mb-4 font-semibold">{t('company')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {t('about')}
                </a>
              </li>
              <li>
                <a
                  href="#method"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {t('method')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {t('contact')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground border-t pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Broccoli Studios. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
