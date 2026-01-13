export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Broccoli Studios
        </h2>

        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground mb-8">
            Broccoli Studios is a technology and ecosystem design company focused
            on building systems that scale beyond individual projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3 text-lg">What We Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 text-primary font-bold">1.</span>
                    We design the system
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary font-bold">2.</span>
                    We build the platform
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-primary font-bold">3.</span>
                    We define how it grows
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 border rounded-lg">
                <h3 className="font-semibold mb-3 text-lg">Our Partner</h3>
                <p className="text-muted-foreground">
                  XR Studio executes the experience with precision and operational
                  control, bringing our designs to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
