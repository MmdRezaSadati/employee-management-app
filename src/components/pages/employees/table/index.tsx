"use client";
import useRenderCell from "@/hooks/common/render-cell.hook";
import {
  Selection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { FC, useMemo, useState } from "react";
import { columns, statusOptions } from "@/core/constants/data";
import PaginationSection from "./pagination-section";
import TableTopContent from "./table-top-content";

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

export interface IUser {
  id: number;
  name: string;
  role: string;
  team: string;
  status: string;
  age: string;
  avatar: string;
  email: string;
  cards: {
    cardNumber: string;
    cardName: string;
  }[];
  phoneNumber: string;
  birthDay: string;
  caption: string;
}

const EmployeesTable: FC<{ isLoading?: boolean; data: IUser[] }> = ({
  isLoading,
  data,
}) => {
  console.log('data',data);
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const { renderCell } = useRenderCell();
  const pages = Math.ceil(data.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredEmployees = [...data];

    if (hasSearchFilter) {
      filteredEmployees = filteredEmployees.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredEmployees = filteredEmployees.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredEmployees;
  }, [data, filterValue, statusFilter]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: IUser, b: IUser) => {
      const first = a[sortDescriptor.column as keyof IUser] as number;
      const second = b[sortDescriptor.column as keyof IUser] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);
  const loadingState = isLoading || data?.length === 0 ? "loading" : "idle";

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Example table with custom cells, pagination and sorting"
      bottomContent={
        <PaginationSection
          selectedKeys={selectedKeys}
          hasSearchFilter={hasSearchFilter}
          pages={pages}
          page={page}
          setPage={setPage}
          items={items}
        />
      }
      bottomContentPlacement="outside"
      className="overflow-hidden overflow-x-auto"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-foreground after:text-background text-background",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={
        <TableTopContent
          data={data}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
          setRowsPerPage={setRowsPerPage}
          setPage={setPage}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          visibleColumns={visibleColumns}
          setVisibleColumns={setVisibleColumns}
        />
      }
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}>
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={"No data found"}
        loadingState={loadingState}
        items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default EmployeesTable;
