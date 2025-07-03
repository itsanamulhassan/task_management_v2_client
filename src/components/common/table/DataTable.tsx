import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useCustomTranslator } from "@/utils/hooks/useCustomTranslator";
import { fallback } from "@/utils/constants/common/fallback";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface IQueryProps {
  sort?: "asc" | "desc";
  size: number;
  page: number;
  meta: {
    page: number | null;
    size: number | null;
    total: number | null;
    totalPage: number | null;
  };
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination?: boolean;
  query?: IQueryProps;
  setQuery?: (query: IQueryProps) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination = false,
  query,
  setQuery,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const { translate, digitConverter } = useCustomTranslator();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  const handlePageChange = (newPage: number) => {
    if (setQuery && query) {
      setQuery({ ...query, page: newPage });
    }
  };

  const handleSortChange = (value: "asc" | "desc") => {
    if (setQuery && query) {
      setQuery({ ...query, sort: value });
    }
  };

  const handleSizeChange = (value: string) => {
    if (setQuery && query) {
      setQuery({ ...query, page: 1, size: parseInt(value, 10) });
    }
  };

  return (
    <div className="rounded-md border-2 border-border/30 overflow-hidden w-full">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              className="!border-0 bg-background hover:bg-background/90 !rounded-md"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead
                    className="h-10 leading-6 truncate"
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="divide-y-0 border-0">
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row, index) => (
              <TableRow
                className={cn(
                  index % 2 === 0 ? "bg-background/30" : "bg-background/60",
                  "divide-y-0 border-0"
                )}
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell className="py-1" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {translate(fallback.notFound.bn, fallback.notFound.en)}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {table.getRowModel().rows.length > 0 && pagination && query && (
        <div
          className={cn(
            "w-full px-4 py-1  flex justify-between items-center flex-col lg:flex-row"
          )}
        >
          <div className="w-full lg:w-1/2 text-center md:text-start">
            <p className="text-sm text-muted-foreground">
              {translate(
                `${digitConverter(query?.meta?.total)}  টি সারির মধ্যে ${
                  query?.size?.toString() === "1000000"
                    ? "সব"
                    : digitConverter(query?.size)
                } টি নির্বাচিত করা হয়েছে। `,
                `${digitConverter(query?.meta?.total)} of ${
                  query?.size?.toString() === "1000000"
                    ? " all"
                    : digitConverter(query?.size)
                } rows selected.`
              )}
            </p>
          </div>
          <Pagination className="w-full lg:w-1/2 flex justify-center md:justify-end">
            <PaginationContent>
              <PaginationItem>
                <Select value={query.sort} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-[120px] border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-2">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="asc">
                      {translate("ঊর্ধ্বক্রম", "Ascending")}
                    </SelectItem>
                    <SelectItem value="desc">
                      {translate("নিম্নগামী", "Descending")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </PaginationItem>
              <PaginationItem>
                <Button
                  onClick={() => handlePageChange(query.page - 1)}
                  size="icon"
                  variant="outline"
                  disabled={query.page === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </PaginationItem>
              <PaginationItem>
                <Button
                  disabled={query.meta.totalPage === query.page}
                  onClick={() => handlePageChange(query.page + 1)}
                  size="icon"
                  variant="outline"
                >
                  {digitConverter(query.page + 1)}
                </Button>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <Select
                  value={query.size.toString()}
                  onValueChange={handleSizeChange}
                >
                  <SelectTrigger className="w-[120px] border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-2">
                    <SelectValue placeholder="Item size" />
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectItem value="10">{digitConverter(10)}</SelectItem>
                    <SelectItem value="20">{digitConverter(20)}</SelectItem>
                    <SelectItem value="30">{digitConverter(30)}</SelectItem>
                    <SelectItem value="40">{digitConverter(40)}</SelectItem>
                    <SelectItem value="50">{digitConverter(50)}</SelectItem>
                    <SelectItem value="1000000">
                      {translate("সবগুলো", "All")}
                    </SelectItem>
                  </SelectContent>
                </Select>
              </PaginationItem>
              <PaginationItem>
                <Button
                  onClick={() => handlePageChange(query.page + 1)}
                  size="icon"
                  variant="outline"
                  disabled={query.meta.totalPage === query.page}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
}
