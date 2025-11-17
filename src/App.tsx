import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections";
import "@/App.css";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <main className="w-full sm:w-[90%] mx-auto p-3">
          <Hero />
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
