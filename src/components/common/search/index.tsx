"use client";
import IconSearch from "@/core/icons/icon-search";
import IconXCircle from "@/core/icons/icon-x-circle";
import { onSearchChange, TSearchSelector } from "@/stores/slices/search";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const searchValue = useSelector<TSearchSelector>(
    (state) => state.searchSlice.value
  );
  const dispatch = useDispatch();
  const setSearch = (value: boolean | string) => {
    dispatch(onSearchChange(value));
  };
  return (
    <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
      <form
        className={`${searchValue && "!block"} relative inset-x-0 top-1/2 z-10 mx-4 -translate-y-1/2 sm:top-0 sm:mx-0 sm:block sm:translate-y-0`}
        onSubmit={() => setSearch(false)}>
        <div className="relative">
          <input
            type="text"
            className=" peer  w-32 rounded-md border border-white-light bg-gray-100 px-4 py-2 text-sm font-semibold text-black !outline-none placeholder:tracking-widest focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary sm:w-auto sm:bg-transparent ltr:px-9 ltr:sm:pr-4 rtl:px-9 rtl:sm:pl-4"
            placeholder="Search..."
            onChange={(v) => setSearch(v.target.value)}
          />
          <button
            type="button"
            className="absolute inset-0 size-9 appearance-none peer-focus:text-primary ltr:right-auto rtl:left-auto">
            <IconSearch className="mx-auto" />
          </button>
          {searchValue !== false && searchValue !== "" && (
            <button
              type="button"
              className="absolute top-1/2 block -translate-y-1/2 hover:opacity-80 sm:hidden ltr:right-2 rtl:left-2"
              onClick={() => setSearch(false)}>
              <IconXCircle />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
