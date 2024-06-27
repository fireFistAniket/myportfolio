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
      <button className="inline-flex h-12 items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] bg-[length:200%_100%] px-6 font-medium text-primary gradient-border border border-solid transition-colors gap-1 relative">
        <span>See my works</span>
        <span>
          <IconArrowUpRight stroke={2} />
        </span>
      </button>
    </footer>
  );
};

export default Footer;
