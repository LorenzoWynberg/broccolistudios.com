import { useTranslations } from 'next-intl';
import { Building2, Code2, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

const serviceIcons = [Building2, Code2, BarChart3, TrendingUp, Sparkles];

export function Services() {
  const t = useTranslations('services');

  return (
    <section
      id="services"
      className="texture-marble texture-grain relative px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((i) => {
            const Icon = serviceIcons[i - 1];
            return (
              <div key={i} className="luxury-card group bg-card rounded-lg p-6">
                <Icon className="text-primary mb-4 h-8 w-8" />
                <h3 className="mb-2 text-xl font-semibold">{t(`service${i}.title`)}</h3>
                <p className="text-muted-foreground">{t(`service${i}.description`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
