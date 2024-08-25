import { Pagination, Selection } from "@nextui-org/react";
import { Dispatch, FC, memo, SetStateAction } from "react";
import { TUser } from ".";

const PaginationSection: FC<{
  selectedKeys: Selection;
  hasSearchFilter: boolean;
  pages: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  items: TUser[];
}> = ({ selectedKeys, page, pages, setPage, hasSearchFilter, items }) => {
  return (
    <div className="flex items-center justify-between p-2">
      <Pagination
        showControls
        classNames={{
          cursor: "bg-foreground text-background",
        }}
        color="default"
        isDisabled={hasSearchFilter}
        page={page}
        total={pages}
        variant="light"
        onChange={setPage}
      />
      <span className="text-small text-default-400">
        {selectedKeys === "all"
          ? "All items selected"
          : `${selectedKeys.size} of ${items.length} selected`}
      </span>
    </div>
  );
};

export default memo(PaginationSection);
