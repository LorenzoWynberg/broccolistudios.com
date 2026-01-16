'use client';

import { Button } from '@/components/ui/button';
import { AnimatedGrid } from '@/components/animated-grid';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 md:px-12 lg:px-24">
      <AnimatedGrid />
      <div className="max-w-5xl">
        <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Broccoli Studios
          <span className="text-muted-foreground mt-2 block">
            Technology, Data & Ecosystem Design
          </span>
        </h1>

        <p className="text-muted-foreground mb-8 max-w-3xl text-lg md:text-xl">
          We design and operate digital and physical ecosystems that transform experiences into
          scalable systems and sustainable growth.
        </p>

        <div className="mb-16 flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="group"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Start a Strategy Call
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Our Work
          </Button>
        </div>

        <div className="border-t pt-8">
          <p className="text-muted-foreground mb-4 text-sm tracking-wider uppercase">
            Core Capabilities
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Ecosystem & Business Architecture',
              'Technology & Platform Development',
              'Data, AI & Intelligence',
              'Growth & Revenue Systems',
              'Experience Strategy',
            ].map((capability) => (
              <span
                key={capability}
                className="bg-secondary text-secondary-foreground rounded-full px-3 py-1.5 text-sm"
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          document.getElementById('positioning')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="text-muted-foreground h-8 w-8" />
      </button>
    </section>
  );
}
