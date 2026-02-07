import { Footer, Navbar } from "@/layout";
import {
  About,
  Contact,
  Education,
  Engineering,
  Hero,
  Indicators,
  Projects,
  Skills,
} from "@/sections";
import "@/App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <Indicators />
        <About />
        <Skills />
        <Projects />
        <Engineering />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
