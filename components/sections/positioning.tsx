export function Positioning() {
  return (
    <section id="positioning" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          We design systems.
        </h2>

        <div className="space-y-4 text-lg text-muted-foreground mb-12">
          <p>
            Broccoli Studios is a technology and strategy company specialized in
            ecosystem design, platform development, and data-driven growth.
          </p>
          <p className="font-medium text-foreground">
            We don&apos;t execute campaigns.
            <br />
            We don&apos;t sell isolated deliverables.
            <br />
            We design systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div className="bg-background p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Proof of Scale</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Proprietary platforms in production</li>
              <li>Government-grade digital systems</li>
              <li>High-volume experience ecosystems</li>
              <li>Multi-industry application</li>
              <li>Long-term operating partnerships</li>
            </ul>
          </div>

          <div className="bg-background p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Ecosystem Alignment</h3>
            <p className="text-muted-foreground mb-4">
              <span className="font-medium text-foreground">
                Designed by Broccoli. Executed by XR Studio.
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Broccoli designs the system, the technology, and the growth model.
              XR Studio executes the experience with precision and operational
              control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
