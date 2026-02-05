import { Navbar } from "@/layout";
import { About, Contact, Experience, Hero, Projects } from "@/sections";
import "@/App.css";

function App() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
