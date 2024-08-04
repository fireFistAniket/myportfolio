import { GlobeCard } from "./ui/aboutgrid/GlobeCard";
import { InfiniteMovingCards } from "./ui/aboutgrid/InfiniteMovingCards";

const AboutGrid = () => {
  return (
    <main className="mx-[3vmax]" id="about">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col items-center gap-[1.6vmax] border px-[2vmin] py-[1.5vmin] rounded-lg bg-gradient-to-b from-transparent via-black/60 to-black">
          <img
            src="/myself.png"
            alt="me"
            className="max-w-[30vmax] md:max-w-[40vmax]"
          />
          <h1 className="text-[1.6vmax] font-medium text-neutral-100 text-center">
            It&apos;s me. I am a professional developer. My expertise are HTML,
            CSS, JavaScript, React e.t.c. I can develop cross platfrom Saas
            application for any kind of businesses.
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="max-h-[20vh] md:max-h-[40vh] overflow-hidden flex items-center gap-[2vmin] border px-[2vmin] py-[1.5vmin] rounded-lg">
            <h1 className="text-[1.6vmax] font-medium text-neutral-100 text-center whitespace-nowrap">
              My tech expertise
            </h1>
            <div className="relative">
              <InfiniteMovingCards
                items={[
                  { name: "HTML", title: "HTML" },
                  { name: "CSS", title: "CSS" },
                  { name: "JavaScript", title: "JavaScript" },
                  { name: "React", title: "React" },
                  { name: "Next", title: "Next" },
                  { name: "Express", title: "Express" },
                  { name: "Three", title: "Three" },
                  { name: "Tailwind", title: "Tailwind" },
                  { name: "Github", title: "Github" },
                  { name: "MongoDb", title: "MongoDb" },
                  { name: "Firebase", title: "Firebase" },
                  { name: "React-Native", title: "React-Native" },
                ]}
                direction="top"
                speed="slow"
              />
            </div>
            <div className="relative">
              <InfiniteMovingCards
                items={[
                  { name: "HTML", title: "HTML" },
                  { name: "CSS", title: "CSS" },
                  { name: "JavaScript", title: "JavaScript" },
                  { name: "React", title: "React" },
                  { name: "Next", title: "Next" },
                  { name: "Express", title: "Express" },
                  { name: "Three", title: "Three" },
                  { name: "Tailwind", title: "Tailwind" },
                  { name: "Github", title: "Github" },
                  { name: "MongoDb", title: "MongoDb" },
                  { name: "Firebase", title: "Firebase" },
                  { name: "React-Native", title: "React-Native" },
                ]}
                direction="bottom"
                speed="slow"
              />
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col items-center gap-[2vmin] border px-[2vmin] py-[1.5vmin] rounded-lg">
            <h1 className="text-[1.6vmax] font-medium text-neutral-100 text-center">
              I am also very flexible about time region.
            </h1>
            <GlobeCard />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutGrid;
