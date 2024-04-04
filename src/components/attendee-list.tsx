import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { ChangeEvent, ReactElement, useState } from "react";
import { ATTENDEES_FAKE_DATA } from "../data/attendees";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableCell } from "./table/table-cell";
import { TableHeader } from "./table/table-header";
import { TableRow } from "./table/table-row";

import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

dayjs.extend(relativeTime);

export const AttendeeList = (): ReactElement => {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const totalPages = Math.ceil(ATTENDEES_FAKE_DATA.length / 10);

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.currentTarget.value);
  }

  function goToFirstPage() {
    if (page >= 2) {
      setPage(1);
    }
  }

  function goToLastPage() {
    if (page < totalPages) {
      setPage(totalPages);
    }
  }

  function goToPreviousPage() {
    if (page >= 2) {
      setPage((prev) => prev - 1);
    }
  }

  function goToNextPage() {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1>Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            type="text"
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0"
            placeholder="Buscar participante..."
            value={search}
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border border-b border-white/10" style={{ width: 48 }}>
            <TableHeader>
              <input
                type="checkbox"
                className="size-4 bg-black/20 rounded border border-white/10"
              />
            </TableHeader>
            <TableHeader>Codigo</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {ATTENDEES_FAKE_DATA.slice((page - 1) * 10, page * 10).map(
            (attendee) => {
              return (
                <TableRow key={attendee.id}>
                  <TableCell>
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10"
                    />
                  </TableCell>
                  <TableCell>{attendee.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        {attendee.name}
                      </span>
                      <span>{attendee.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                  <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
                  <TableCell>
                    <IconButton transparent>
                      <MoreHorizontal className="size-4" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            }
          )}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando 10 de {ATTENDEES_FAKE_DATA.length} itens
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="gap-8 items-center inline-flex">
                <span>
                  Página {page} de {totalPages ?? 0}
                </span>
                <div className="flex gap-1.5">
                  <IconButton onClick={goToFirstPage} disabled={page <= 1}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton onClick={goToPreviousPage} disabled={page <= 1}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToNextPage}
                    disabled={page === totalPages}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    onClick={goToLastPage}
                    disabled={page === totalPages}
                  >
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
