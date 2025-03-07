import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { FlipText } from "./flip-text";

interface CustomButtonProps {
  link?: string;
  type?: "primary" | "ghost" | any;
  children: string;
  className?: string;
  onClick?: () => void;
  arrowClassName?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  link = "",
  type = "primary | sumbit",
  children,
  onClick,
  className,
  arrowClassName = "text-white",
}) => {
  return (
    <div>
      {link ? (
        <a href={link}>
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
              className={cn(
                "text-center text-white text-xs font-medium ",
                type === "ghost" && "text-dark-primary",
                className
              )}
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
                  className={cn("text-black text-xs", arrowClassName)}
                >
                  →
                </motion.span>
              </>
            )}
          </motion.button>
        </a>
      ) : (
        <motion.button
          initial="initial"
          whileHover="hovered"
          className={cn(
            "flex  rounded-md justify-center items-center px-12 py-4 bg-dark-primary",
            type === "ghost" && "bg-[#E4E4E4]",
            className
          )}
          onClick={onClick}
        >
          <FlipText
            className={cn(
              "text-center text-white text-xs font-medium ",
              type === "ghost" && "text-dark-primary",
              className
            )}
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
                className={cn("text-black", arrowClassName)}
              >
                →
              </motion.span>
            </>
          )}
        </motion.button>
      )}
    </div>
  );
};
