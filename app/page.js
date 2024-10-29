import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import History from "./_components/History";
import About from "./_components/About";
import Work from "./_components/Work";
import AnimatedCounter from "./_components/AnimatedCounter";
import Services from "./_components/Services";

export default function Home() {
  return (
    <div>
      <Hero/>
      <History/>
      <About/>
      <Work/>
      <AnimatedCounter/>
      <Services/>
    </div>
  );
}
