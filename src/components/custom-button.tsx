import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { FlipText } from "./flip-text";

interface CustomButtonProps {
  type?: "primary" | "ghost";
  children: string;
  className?: string;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  type = "primary",
  children,
  onClick,
  className,
}) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      className={cn(
        "flex space-x-2 rounded-md justify-center items-center px-12 py-4 bg-dark-primary",
        type === "ghost" && "bg-[#E4E4E4]",
        className
      )}
      onClick={onClick}
    >
      <FlipText
        className={cn("text-center text-xs font-medium ", {
          "text-white": type === "primary",
          "text-dark-primary": type === "ghost",
        })}
      >
        {children}
      </FlipText>
      {type === "primary" && (
        <>
          <motion.span
            variants={{
              initial: { opacity: 1, x: 0 },
              hovered: { opacity: 1, x: 10 },
            }}
            className="text-white "
          >
            →
          </motion.span>
        </>
      )}
    </motion.button>
  );
};
