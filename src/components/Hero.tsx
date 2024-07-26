import { cn } from "../utils/cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import { HeadingSlogan } from "./HeadingSlogan";
import { motion } from "framer-motion";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen pt-24 flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--background)] to-transparent w-full rounded-md z-0",
        className
      )}
    >
      <div className='relative flex w-full md:flex-1 scale-y-125 items-center justify-center isolate z-0 '>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-green-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        >
          <div className='absolute w-[100%] left-0 bg-[var(--background)] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute  w-40 h-[100%] left-0 bg-[var(--background)]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-green-500 text-white [--conic-position:from_290deg_at_center_top]'
        >
          <div className='absolute  w-40 h-[100%] right-0 bg-[var(--background)]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute  w-[100%] right-0 bg-[var(--background)] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>
        <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[var(--background)] blur-2xl'></div>
        <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-green-500 opacity-50 blur-3xl'></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='absolute inset-auto z-30 h-36 w-64 -translate-y-4 sm:-translate-y-[6rem] rounded-full bg-green-400 blur-2xl'
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[4rem] sm:-translate-y-[7rem] bg-green-400 '
        ></motion.div>

        <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[9.5rem] sm:-translate-y-[12.5rem] bg-[var(--background)] '></div>
      </div>

      <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
        {children}
      </div>
    </div>
  );
};

export function Hero() {
  return (
    <div
      className='min-h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden bg-gradient-to-b from-[var(--background)] to-transparent'
      id='home'
    >
      <div className='absolute top-0 left-0 w-full h-full bg-grid-[#262626]/[0.15]'></div>
      <LampContainer className=''>
        <div className='p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-24 flex flex-col items-center gap-[2vmax] md:gap-[2.5vmin] top-60 md:top-16'>
          <p className='uppercase text-[#E4ECFF] tracking-widest text-center'>
            welcome to my portfolio
          </p>
          <h1 className='text-[4vmax] font-bold text-center text-primary'>
            <HeadingSlogan words='Hi, Myself' />
            <HeadingSlogan words='Aniket Saha' className='text-secondary' />
            <br />
            <HeadingSlogan words='I am a' />
            <HeadingSlogan
              words='MERN stack Developer'
              className='text-secondary'
            />
          </h1>
          <p className='mt-4 font-normal text-xl text-neutral-300 max-w-xl text-center mx-auto'>
            I am full stack MERN developer with 2+ years of experience. Client
            satisfactory experience is my main focus.
          </p>
          <button className='relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[linear-gradient(180deg,_rgba(54,_55,_73,_0.43)_0%,_rgba(54,_55,_73,_0.49)_100%)]' />
            <span className='inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
              <span>See my works</span>
              <span>
                <IconArrowUpRight stroke={2} />
              </span>
            </span>
          </button>
        </div>
      </LampContainer>
    </div>
  );
}
