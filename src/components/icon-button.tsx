import { MoreHorizontal } from "lucide-react";
import { ComponentProps, ReactElement } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export const IconButton = ({
  transparent,
  ...props
}: IconButtonProps): ReactElement => {
  return (
    <button
      {...props}
      className={
        transparent
          ? "bg-black/20 border border-white/10 rounded-md p-1.5"
          : "bg-white/10 border border-white/10 rounded-md p-1.5"
      }
    >
      <MoreHorizontal className="size-4" />
    </button>
  );
};
