import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="text-[var(--primary)] heading">hello world</div>
      <Footer />
    </>
  );
}

export default App;
