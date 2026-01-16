import { useTranslations } from 'next-intl';

export function Positioning() {
  const t = useTranslations('positioning');

  return (
    <section id="positioning" className="bg-secondary px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">{t('title')}</h2>

        <p className="text-muted-foreground mb-12 text-lg">{t('description')}</p>

        <div className="grid gap-8 text-left md:grid-cols-2">
          <div className="bg-background rounded-lg p-6">
            <h3 className="mb-4 text-lg font-semibold">{t('whatWeDo')}</h3>
            <ul className="text-muted-foreground space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-2">+</span>
                  {t(`do${i}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-background rounded-lg p-6">
            <h3 className="mb-4 text-lg font-semibold">{t('whatWeDont')}</h3>
            <ul className="text-muted-foreground space-y-2">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start">
                  <span className="text-muted-foreground/50 mr-2">-</span>
                  {t(`dont${i}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
