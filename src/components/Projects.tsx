import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "../utils/cn";
import { HeadingSlogan } from "./HeadingSlogan";
import { Link } from "react-router-dom";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <Link
      className={cn(
        "relative group/pin z-50  cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      to={href || "/"}
      target='_blank'
      referrerPolicy='no-referrer'
    >
      <div
        style={{
          perspective: "1000px",
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
        className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'
      >
        <div
          style={{
            transform: transform,
            background:
              "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
          }}
          className='absolute left-1/2 p-4 top-1/2 flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden'
        >
          <div className={cn(" relative z-50 ", className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </Link>
  );
};

export const PinPerspective = ({
  title,
  href,
}: {
  title?: string;
  href?: string;
}) => {
  return (
    <motion.div className='pointer-events-none  w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 z-[60] transition duration-500'>
      <div className=' w-full h-full -mt-7 flex-none  inset-0'>
        <div className='absolute top-0 inset-x-0  flex justify-center'>
          <a
            href={href}
            target={"_blank"}
            className='relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 '
          >
            <span className='relative z-20 text-white text-xs font-bold inline-block py-0.5'>
              {title}
            </span>

            <span className='absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40'></span>
          </a>
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className='absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2'
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className='absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className='absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,

                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className='absolute left-1/2 top-1/2  h-[11.25rem] w-[11.25rem] rounded-[50%] bg-sky-500/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]'
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className='absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40 blur-[2px]' />
          <motion.div className='absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-cyan-500 translate-y-[14px] w-px h-20 group-hover/pin:h-40  ' />
          <motion.div className='absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-cyan-600 translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]' />
          <motion.div className='absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-cyan-300 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40 ' />
        </>
      </div>
    </motion.div>
  );
};

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    icon: React.ReactNode;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items.map((item) => (
        <div
          className='-mr-4 relative group'
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode='popLayout'>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className='absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2'
              >
                <div className='absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px ' />
                <div className='absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px ' />
                <div className='font-bold text-white relative z-30 text-base'>
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <span
            onMouseMove={handleMouseMove}
            className='rounded-full group-hover:scale-105 group-hover:z-30 relative transition duration-500'
          >
            {item.icon}
          </span>
        </div>
      ))}
    </>
  );
};

export default function Projects() {
  return (
    <main id="project">
      <div className='text-4xl md:text-7xl font-bold text-center text-primary'>
        <HeadingSlogan words='Some of my ' />
        <HeadingSlogan words=' recent projects' className='text-secondary' />
      </div>
      <div className='h-[40rem] w-full flex items-center justify-center '>
        <PinContainer
          title='Visit Site'
          href='https://firefistaniket.github.io/animexhub/'
        >
          <div className='flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[25vmax] gap-2'>
            <div className="bg-[url('/project-cover.png')] bg-cover p-8 pb-0 flex items-end mb-4">
              <img
                src='/myportfolio/animexhub-page-screen.png'
                alt='project_cover'
                className='w-full'
              />
            </div>
            <h3 className='max-w-xs headingStyle mt-4 !pb-2 !m-0 font-bold text-2xl text-slate-100'>
              AnimeXhuB
            </h3>
            <div className='text-lg !m-0 !p-0 font-normal'>
              <span className='text-slate-300 '>
                AnimeXhuB welcomes visitors with stunning anime imagery,
                offering a captivating glimpse into the world of anime.
                Featuring vibrant colors and dynamic designs, it sets the stage
                for an immersive anime experience.
              </span>
            </div>
            <div className='flex items-center justify-between mt-4'>
              <div className='flex flex-row items-center justify-center'>
                <AnimatedTooltip
                  items={[
                    {
                      id: 1,
                      name: "Vite",
                      icon: (
                        <img
                          src='/myportfolio/vite-icon.svg'
                          alt='vite'
                          className='max-w-12 max-h-12 border border-neutral-800 rounded-full'
                          style={{
                            background:
                              "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                          }}
                        />
                      ),
                    },
                    {
                      id: 2,
                      name: "Tailwind",
                      icon: (
                        <img
                          src='/myportfolio/tailwind-icon.svg'
                          alt='tailwind'
                          className='max-w-12 max-h-12 border border-neutral-800 rounded-full'
                          style={{
                            background:
                              "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                          }}
                        />
                      ),
                    },
                    {
                      id: 3,
                      name: "Framer Motion",
                      icon: (
                        <img
                          src='/myportfolio/framer-icon.svg'
                          alt='framer-motion'
                          className='max-w-12 max-h-12 border border-neutral-800 rounded-full'
                          style={{
                            background:
                              "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                          }}
                        />
                      ),
                    },
                    {
                      id: 4,
                      name: "React",
                      icon: (
                        <img
                          src='/myportfolio/react-icon.svg'
                          alt='react'
                          className='max-w-12 max-h-12 border border-neutral-800 rounded-full'
                          style={{
                            background:
                              "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                          }}
                        />
                      ),
                    },
                    {
                      id: 5,
                      name: "Github",
                      icon: (
                        <img
                          src='/myportfolio/github-icon.svg'
                          alt='react'
                          className='max-w-12 max-h-12 border border-neutral-800 rounded-full'
                          style={{
                            background:
                              "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
                          }}
                        />
                      ),
                    },
                  ]}
                />
              </div>
              <div className=''>
                <p className='text-secondary text-[2.5vmin]'>
                  Check Live --&gt;
                </p>
              </div>
            </div>
          </div>
        </PinContainer>
      </div>
    </main>
  );
}
