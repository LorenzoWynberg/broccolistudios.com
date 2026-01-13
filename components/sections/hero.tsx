"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Broccoli Studios
          <span className="block text-muted-foreground mt-2">
            Technology, Data & Ecosystem Design
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-8">
          We design and operate digital and physical ecosystems that transform
          experiences into scalable systems and sustainable growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="group">
            Start a Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Explore Our Work
          </Button>
        </div>

        <div className="border-t pt-8">
          <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">
            Core Capabilities
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Ecosystem & Business Architecture",
              "Technology & Platform Development",
              "Data, AI & Intelligence",
              "Growth & Revenue Systems",
              "Experience Strategy",
            ].map((capability) => (
              <span
                key={capability}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          document
            .getElementById("positioning")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
}
