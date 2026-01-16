import { useTranslations } from 'next-intl';
import { Server, Database, Shield, Layers } from 'lucide-react';

const featureIcons = [Layers, Shield, Database, Server];

export function Platforms() {
  const t = useTranslations('platforms');

  return (
    <section
      id="platforms"
      className="bg-secondary texture-granite relative px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="gold-accent absolute top-0 right-0 left-0" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="luxury-card bg-background rounded-lg p-6">
              {featureIcons[i - 1] &&
                (() => {
                  const Icon = featureIcons[i - 1];
                  return <Icon className="text-primary mb-4 h-8 w-8" />;
                })()}
              <h3 className="mb-2 font-semibold">{t(`category${i}`)}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
