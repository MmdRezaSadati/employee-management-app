import { IUser } from "@/components/common/employee-table";
import IconVerticalDots from "@/core/icons/icon-vertical-dots";
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { Dispatch, Key, SetStateAction } from "react";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
type UserWithoutCards = Omit<IUser, "cards">;
const renderCell = (
  user: UserWithoutCards,
  columnKey: Key,
  onOpen: () => void,
  setId: Dispatch<SetStateAction<string | undefined>>
) => {
  const cellValue = user[columnKey as keyof UserWithoutCards];
  switch (columnKey) {
    case "name":
      return (
        <Link href={`/profile/${user.id}`} className="flex gap-3">
          <CldImage
            src={user.avatar}
            width={32}
            height={32}
            className="!h-8 rounded-full"
            alt={user.name}
          />
          <div className="text-tiny text-default-500">
            <p className="text-sm text-slate-900 dark:text-slate-300 ">
              {user.name}
            </p>
            {user.email}
          </div>
        </Link>
      );
    case "role":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-small capitalize">{cellValue}</p>
          <p className="text-bold text-tiny capitalize text-default-500">
            {user.team}
          </p>
        </div>
      );
    case "status":
      return (
        <Chip
          className="gap-1 border-none capitalize text-default-600"
          color={statusColorMap[user.status]}
          size="sm"
          variant="dot">
          {cellValue}
        </Chip>
      );
    case "actions":
      return (
        <div className="relative flex items-center justify-end gap-2">
          <Dropdown className="border-1 border-default-200 bg-background">
            <DropdownTrigger>
              <Button isIconOnly radius="full" size="sm" variant="light">
                <IconVerticalDots className="text-default-400" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              <DropdownItem as={Link} href={`/profile/${user.id}`}>
                View
              </DropdownItem>
              <DropdownItem as={Link} href={`/edit/${user.id}`}>
                Edit
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  onOpen();
                  setId(String(user.id));
                }}>
                Delete
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      );
    default:
      return cellValue;
  }
};

export default renderCell;
