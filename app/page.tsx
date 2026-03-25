import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
