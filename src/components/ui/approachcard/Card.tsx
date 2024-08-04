import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Icon from "./Icon";

const Card = ({
  title,
  children,
  initialText,
  description,
}: {
  title: string;
  children?: React.ReactNode;
  initialText?: string;
  description?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-neutral-200/30 group/canvas-card flex items-center justify-center max-w-[50vmax] sm:max-w-[20vmax] w-full mx-auto p-4 relative h-[65vmax] sm:h-[30vmax] rounded-lg shadow-md"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 rounded-lg shadow-md">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[linear-gradient(180deg,_rgba(54,_55,_73,_0.43)_0%,_rgba(54,_55,_73,_0.49)_100%)]" />
            <span className="inline-flex h-full gap-2 w-full cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] px-3 py-1 text-xl font-medium text-secondary backdrop-blur-3xl">
              <span>{initialText}</span>
            </span>
          </button>
        </div>
        <div className="opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:-translate-y-2 transition duration-200 flex flex-col items-center gap-3">
          <span className="inline-flex gap-2 cursor-pointer items-center justify-center rounded-md bg-[linear-gradient(92.94deg,_#041D1B_6.58%,_#0C2319_103.22%)] px-3 py-1 text-lg font-medium text-secondary backdrop-blur-3xl">
            <span>{initialText}</span>
          </span>
          <h2 className="text-secondary text-center text-3xl font-bold group-hover/canvas-card:text-secondary headingStyle">
            {title}
          </h2>
          <p className="text-white text-xl font-bold group-hover/canvas-card:text-white text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
