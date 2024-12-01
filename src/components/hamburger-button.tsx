import { motion, MotionConfig } from "framer-motion";
import { FC, useState } from "react";

interface AnimatedHamburgerButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AnimatedHamburgerButton: FC<AnimatedHamburgerButtonProps> = ({
  active,
  setActive,
}) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className="relative size-16"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-9 bg-gray-400"
          style={{ y: "-50%", left: "70%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-9 bg-gray-400"
          style={{ left: "70%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-4 bg-gray-400"
          style={{
            x: "30%",
            y: "50%",
            bottom: "35%",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};
