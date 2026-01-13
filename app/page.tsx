import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { Positioning } from "@/components/sections/positioning";
import { Services } from "@/components/sections/services";
import { Platforms } from "@/components/sections/platforms";
import { Method } from "@/components/sections/method";
import { Work } from "@/components/sections/work";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <Hero />
        <Positioning />
        <Services />
        <Platforms />
        <Method />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
