import { useTranslations } from 'next-intl';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">{t('title')}</h2>

        <div className="mb-12 text-center">
          <p className="text-muted-foreground mb-6 text-lg">{t('description')}</p>
          <p className="text-muted-foreground mb-4">{t('paragraph1')}</p>
          <p className="text-muted-foreground">{t('paragraph2')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="text-primary mb-2 text-4xl font-bold">8+</div>
            <p className="text-muted-foreground text-sm">{t('stat1')}</p>
          </div>
          <div className="text-center">
            <div className="text-primary mb-2 text-4xl font-bold">15+</div>
            <p className="text-muted-foreground text-sm">{t('stat2')}</p>
          </div>
          <div className="text-center">
            <div className="text-primary mb-2 text-4xl font-bold">40%</div>
            <p className="text-muted-foreground text-sm">{t('stat3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
