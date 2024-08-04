import { useState } from "react";
import { cn } from "../../../utils/cn";
import { Link } from "react-router-dom";
import PinPerspective from "./Pinprespective";

const PinContainer = ({
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
          "relative group/pin flex-1 z-50 cursor-pointer",
          containerClassName
        )}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        to={href || "/"}
        target="_blank"
        referrerPolicy="no-referrer"
      >
        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0deg)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              transform: transform,
              background:
                "linear-gradient(103.4deg, #022626 16.66%, #000B0B 81.61%)",
            }}
            className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start  rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-black border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
          >
            <div className={cn(" relative z-50 ", className)}>{children}</div>
          </div>
        </div>
        <PinPerspective title={title} href={href} />
      </Link>
    );
  };


  export default PinContainer