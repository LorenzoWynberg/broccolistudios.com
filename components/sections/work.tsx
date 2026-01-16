import Image from 'next/image';
import { useTranslations } from 'next-intl';

const caseStudies = [
  {
    title: 'Electric Animals',
    category: 'Experience Ecosystem & Platform Strategy',
    summary:
      'Electric Animals operates as a large-scale experience ecosystem rather than a single festival. Broccoli Studios designed the system connecting audience data, monetization, experience design, and long-term brand growth.',
    scope: [
      'Ecosystem and business model architecture',
      'Audience journey and data capture design',
      'Platform and system integrations',
      'Growth and revenue system design',
      'Experience blueprint for execution teams',
    ],
    outcome: 'scalable ecosystem, data-driven decisions, repeatable growth model',
    image: '/images/jacobcollier_21-09-25-04416.webp',
  },
  {
    title: 'Pura Tinta Fest',
    category: 'Cultural Convention Platform Architecture',
    summary:
      'Pura Tinta Fest required a system capable of supporting large-scale attendance, exhibitors, and artists while preserving cultural identity. Broccoli Studios designed the digital and operational ecosystem behind the convention.',
    scope: [
      'Platform and data architecture',
      'Stakeholder journey design',
      'Business model optimization',
      'Experience system blueprint',
    ],
    outcome: 'scalable convention model, operational clarity, improved stakeholder experience',
    image: '/images/_a1a6014.webp',
  },
  {
    title: 'Blockchain Jungle',
    category: 'Conference & Knowledge Ecosystem Design',
    summary:
      'Blockchain Jungle functions as a knowledge and networking platform rather than a one-off event. Broccoli Studios designed the system connecting speakers, sponsors, attendees, content, and data.',
    scope: [
      'Conference ecosystem architecture',
      'Data and segmentation strategy',
      'Platform integrations',
      'Monetization and partner value systems',
    ],
    outcome: 'structured conference ecosystem, repeatable annual model',
    image: '/images/bcjungle-7.webp',
  },
  {
    title: 'Magflow',
    category: 'Culture & Media Ecosystem Design',
    summary:
      'Magflow operates at the intersection of music, culture, and live experiences. Broccoli Studios designed the ecosystem allowing content, community, and experiences to function as a scalable platform.',
    scope: [
      'Platform and content ecosystem design',
      'Growth and distribution strategy',
      'Audience data architecture',
      'Experience frameworks',
    ],
    outcome: 'unified audience system, scalable cultural platform',
    image: '/images/img_3697.webp',
  },
  {
    title: 'Sweetspot',
    category: 'Esports Ecosystem & Competitive Platform Design',
    summary:
      'Sweetspot requires structured systems to support competitive integrity, recurring tournaments, and audience growth. Broccoli Studios designed the architecture behind operations, data, and monetization.',
    scope: [
      'Competitive ecosystem architecture',
      'Platform and data system design',
      'Growth and monetization systems',
      'Experience strategy for live and digital formats',
    ],
    outcome: 'scalable esports platform, repeatable competition systems',
    image: '/images/ss_img_0083.webp',
  },
  {
    title: 'Bandida Tattoo Studio',
    category: 'Physical Business Ecosystem & Brand Platform',
    summary:
      'Bandida Tattoo Studio functions as a premium physical business with strong cultural identity. Broccoli Studios designed the system that allows the studio to scale beyond a single location.',
    scope: [
      'Business and ecosystem architecture',
      'Customer journey design',
      'Digital and operational platform design',
      'Growth strategy and experience framework',
    ],
    outcome: 'structured operations, scalable brand, consistent customer experience',
    image: '/images/img_8566-mejorado-nr-2.webp',
  },
  {
    title: 'Magflow Studio',
    category: 'Creative Infrastructure & Talent Development Platform',
    summary:
      'Magflow Studio operates as creative infrastructure for talent incubation and production. Broccoli Studios designed the system connecting creative output, services, and long-term growth.',
    scope: [
      'Platform and business model architecture',
      'Artist and client journey design',
      'Systemized studio operations',
      'Monetization and growth strategy',
    ],
    outcome: 'repeatable operations, diversified revenue, scalable creative platform',
    image: '/images/wua04032-enhanced-nr.webp',
  },
];

export function Work() {
  const t = useTranslations('work');

  return (
    <section id="work" className="bg-secondary px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{t('title')}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{t('description')}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-background group hover:border-primary/50 overflow-hidden rounded-lg border transition-colors"
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
                <p className="text-muted-foreground border-t pt-3 text-xs">
                  <span className="text-foreground font-medium">{t('outcome')}:</span>{' '}
                  {study.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
