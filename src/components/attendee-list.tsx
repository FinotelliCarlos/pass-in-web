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
import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableCell } from "./table/table-cell";
import { TableHeader } from "./table/table-header";
import { TableRow } from "./table/table-row";

import "dayjs/locale/pt-br";

dayjs.locale("pt-br");

dayjs.extend(relativeTime);

export interface IAttendee {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string;
}

export const AttendeeList = (): ReactElement => {
  const [search, setSearch] = useState<string>(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }

    return "";
  });
  const [page, setPage] = useState<number>(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page")) ?? 1;
    }

    return 1;
  });
  const [attendees, setAttendees] = useState<IAttendee[]>([]);
  const [total, setTotal] = useState<number>(0);
  const totalPages = Math.ceil(total / 10);

  function setCuttentPage(currPage: number) {
    const url = new URL(window.location.toString());

    url.searchParams.set("page", String(currPage));

    window.history.pushState({}, "", url);

    setPage(currPage);
  }

  function setCuttentSearch(currSearch: string) {
    const url = new URL(window.location.toString());

    url.searchParams.set("search", currSearch);

    window.history.pushState({}, "", url);

    setSearch(currSearch);
  }

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setCuttentSearch(event.currentTarget.value);
    setCuttentPage(1);
  }

  function goToFirstPage() {
    if (page >= 2) {
      setCuttentPage(1);
    }
  }

  function goToLastPage() {
    if (page < totalPages) {
      setCuttentPage(totalPages);
    }
  }

  function goToPreviousPage() {
    if (page >= 2) {
      setCuttentPage(page - 1);
    }
  }

  function goToNextPage() {
    if (page < totalPages) {
      setCuttentPage(page + 1);
    }
  }

  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
    );

    url.searchParams.set("pageIndex", String(page - 1));

    if (search.length > 0) {
      url.searchParams.set("query", search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data.attendees);

        setTotal(data.total);
      });
  }, [page, search]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h1>Participantes</h1>
        <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            onChange={onSearchInputChanged}
            type="text"
            className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm ring-0 focus:ring-0"
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
          {attendees.map((attendee) => {
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
                <TableCell>
                  {attendee.checkedInAt === null ? (
                    <span className="text-red-300">Não fez check-in</span>
                  ) : (
                    <span className="text-emerald-300">
                      {dayjs().to(attendee.checkedInAt)}
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>
              Mostrando {attendees.length ?? 0} de {total ?? 0} itens
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="gap-8 items-center inline-flex">
                <span>
                  Página {page ?? 0} de {totalPages ?? 0}
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
