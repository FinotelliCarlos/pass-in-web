import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { ReactElement } from "react";
import { IconButton } from "./icon-button";

export const AttendeeList = (): ReactElement => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1>Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            type="text"
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0"
            placeholder="Buscar participante..."
          />
        </div>
      </div>

      <div className="border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr
              className="border border-b border-white/10"
              style={{ width: 48 }}
            >
              <th className="py-3 px-4 text-sm font-semibold text-left">
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Codigo
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                className="py-3 px-4 text-sm font-semibold text-left"
                style={{ width: 64 }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_item, index) => {
              return (
                <tr key={index} className="border border-b border-white/10">
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">123123</td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Carlos Eduardo
                      </span>
                      <span>carlos.finotelli@outlook.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    7 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    3 dias atrás
                  </td>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <IconButton transparent>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
                Mostrando 10 de 228 itens
              </td>
              <td
                className="py-3 px-4 text-sm text-zinc-300 text-right"
                colSpan={3}
              >
                <div className="gap-8 items-center inline-flex">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <IconButton>
                      <ChevronsLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronLeft className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronRight className="size-4" />
                    </IconButton>
                    <IconButton>
                      <ChevronsRight className="size-4" />
                    </IconButton>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
