import { ComponentProps, ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface TableCellProps extends ComponentProps<"td"> {}

export const TableCell = ({
  className,
  ...props
}: TableCellProps): ReactElement => {
  return (
    <td
      className={twMerge(className, "py-3 px-4 text-sm text-zinc-300")}
      {...props}
    />
  );
};
