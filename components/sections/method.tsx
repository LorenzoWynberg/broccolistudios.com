import { useTranslations } from 'next-intl';

export function Method() {
  const t = useTranslations('method');

  return (
    <section id="method" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i}>
              <div className="text-primary/20 mb-2 text-4xl font-bold">{t(`step${i}.number`)}</div>
              <h3 className="mb-2 font-semibold">{t(`step${i}.title`)}</h3>
              <p className="text-muted-foreground text-sm">{t(`step${i}.description`)}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
            {t('outcomes')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <span key={i} className="bg-background rounded-full px-4 py-2 font-medium">
                {t(`outcome${i}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
