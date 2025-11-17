import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import "@/App.css";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <h1 className="mb-2">Welcome to My Portfolio</h1>
        <Button>Get Started</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
