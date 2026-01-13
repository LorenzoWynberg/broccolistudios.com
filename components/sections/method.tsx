const steps = [
  {
    number: "01",
    title: "Ecosystem Definition",
    description:
      "We map the full landscape of your business, identifying stakeholders, touchpoints, and opportunities for systemic value creation.",
  },
  {
    number: "02",
    title: "System & Data Architecture",
    description:
      "We design the technical and data foundation that will power your ecosystem, ensuring every component connects and communicates.",
  },
  {
    number: "03",
    title: "Platform Development",
    description:
      "We build the platforms and tools that bring your ecosystem to life, with a focus on scalability and long-term maintainability.",
  },
  {
    number: "04",
    title: "Growth System Integration",
    description:
      "We connect growth loops, monetization strategies, and customer lifecycle systems to drive sustainable expansion.",
  },
  {
    number: "05",
    title: "Continuous Optimization",
    description:
      "We monitor, analyze, and refine your ecosystem based on real data, ensuring it evolves with your business needs.",
  },
];

const outcomes = ["Control", "Scalability", "Visibility", "Measurable results"];

export function Method() {
  return (
    <section id="method" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Method</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A system-driven approach to building scalable ecosystems
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
              )}
              <div className="text-4xl font-bold text-primary/20 mb-2">
                {step.number}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary p-8 rounded-lg text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            What clients gain
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {outcomes.map((outcome) => (
              <span
                key={outcome}
                className="px-4 py-2 bg-background rounded-full font-medium"
              >
                {outcome}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
