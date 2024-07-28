import React, { useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import createGlobe from "cobe";

export const InfiniteMovingCards = ({
  items,
  direction = "top",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    title: string;
  }[];
  direction?: "top" | "bottom";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "top") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)] h-fit",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex flex-col min-h-max shrink-0 gap-4 py-4 h-max flex-nowrap",
          start && (direction === "top" ? "animate-up" : "animate-down"),
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <li
            className="rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 bg-gradient-to-r from-slate-400 via-slate-100 to-slate-400"
            key={item.name}
          >
            <blockquote>
              <span className="relative z-20 text-[1vmax] whitespace-nowrap leading-[1.6] text-gray-900 font-semibold text-center">
                {item.title}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const GlobeCard = () => {
  return (
    <div className="h-60 md:h-60 w-full flex flex-col items-center justify-center relative bg-transparent md:mt-10">
      <Globe className="absolute -right-0 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    </>
  );
};

const AboutGrid = () => {
  return (
    <main className="mx-[3vmax]" id="about">
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col items-center gap-[1.6vmax] border px-[2vmin] py-[1.5vmin] rounded-lg bg-gradient-to-b from-transparent via-black/60 to-black">
          <img src="/myself.png" alt="me" className="max-w-[30vmax] md:max-w-[40vmax]" />
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
