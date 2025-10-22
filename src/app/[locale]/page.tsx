import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Values } from "@/components/sections/Values";
import { Testimonials } from "@/components/sections/Testimonials";
import { Trial } from "@/components/sections/Trial";
import { Solutions } from "@/components/sections/Solutions";
import { FAQ } from "@/components/sections/FAQ";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <Values />
      <Testimonials />
      <Trial />
      <Solutions />
      <FAQ />
    </main>
  );
};

export default Home;
