const steps = [
  {
    number: '01',
    title: 'Ecosystem Definition',
    description:
      'We map the full landscape of your business, identifying stakeholders, touchpoints, and opportunities for systemic value creation.',
  },
  {
    number: '02',
    title: 'System & Data Architecture',
    description:
      'We design the technical and data foundation that will power your ecosystem, ensuring every component connects and communicates.',
  },
  {
    number: '03',
    title: 'Platform Development',
    description:
      'We build the platforms and tools that bring your ecosystem to life, with a focus on scalability and long-term maintainability.',
  },
  {
    number: '04',
    title: 'Growth System Integration',
    description:
      'We connect growth loops, monetization strategies, and customer lifecycle systems to drive sustainable expansion.',
  },
  {
    number: '05',
    title: 'Continuous Optimization',
    description:
      'We monitor, analyze, and refine your ecosystem based on real data, ensuring it evolves with your business needs.',
  },
];

const outcomes = ['Control', 'Scalability', 'Visibility', 'Measurable results'];

export function Method() {
  return (
    <section id="method" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Method</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            A system-driven approach to building scalable ecosystems
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="text-primary/20 mb-2 text-4xl font-bold">{step.number}</div>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary rounded-lg p-8 text-center">
          <p className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
            What clients gain
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {outcomes.map((outcome) => (
              <span key={outcome} className="bg-background rounded-full px-4 py-2 font-medium">
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
