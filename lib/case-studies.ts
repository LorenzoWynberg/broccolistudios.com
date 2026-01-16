export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  scope: string[];
  outcome: string;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'electric-animals',
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
    outcome: 'Scalable ecosystem, data-driven decisions, repeatable growth model',
    image: '/images/jacobcollier_21-09-25-04416.webp',
  },
  {
    slug: 'pura-tinta-fest',
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
    outcome: 'Scalable convention model, operational clarity, improved stakeholder experience',
    image: '/images/_a1a6014.webp',
  },
  {
    slug: 'blockchain-jungle',
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
    outcome: 'Structured conference ecosystem, repeatable annual model',
    image: '/images/bcjungle-7.webp',
  },
  {
    slug: 'magflow',
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
    outcome: 'Unified audience system, scalable cultural platform',
    image: '/images/img_3697.webp',
  },
  {
    slug: 'sweetspot',
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
    outcome: 'Scalable esports platform, repeatable competition systems',
    image: '/images/ss_img_0083.webp',
  },
  {
    slug: 'bandida-tattoo-studio',
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
    outcome: 'Structured operations, scalable brand, consistent customer experience',
    image: '/images/img_8566-mejorado-nr-2.webp',
  },
  {
    slug: 'magflow-studio',
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
    outcome: 'Repeatable operations, diversified revenue, scalable creative platform',
    image: '/images/wua04032-enhanced-nr.webp',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
