import { MoreHorizontal } from "lucide-react";
import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export const IconButton = ({
  transparent,
  disabled,
  ...props
}: IconButtonProps): ReactElement => {
  return (
    <button
      className={twMerge(
        "border border-white/10 rounded-md p-1.5",
        transparent ? "bg-black/20" : "bg-white/10",
        disabled ? "opacity-50 cursor-not-allowed" : null
      )}
      {...props}
    >
      <MoreHorizontal className="size-4" />
    </button>
  );
};
