import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import History from "./components/History";
import About from "./components/About";
import Work from "./components/Work";
import AnimatedCounter from "./components/AnimatedCounter";
import Services from "./components/Services";

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
