import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { caseStudies, getCaseStudyBySlug, getAllCaseStudySlugs } from '@/lib/case-studies';
import { locales } from '@/i18n/config';

export function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  const params = [];

  for (const locale of locales) {
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  // Find prev/next studies for navigation
  const currentIndex = caseStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[400px] w-full">
          <Image
            src={study.image}
            alt={study.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="from-background via-background/50 absolute inset-0 bg-gradient-to-t to-transparent" />
        </div>

        {/* Content */}
        <article className="px-6 py-16 md:px-12 lg:px-24">
          <div className="mx-auto max-w-4xl">
            {/* Back link */}
            <Link
              href={`/${locale}#work`}
              className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center text-sm transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all work
            </Link>

            {/* Header */}
            <header className="mb-12">
              <p className="text-primary mb-3 text-sm font-medium tracking-wider uppercase">
                {study.category}
              </p>
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{study.title}</h1>
              <p className="text-muted-foreground text-xl leading-relaxed">{study.summary}</p>
            </header>

            {/* Scope */}
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold">Broccoli Studios Scope</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {study.scope.map((item, i) => (
                  <div
                    key={i}
                    className="hover:border-primary/50 flex items-start rounded-lg border p-4 transition-colors"
                  >
                    <span className="text-primary mr-3 text-lg font-bold">+</span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcome */}
            <section className="bg-secondary mb-12 rounded-lg p-8">
              <h2 className="mb-3 text-sm font-semibold tracking-wider uppercase">Outcome Focus</h2>
              <p className="text-xl font-medium">{study.outcome}</p>
            </section>

            {/* CTA */}
            <section className="mb-16 text-center">
              <p className="text-muted-foreground mb-4">
                Want to build a similar ecosystem for your business?
              </p>
              <Button size="lg" asChild>
                <Link href={`/${locale}#contact`}>
                  Start a Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </section>

            {/* Prev/Next Navigation */}
            <nav className="flex items-center justify-between border-t pt-8">
              {prevStudy ? (
                <Link
                  href={`/${locale}/work/${prevStudy.slug}`}
                  className="group flex items-center"
                >
                  <ArrowLeft className="text-muted-foreground group-hover:text-foreground mr-3 h-5 w-5 transition-colors" />
                  <div>
                    <p className="text-muted-foreground text-sm">Previous</p>
                    <p className="font-medium group-hover:underline">{prevStudy.title}</p>
                  </div>
                </Link>
              ) : (
                <div />
              )}

              {nextStudy ? (
                <Link
                  href={`/${locale}/work/${nextStudy.slug}`}
                  className="group flex items-center text-right"
                >
                  <div>
                    <p className="text-muted-foreground text-sm">Next</p>
                    <p className="font-medium group-hover:underline">{nextStudy.title}</p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-foreground ml-3 h-5 w-5 transition-colors" />
                </Link>
              ) : (
                <div />
              )}
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
