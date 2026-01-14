export function Positioning() {
  return (
    <section id="positioning" className="bg-secondary px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-3xl font-bold md:text-4xl">We design systems.</h2>

        <div className="text-muted-foreground mb-12 space-y-4 text-lg">
          <p>
            Broccoli Studios is a technology and strategy company specialized in ecosystem design,
            platform development, and data-driven growth.
          </p>
          <p className="text-foreground font-medium">
            We don&apos;t execute campaigns.
            <br />
            We don&apos;t sell isolated deliverables.
            <br />
            We design systems.
          </p>
        </div>

        <div className="grid gap-8 text-left md:grid-cols-2">
          <div className="bg-background rounded-lg p-6">
            <h3 className="mb-4 text-lg font-semibold">Proof of Scale</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>Proprietary platforms in production</li>
              <li>Government-grade digital systems</li>
              <li>High-volume experience ecosystems</li>
              <li>Multi-industry application</li>
              <li>Long-term operating partnerships</li>
            </ul>
          </div>

          <div className="bg-background rounded-lg p-6">
            <h3 className="mb-4 text-lg font-semibold">Ecosystem Alignment</h3>
            <p className="text-muted-foreground mb-4">
              <span className="text-foreground font-medium">
                Designed by Broccoli. Executed by XR Studio.
              </span>
            </p>
            <p className="text-muted-foreground text-sm">
              Broccoli designs the system, the technology, and the growth model. XR Studio executes
              the experience with precision and operational control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
