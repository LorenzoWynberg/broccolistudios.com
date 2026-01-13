import { Server, Database, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Modular Architecture",
    description: "Flexible, component-based systems that adapt to your needs",
  },
  {
    icon: Shield,
    title: "Secure Cloud Infrastructure",
    description: "Enterprise-grade security and reliability built-in",
  },
  {
    icon: Database,
    title: "Data-First Design",
    description: "Every decision informed by structured data capture",
  },
  {
    icon: Server,
    title: "Compliance & Scalability",
    description: "Built to grow with your business and regulatory needs",
  },
];

export function Platforms() {
  return (
    <section id="platforms" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Platforms & Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Broccoli Studios builds API-first, modular platforms designed for
            scale, integration, and longevity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="bg-background p-6 rounded-lg">
              <feature.icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
