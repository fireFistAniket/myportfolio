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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const offsetTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });

        // Framer Motion bounce effect
        const bounceEffect = async () => {
          await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay to sync with smooth scroll
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          await new Promise((resolve) => setTimeout(resolve, 100));
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        };

        bounceEffect();
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <Navbar />

      <ScrollToSection />

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
