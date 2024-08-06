import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

import {  useState } from "react";
import { cn } from "../utils/cn";
import LinkPreview from "./ui/navbar/LinkPreview";
import MenuItem from "./ui/navbar/MenuItem";
import Menu from "./ui/navbar/Menu";


export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-[100]",
          className
        )}
      >
        <Menu setActive={setActive}>
          <LinkPreview
            url="#about"
            imageSrc="/about-preview.png"
            isStatic
          >
            <MenuItem setActive={setActive} active={active} item="About" />
          </LinkPreview>

          <LinkPreview
            url="#project"
            imageSrc="/project-preview.png"
            isStatic
          >
            <MenuItem setActive={setActive} active={active} item="Project" />
          </LinkPreview>
          <LinkPreview
            url="#experience"
            imageSrc="/experience-preview.png"
            isStatic
          >
            <MenuItem setActive={setActive} active={active} item="Experience" />
          </LinkPreview>
          <LinkPreview
            url="#approach"
            imageSrc="/approach-preview.png"
            isStatic
          >
            <MenuItem setActive={setActive} active={active} item="Approach" />
          </LinkPreview>
          <LinkPreview
            url="#contact"
            imageSrc="/footer-preview.png"
            isStatic
          >
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </LinkPreview>
        </Menu>
      </motion.div>
    </AnimatePresence>
  );
}
