import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Build infrastructure, not one-off solutions.
        </h2>
        <p className="text-lg opacity-80 mb-8">
          Start a strategy conversation with Broccoli Studios.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="group"
        >
          Contact Broccoli Studios
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
}
