import About from "@/components/About";
import Anniversary from "@/components/Anniversary";
import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <Marquee />
        <Collection />
        <About />
        <Anniversary />
      </main>
      <Footer />
    </>
  );
}
