import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies';

export function Work() {
  const t = useTranslations('work');
  const locale = useLocale();

  return (
    <section id="work" className="bg-secondary px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/${locale}/work/${study.slug}`}
              className="bg-background group hover:border-primary/50 overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              <div className="bg-muted relative aspect-[16/9] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  loading="eager"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-primary mb-1 text-xs tracking-wider uppercase">
                  {study.category}
                </p>
                <h3 className="mb-2 text-lg font-semibold">{study.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{study.summary}</p>
                <div className="flex items-center justify-between border-t pt-3">
                  <p className="text-muted-foreground line-clamp-1 text-xs">
                    <span className="text-foreground font-medium">{t('outcome')}:</span>{' '}
                    {study.outcome}
                  </p>
                  <ArrowRight className="text-primary h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
