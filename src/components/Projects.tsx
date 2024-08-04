import { useEffect, useState } from "react";

import { HeadingSlogan } from "./HeadingSlogan";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";
import { JSX } from "react/jsx-runtime";
import PinContainer from "./ui/projects/PinContainer";
import AnimatedTooltip from "./ui/projects/AnimatedTooltip";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "MyProjects"));
      const dataList = querySnapshot.docs.map((doc) => doc.data());
      setProjects(dataList);
    };

    fetchData();
  }, []);

  function techIcons(techs: string[]) {
    let returnable: { id: number; name: string; icon: JSX.Element }[] = [];
    techs.forEach((elm, index) => {
      switch (elm) {
        case "vite":
          returnable.push({
            id: index,
            name: "Vite",
            icon: (
              <img
                src="/vite-icon.svg"
                alt="vite"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "tailwind":
          returnable.push({
            id: index,
            name: "Tailwind",
            icon: (
              <img
                src="/tailwind-icon.svg"
                alt="tailwind"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "framer-motion":
          returnable.push({
            id: index,
            name: "Framer Motion",
            icon: (
              <img
                src="/framer-icon.svg"
                alt="framer-motion"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "react":
          returnable.push({
            id: index,
            name: "React",
            icon: (
              <img
                src="/react-icon.svg"
                alt="react"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "github":
          returnable.push({
            id: index,
            name: "Github",
            icon: (
              <img
                src="/github-icon.svg"
                alt="github"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "express":
          returnable.push({
            id: index,
            name: "Express",
            icon: (
              <img
                src="/express-js.svg"
                alt="express"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "vercel":
          returnable.push({
            id: index,
            name: "Vercel",
            icon: (
              <img
                src="/vercel.svg"
                alt="vercel"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "threejs":
          returnable.push({
            id: index,
            name: "Three js",
            icon: (
              <img
                src="/three-js.svg"
                alt="threejs"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "typescript":
          returnable.push({
            id: index,
            name: "Typescript",
            icon: (
              <img
                src="/typescript.svg"
                alt="typescript"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        case "next":
          returnable.push({
            id: index,
            name: "Nextjs",
            icon: (
              <img
                src="/nextjs.svg"
                alt="nextjs"
                className="max-w-8 sm:max-w-12 max-h-8 sm:max-h-12 border border-neutral-800 rounded-full"
                style={{
                  background:
                    "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                }}
              />
            ),
          });
          break;
        default:
          break;
      }
    });
    return returnable;
  }

  return (
    <main id="project" className="my-12">
      <div className="text-4xl md:text-7xl font-bold text-center text-primary">
        <HeadingSlogan words="Some of my " />
        <HeadingSlogan words=" recent projects" className="text-secondary" />
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.length > 0 &&
          projects.map((project, index) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center xl:w-[25vmax] sm:w-96 w-[80vw] hover:z-[1000] m-4"
              key={index}
            >
              <PinContainer title="Visit Site" href={project.uri}>
                <div className="flex flex-col p-2 tracking-tight text-slate-100/50 w-[40vmax] md:w-[45vmax] lg:w-[35vmax] xl:w-[25vmax] gap-2">
                  <div className="bg-[url('/project-cover.png')] bg-cover sm:p-8 pb-0 flex items-end mb-4 h-[15vmax] md:h-[18vmax] xl:h-[12vmax] overflow-hidden">
                    <img
                      src={project.cover}
                      alt="project_cover"
                      className="w-full"
                    />
                  </div>
                  <h3 className="max-w-xs headingStyle mt-4 !pb-2 !m-0 font-bold text-xl sm:text-2xl text-secondary">
                    {project.title}
                  </h3>
                  <div className="text-sm sm:text-lg !m-0 !p-0 font-normal">
                    <span className="text-slate-300 line-clamp-4">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-row items-center justify-center">
                      <AnimatedTooltip items={techIcons(project.tech)} />
                    </div>
                    <div className="">
                      <p className="text-secondary text-[4vmin] sm:text-[2.5vmin]">
                        Check Live --&gt;
                      </p>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>
    </main>
  );
}
