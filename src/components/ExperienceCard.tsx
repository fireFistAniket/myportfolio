import { HeadingSlogan } from "./HeadingSlogan";
import Button from "./ui/experiencecard/Button";

export default function ExperienceCard() {
  return (
    <main
      className="flex flex-col gap-[4vmin] my-[2vmax] mx-4 sm:mx-[3vmax]"
      id="experience"
    >
      <div className="text-4xl md:text-7xl font-bold text-center text-primary">
        <HeadingSlogan words="My" />
        <HeadingSlogan words=" work experience" className="text-secondary" />
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-10">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          containerClassName="w-full"
          style={{
            background: "var(--background)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/website-development.png"
            alt="Reboot AI"
            width={650}
            height={400}
            className="w-[10vmax] "
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-lg sm:text-xl md:text-[2vmax] capitalize font-bold headingStyle">
              Reboot AI
            </h1>
            <p className="text-secondary text-xs sm:text-sm md:text-[1.1vmax] font-medium">
              Full-Stack Developer & Technical Head · Aug 2024 – Present
            </p>
            <p className="text-neutral-500 text-sm md:text-[1.15vmax] line-clamp-4 text-center font-medium">
              Spearheading technical roadmaps, core system architectures, and legacy infrastructure modernizations. Establishing clean-code guidelines, automated testing, and engineering team leadership.
            </p>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          containerClassName="w-full"
          style={{
            background: "var(--background)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/webapps-development.png"
            alt="Yukin AI"
            width={650}
            height={400}
            className="w-[10vmax]"
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-lg sm:text-xl md:text-[2vmax] capitalize font-bold headingStyle">
              Yukin AI
            </h1>
            <p className="text-secondary text-xs sm:text-sm md:text-[1.1vmax] font-medium">
              Full-Stack Developer (Freelance) · Sep 2024 – Present
            </p>
            <p className="text-neutral-500 text-sm md:text-[1.15vmax] line-clamp-4 text-center font-medium">
              Designing and documenting low-latency RESTful APIs and optimizing MongoDB database queries. Architecting and deploying responsive full-stack features with pixel-perfect UI.
            </p>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          containerClassName="w-full md:col-span-2"
          style={{
            background: "var(--background)",
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/mobile-apps-development.png"
            alt="Rabin's Photography"
            width={650}
            height={400}
            className="w-[10vmax]"
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-lg sm:text-xl md:text-[2vmax] capitalize font-bold headingStyle">
              Rabin&apos;s Photography
            </h1>
            <p className="text-secondary text-xs sm:text-sm md:text-[1.1vmax] font-medium">
              Full Stack Web Developer · Jun 2023 – Jul 2024
            </p>
            <p className="text-neutral-500 text-sm md:text-[1.15vmax] line-clamp-4 text-center font-medium">
              Engineered and maintained secure, high-performance web applications. Developed and optimized complex RESTful API layers to establish flawless data synchronization.
            </p>
          </div>
        </Button>
      </div>
    </main>
  );
}
