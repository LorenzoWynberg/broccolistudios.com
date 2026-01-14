export function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">About Broccoli Studios</h2>

        <div className="mb-12 text-center">
          <p className="text-muted-foreground mb-8 text-lg">
            Broccoli Studios is a technology and ecosystem design company focused on building
            systems that scale beyond individual projects.
          </p>

          <div className="grid gap-8 text-left md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="mb-3 text-lg font-semibold">What We Do</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">1.</span>
                    We design the system
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">2.</span>
                    We build the platform
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2 font-bold">3.</span>
                    We define how it grows
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-lg border p-6">
                <h3 className="mb-3 text-lg font-semibold">Our Partner</h3>
                <p className="text-muted-foreground">
                  XR Studio executes the experience with precision and operational control, bringing
                  our designs to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
