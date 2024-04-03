import { ComponentProps, ReactElement } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  title: string;
}

export const NavLink = ({ title, ...props }: NavLinkProps): ReactElement => {
  return (
    <a href="" className="font-medium text-sm" {...props}>
      {title}
    </a>
  );
};
