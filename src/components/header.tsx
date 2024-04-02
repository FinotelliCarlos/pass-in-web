import { ReactElement } from "react";
import { LogoSVG } from "../assets";

export const Header = (): ReactElement => {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={LogoSVG} alt="Logo Pass In" className="size-16" />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </header>
  );
};
