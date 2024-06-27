import { IconArrowUpRight } from "@tabler/icons-react";

const Footer = () => {
  return (
    <footer className="bg-grid-[#262626]/[0.05] flex flex-col items-center gap-[6vmin] py-[3vmax]">
      <h1 className="text-primary text-3xl md:text-5xl font-bold text-center max-w-5xl">
        Let&apos;s build something{" "}
        <span className="text-secondary">amazing</span> together. Connect with
        me.
      </h1>
      <p className="text-[2vmin] text-neutral-300">
        Reach out to me today and let&apos;s discuss how I can help you achieve
        your goals
      </p>
      <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[linear-gradient(180deg,_rgba(54,_55,_73,_0.43)_0%,_rgba(54,_55,_73,_0.49)_100%)]" />
        <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          <span>Contact me now</span>
          <span>
            <IconArrowUpRight stroke={2} />
          </span>
        </span>
      </button>
    </footer>
  );
};

export default Footer;
