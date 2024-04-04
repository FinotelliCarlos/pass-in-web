import { ComponentProps, ReactElement } from "react";

interface TableProps extends ComponentProps<"table"> {}

export const Table = ({ ...props }: TableProps): ReactElement => {
  return (
    <div className="border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  );
};
