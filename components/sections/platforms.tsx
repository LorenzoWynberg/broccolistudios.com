import { Server, Database, Shield, Layers } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Modular Architecture',
    description: 'Flexible, component-based systems that adapt to your needs',
  },
  {
    icon: Shield,
    title: 'Secure Cloud Infrastructure',
    description: 'Enterprise-grade security and reliability built-in',
  },
  {
    icon: Database,
    title: 'Data-First Design',
    description: 'Every decision informed by structured data capture',
  },
  {
    icon: Server,
    title: 'Compliance & Scalability',
    description: 'Built to grow with your business and regulatory needs',
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="bg-secondary px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Platforms & Technology</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Broccoli Studios builds API-first, modular platforms designed for scale, integration,
            and longevity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background rounded-lg p-6">
              <feature.icon className="text-primary mb-4 h-8 w-8" />
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
