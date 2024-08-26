import { IUser } from "@/components/pages/employees/table";
import IconVerticalDots from "@/core/icons/icon-vertical-dots";
import {
  Button,
  Chip,
  ChipProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  User,
} from "@nextui-org/react";
import Link from "next/link";
import { Key, useCallback } from "react";

const useRenderCell = () => {
  const statusColorMap: Record<string, ChipProps["color"]> = {
    active: "success",
    paused: "danger",
    vacation: "warning",
  };
  type UserWithoutCards = Omit<IUser, "cards">;
  const renderCell = useCallback((user: UserWithoutCards, columnKey: Key) => {
    const cellValue = user[columnKey as keyof UserWithoutCards];

    switch (columnKey) {
      case "name":
        return (
          <Link href={`/profile/${user.id}`}>
            <User
              avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
              classNames={{
                description: "text-default-500",
              }}
              description={user.email}
              name={cellValue}>
              {user.email}
            </User>
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
                <DropdownItem>Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return { renderCell };
};

export default useRenderCell;
