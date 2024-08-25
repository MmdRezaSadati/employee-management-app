import IconPlus from "@/core/icons/icon-plus";
import IconChevronDown from "@/core/icons/icon-plus copy";
import IconSearchTable from "@/core/icons/icon-search-table";
import { capitalize } from "@/core/utils";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import {
  ChangeEvent,
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
} from "react";
import { columns, employees, statusOptions } from "@/core/constants/data";

const TableTopContent = ({
  setFilterValue,
  filterValue,
  setStatusFilter,
  statusFilter,
  setVisibleColumns,
  visibleColumns,
  setPage,
  setRowsPerPage,
}: {
  filterValue: string;
  setFilterValue: (value: SetStateAction<string>) => void;
  setRowsPerPage: (value: SetStateAction<number>) => void;
  setPage: (value: SetStateAction<number>) => void;
  statusFilter: any;
  setStatusFilter: Dispatch<SetStateAction<any>>;
  visibleColumns: any;
  setVisibleColumns: Dispatch<SetStateAction<any>>;
}) => {
  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );
  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);
  return (
    <div className="sticky left-0 top-0 flex flex-col gap-4">
      <div className="flex items-end justify-between gap-3">
        <Input
          isClearable
          classNames={{
            base: "w-full sm:max-w-[44%]",
            inputWrapper: "border-1",
          }}
          placeholder="Search by name..."
          size="sm"
          startContent={<IconSearchTable className="text-default-300" />}
          value={filterValue}
          variant="bordered"
          onClear={() => setFilterValue("")}
          onValueChange={onSearchChange}
        />
        <div className="flex gap-3">
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<IconChevronDown className="text-small" />}
                size="sm"
                variant="flat">
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={statusFilter}
              selectionMode="multiple"
              onSelectionChange={setStatusFilter}>
              {statusOptions.map((status) => (
                <DropdownItem key={status.uid} className="capitalize">
                  {capitalize(status.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<IconChevronDown className="text-small" />}
                size="sm"
                variant="flat">
                Columns
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
              selectedKeys={visibleColumns}
              selectionMode="multiple"
              onSelectionChange={setVisibleColumns}>
              {columns.map((column) => (
                <DropdownItem key={column.uid} className="capitalize">
                  {capitalize(column.name)}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <Button
            className="bg-foreground text-background"
            endContent={<IconPlus />}
            size="sm">
            Add New
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-small text-default-400">
          Total {employees.length} employees
        </span>
        <label className="flex items-center text-small text-default-400">
          Rows per page:
          <select
            className="bg-transparent text-small text-default-400 outline-none"
            onChange={onRowsPerPageChange}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default memo(TableTopContent);
