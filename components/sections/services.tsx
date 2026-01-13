import {
  Building2,
  Code2,
  BarChart3,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Ecosystem & Business Architecture",
    description: "We design the structural foundation before anything is built.",
    items: [
      "Digital and physical ecosystem design",
      "Business model architecture",
      "Customer and user journey mapping",
      "Data architecture design",
      "Go-to-market and scaling strategy",
    ],
    outcome: "clear systems, reduced risk, scalable foundations",
  },
  {
    icon: Code2,
    title: "Technology & Platform Development",
    description: "We build platforms that function as long-term infrastructure.",
    items: [
      "Proprietary platforms",
      "API integrations (ticketing, fintech, CRM, biometrics)",
      "Dashboards and operational control systems",
      "Automation and cloud architecture",
    ],
    outcome: "operational control, scalability, independence",
  },
  {
    icon: BarChart3,
    title: "Data, AI & Intelligence",
    description: "We turn data into decisions.",
    items: [
      "Data capture frameworks",
      "Predictive analytics",
      "Advanced segmentation",
      "Revenue intelligence",
      "Decision-support systems",
    ],
    outcome: "smarter decisions, optimized performance, lower uncertainty",
  },
  {
    icon: TrendingUp,
    title: "Growth & Revenue Systems",
    description: "We design systems that generate recurring growth.",
    items: [
      "Growth loops",
      "Funnel architecture and automation",
      "CRM and lifecycle systems",
      "Monetization strategies",
    ],
    outcome: "sustainable growth, repeatable revenue",
  },
  {
    icon: Sparkles,
    title: "Experience Strategy",
    description: "We design experiences as systems, not events.",
    items: [
      "Experience architecture",
      "Conceptual design for physical and digital experiences",
      "Execution blueprints for production teams",
      "Technology–experience alignment",
    ],
    outcome: "experiences that scale and generate long-term value",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive capabilities to design, build, and scale your ecosystem
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 border rounded-lg hover:border-primary/50 transition-colors"
            >
              <service.icon className="h-8 w-8 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground mb-4">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm pt-4 border-t">
                <span className="font-medium">Outcome:</span>{" "}
                <span className="text-muted-foreground">{service.outcome}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
