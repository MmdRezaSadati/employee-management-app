"use client";
/// this component will be rendered on server by using tanstack query Hydration Boundary

import { columns, statusOptions } from "@/core/constants/data";
import renderCell from "@/core/utils/render-cell.utils";
import {
  useDeleteEmployee,
  useGetEmployees,
} from "@/core/hooks/react-query/employee.query";
import { TSearchSelector } from "@/core/stores/slices/search";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Selection,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { FC, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PaginationSection from "./pagination-section";
import TableTopContent from "./table-top-content";

const INITIAL_VISIBLE_COLUMNS = ["name", "role", "status", "actions"];

const classNames = {
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
};

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

const EmployeesTable: FC<{ isLoading?: boolean }> = ({ isLoading }) => {
  const searchValue: any = useSelector<TSearchSelector>(
    (state) => state.searchSlice.value
  );
  const { data = [] } = useGetEmployees();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [deleteId, setDeleteId] = useState<undefined | string>(undefined);
  const { mutate } = useDeleteEmployee();
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
  useEffect(() => {
    setFilterValue(typeof searchValue === "string" ? searchValue : "");
  }, [searchValue]);

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

  return (
    <>
      <Modal
        size={"xs"}
        classNames={{ backdrop: "bg-red-900/10 backdrop-opacity-40" }}
        isOpen={isOpen}
        onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Are you sure to delete the employee ?
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    deleteId && mutate({ data: { Id: deleteId } });
                    onClose();
                  }}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
            wrapper:
              "after:bg-foreground after:text-background text-background",
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
                <TableCell>
                  {renderCell(item, columnKey, onOpen, setDeleteId)}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};
export default EmployeesTable;
