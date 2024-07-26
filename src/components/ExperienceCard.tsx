import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { cn } from "../utils/cn";
import { HeadingSlogan } from "./HeadingSlogan";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl md:col-span-2 md:row-span-1 p-[1px] overflow-hidden ",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 opacity-[0.8] bg-[radial-gradient(#CBACF9_40%,transparent_60%)]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default function ExperienceCard() {
  return (
    <main
      className="flex flex-col gap-[4vmin] my-[2vmax] mx-[3vmax]"
      id="experience"
    >
      <div className="text-4xl md:text-7xl font-bold text-center text-primary">
        <HeadingSlogan words="My" />
        <HeadingSlogan words=" work experience" className="text-secondary" />
      </div>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "var(--background)",

            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/website-development.png"
            alt="website development"
            width={650}
            height={400}
            className="w-[10vmax] "
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-[2vmax] capitalize font-bold headingStyle">
              website developer
            </h1>
            <p className="text-neutral-500 text-[2.2vmax] sm:text-[1.15vmax] line-clamp-4  text-center font-medium">
              As a dedicated Website Developer specializing in the MERN stack, I
              bring a robust blend of technical expertise and creative
              problem-solving to every project.
            </p>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "var(--background)",

            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/webapps-development.png"
            alt="webapps development"
            width={650}
            height={400}
            className="w-[10vmax]"
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-[2vmax] capitalize font-bold headingStyle">
              web apps developer
            </h1>
            <p className="text-neutral-500 text-[2.2vmax] sm:text-[1.15vmax] line-clamp-4 text-center font-medium">
              As a dedicated Web Apps Developer specializing in the MERN stack,
              I am passionate about creating powerful and scalable web
              applications.
            </p>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "var(--background)",

            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/mobile-apps-development.png"
            alt="mobile apps development"
            width={650}
            height={400}
            className="w-[10vmax]"
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-[2vmax] capitalize font-bold headingStyle">
              mobile apps developer
            </h1>
            <p className="text-neutral-500 text-[2.2vmax] sm:text-[1.15vmax] line-clamp-4 text-center font-medium">
              As a skilled Mobile Apps Developer with expertise in creating
              cross-platform applications, I am dedicated to delivering
              high-quality, user-centric mobile experiences. Leveraging the
              power of technologies such as React Native, I design and develop
              mobile applications that are both visually appealing and
              functionally robust.
            </p>
          </div>
        </Button>
        <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "var(--background)",

            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex border-neutral-200 items-center justify-center p-4"
        >
          <img
            src="/desktop-apps-development.png"
            alt="mobile apps development"
            width={650}
            height={400}
            className="w-[10vmax]"
          />
          <div className="flex flex-col gap-[2.5vmin] px-4">
            <h1 className="text-[2vmax] capitalize font-bold headingStyle">
              desktop apps developer
            </h1>
            <p className="text-neutral-500 text-[2.2vmax] sm:text-[1.15vmax] line-clamp-4 text-center font-medium">
              As a proficient Desktop Apps Developer, I specialize in creating
              powerful, user-friendly applications for a variety of operating
              systems. Leveraging my expertise in technologies like Electron.js
              and other modern frameworks, I design and build desktop
              applications that are both functional and aesthetically pleasing.
            </p>
          </div>
        </Button>
      </div>
    </main>
  );
}
