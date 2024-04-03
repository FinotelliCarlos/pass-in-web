import { ReactElement } from "react";
import { LogoSVG } from "../assets";
import { NavLink } from "./nav-link";

export const Header = (): ReactElement => {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={LogoSVG} alt="Logo Pass In" className="size-16" />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos" title="Eventos" />
        <NavLink href="/participantes" title="Participantes" />
      </nav>
    </header>
  );
};
