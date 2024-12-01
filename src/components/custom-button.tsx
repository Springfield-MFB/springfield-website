import { cn } from "@/lib/utils";

interface CustomButtonProps {
  type?: "primary" | "ghost";
  children: React.ReactNode;
  onClick?: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  type = "primary",
  children,
  onClick,
}) => {
  return (
    <button
      className={cn(
        "custom-buttom bg-dark-primary",
        type === "ghost" && "bg-[#E4E4E4]"
      )}
      onClick={onClick}
    >
      <>
        <div
          className={cn("text text-center text-xs font-medium ", {
            "text-white": type === "primary",
            "text-dark-primary": type === "ghost",
          })}
        >
          <span>{children}</span>
          <span>{children}</span>
        </div>
        {type === "primary" && (
          <>
            <span className="arrow">→</span>
          </>
        )}
      </>
    </button>
  );
};
