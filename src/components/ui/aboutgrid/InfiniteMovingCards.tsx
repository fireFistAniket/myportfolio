import { useEffect, useRef, useState } from "react";
import { cn } from "../../../utils/cn";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

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
