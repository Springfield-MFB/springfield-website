import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { init } from "next/dist/compiled/webpack/webpack";

export const FlipText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn("relative overflow-hidden whitespace-nowrap", className)}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
        className={cn(className)}
      >
        {children}
      </motion.div>

      <motion.div
        className={cn("absolute inset-0", className)}
        variants={{
          initial: { y: "100%" },
          hovered: { y: "0" },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

export const StaggeredFlipText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className={cn("relative overflow-hidden whitespace-nowrap", className)}
    >
      <div>
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: i * STAGGER,
              }}
              key={i}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l, i) => {
          return (
            <motion.span
              variants={{
                initial: { y: "100%" },
                hovered: { y: "0" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: i * STAGGER,
              }}
              key={i}
              className="inline-block"
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.div>
  );
};
