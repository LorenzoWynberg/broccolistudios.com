import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-primary text-primary-foreground px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
          Build infrastructure, not one-off solutions.
        </h2>
        <p className="mb-8 text-lg opacity-80">
          Start a strategy conversation with Broccoli Studios.
        </p>
        <Button size="lg" variant="secondary" className="group">
          Contact Broccoli Studios
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
