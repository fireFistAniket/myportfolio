import { GlobeCard } from "./ui/aboutgrid/GlobeCard";
import { InfiniteMovingCards } from "./ui/aboutgrid/InfiniteMovingCards";

const AboutGrid = () => {
  return (
    <main className="mx-4 sm:mx-[3vmax]" id="about">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col items-center gap-4 md:gap-[1.6vmax] border px-4 md:px-[2vmin] py-4 md:py-[1.5vmin] rounded-lg bg-gradient-to-b from-transparent via-black/60 to-black">
          <img
            src="/myself.png"
            alt="me"
            className="max-w-[60vw] sm:max-w-[40vw] md:max-w-[25vmax] lg:max-w-[20vmax]"
          />
          <p className="text-sm sm:text-base md:text-[1.6vmax] font-medium text-neutral-100 text-center lg:leading-[2vmax]">
            Senior Full-Stack Engineer & Technical Lead based in Kolkata, India. I architect and ship scalable MERN stack systems, lead engineering teams, design low-latency RESTful APIs, and build cross-platform products for web and mobile.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="max-h-[28vh] sm:max-h-[30vh] md:max-h-[40vh] overflow-hidden flex items-center gap-[2vmin] border px-[2vmin] py-[1.5vmin] rounded-lg">
            <h2 className="text-sm sm:text-base md:text-[1.6vmax] font-medium text-neutral-100 text-center whitespace-nowrap">
              My tech expertise
            </h2>
            <div className="relative">
              <InfiniteMovingCards
                items={[
                  { name: "JavaScript", title: "JavaScript" },
                  { name: "TypeScript", title: "TypeScript" },
                  { name: "React", title: "React" },
                  { name: "Next.js", title: "Next.js" },
                  { name: "Node.js", title: "Node.js" },
                  { name: "Express", title: "Express" },
                  { name: "MongoDB", title: "MongoDB" },
                  { name: "React Native", title: "React Native" },
                  { name: "Redux", title: "Redux" },
                  { name: "Tailwind", title: "Tailwind" },
                  { name: "Firebase", title: "Firebase" },
                  { name: "GCP", title: "GCP" },
                ]}
                direction="top"
                speed="slow"
              />
            </div>
            <div className="relative">
              <InfiniteMovingCards
                items={[
                  { name: "HTML5", title: "HTML5" },
                  { name: "CSS3", title: "CSS3" },
                  { name: "Java", title: "Java" },
                  { name: "RESTful APIs", title: "RESTful APIs" },
                  { name: "Git", title: "Git" },
                  { name: "GitHub", title: "GitHub" },
                  { name: "VPS Hosting", title: "VPS Hosting" },
                  { name: "CI/CD", title: "CI/CD" },
                  { name: "Postman", title: "Postman" },
                  { name: "Webpack", title: "Webpack" },
                  { name: "Razorpay", title: "Razorpay" },
                  { name: "MERN Stack", title: "MERN Stack" },
                ]}
                direction="bottom"
                speed="slow"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-center gap-[2vmin] border px-[2vmin] py-[1.5vmin] rounded-lg">
            <h2 className="text-sm sm:text-base md:text-[1.6vmax] font-medium text-neutral-100 text-center">
              I am also very flexible about time region.
            </h2>
            <GlobeCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutGrid;
