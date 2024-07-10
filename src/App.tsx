import { useLocation } from "react-router-dom";
import ApprochCard from "./components/ApprochCard";
import ClientReview from "./components/ClientReview";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import { useEffect } from "react";


const ScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
};

function App() {
  return (
    <>
      <Navbar  />

      <ScrollToSection  />

      <Hero />
      <Projects />
      <ClientReview />
      <ExperienceCard />
      <ApprochCard />
      <Footer />
    </>
  );
}

export default App;
