import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps extends ComponentProps<"tr"> {}

export const TableRow = ({
  className,
  ...props
}: TableRowProps): ReactElement => {
  return (
    <tr
      className={twMerge(className, "border border-b border-white/5")}
      {...props}
    />
  );
};
