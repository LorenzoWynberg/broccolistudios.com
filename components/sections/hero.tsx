'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { AnimatedGrid } from '@/components/animated-grid';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="texture-marble texture-grain marble-shine stone-overlay relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <AnimatedGrid />
      <div className="relative z-10 max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          <span className="text-gold-gradient">{t('title')}</span>
          <span className="text-muted-foreground mt-2 block">{t('subtitle')}</span>
        </h1>

        <p className="text-muted-foreground mb-8 max-w-3xl text-lg md:text-xl">
          {t('description')}
        </p>

        <div className="mb-16 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="btn-luxury group"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            {t('cta')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="btn-luxury"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('ctaSecondary')}
          </Button>
        </div>

        <div className="gold-accent mb-8" />
        <div className="pt-0">
          <p className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
            {t('capabilities')}
          </p>
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-sm"
              >
                {t(`capability${i}`)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          document.getElementById('positioning')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="text-muted-foreground h-8 w-8" />
      </button>
    </section>
  );
}
