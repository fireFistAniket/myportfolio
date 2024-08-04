import { IconArrowUpRight } from "@tabler/icons-react";
import { HeadingSlogan } from "./HeadingSlogan";
import { Link } from "react-router-dom";
import LampContainer from "./ui/hero/Lampcontainer";

export function Hero() {
  return (
    <div
      className="min-h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased relative overflow-hidden bg-gradient-to-b from-[var(--background)] to-transparent"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-[#262626]/[0.15]"></div>
      <LampContainer className="">
        <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-24 flex flex-col items-center gap-[2vmax] md:gap-[2.5vmin] top-60 md:top-16">
          <p className="uppercase text-[#E4ECFF] tracking-widest text-center">
            welcome to my portfolio
          </p>
          <h1 className="text-[4vmax] font-bold text-center text-primary">
            <HeadingSlogan words="Hi, Myself" />
            <HeadingSlogan words="Aniket Saha" className="text-secondary" />
            <br />
            <HeadingSlogan words="I am a" />
            <HeadingSlogan
              words="MERN stack Developer"
              className="text-secondary"
            />
          </h1>
          <p className="mt-4 font-normal text-[1.5vmax] text-neutral-300 max-w-xl text-center mx-auto">
            I am full stack MERN developer with 2+ years of experience. Client
            satisfactory experience is my main focus.
          </p>
          <Link
            to="#project"
            className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[linear-gradient(180deg,_rgba(54,_55,_73,_0.43)_0%,_rgba(54,_55,_73,_0.49)_100%)]" />
            <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <span>See my works</span>
              <span>
                <IconArrowUpRight stroke={2} />
              </span>
            </span>
          </Link>
        </div>
      </LampContainer>
    </div>
  );
}
