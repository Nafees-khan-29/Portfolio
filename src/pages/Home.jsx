import Navbar from "../components/Navbar";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Project";
import Skills from "../sections/Skill";


export default function Home() {
  return (
    <>
      
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
    </>
  );
}