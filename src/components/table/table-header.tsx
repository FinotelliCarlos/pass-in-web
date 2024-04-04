import { ComponentProps, ReactElement } from "react";

interface TableHeaderProps extends ComponentProps<"th"> {}

export const TableHeader = ({ ...props }: TableHeaderProps): ReactElement => {
  return (
    <th className="py-3 px-4 text-sm font-semibold text-left" {...props} />
  );
};
