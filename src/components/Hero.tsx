import { cn } from "../utils/cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import { HeadingSlogan } from "./HeadingSlogan";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[60%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.12 "
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-[#262626]/[0.15] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 flex flex-col items-center gap-[2.5vmin]">
        <p className="uppercase text-[#E4ECFF] tracking-widest text-center">
          welcome to my portfolio
        </p>
        <h1 className="text-4xl md:text-7xl font-bold text-center text-primary">
          <HeadingSlogan words="Hi, Myself" />
          <HeadingSlogan words="Aniket Saha" className="text-secondary" />
          <br />
          <HeadingSlogan words="I am a" />
          <HeadingSlogan
            words="MERN stack Developer"
            className="text-secondary"
          />
        </h1>
        <p className="mt-4 font-normal text-xl text-neutral-300 max-w-xl text-center mx-auto">
          I am full stack MERN developer with 2+ years of experience. Client
          satisfactory experience is my main focus.
        </p>
        <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[linear-gradient(180deg,_rgba(54,_55,_73,_0.43)_0%,_rgba(54,_55,_73,_0.49)_100%)]" />
          <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span>See my works</span>
            <span>
              <IconArrowUpRight stroke={2} />
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
