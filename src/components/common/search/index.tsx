"use client";
import IconSearch from "@/core/icons/icon-search";
import IconXCircle from "@/core/icons/icon-x-circle";
import search, { onSearchChange } from "@/stores/slices/search";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const searchValue = useSelector((state) => state.searchSlice.value);
  const dispatch = useDispatch();
  const setSearch = (value: boolean | string) => {
    dispatch(onSearchChange(value));
    console.log("value", value);
  };
  console.log("searchValue", searchValue);
  return (
    <div className="sm:ltr:mr-auto sm:rtl:ml-auto">
      <form
        className={`${searchValue && "!block"} absolute inset-x-0 top-1/2 z-10 mx-4 hidden -translate-y-1/2 sm:relative sm:top-0 sm:mx-0 sm:block sm:translate-y-0`}
        onSubmit={() => setSearch(false)}>
        <div className="relative">
          <input
            type="text"
            className=" peer w-full rounded-md border border-white-light bg-gray-100 px-4 py-2 text-sm font-semibold text-black !outline-none placeholder:tracking-widest focus:border-primary focus:ring-transparent dark:border-[#17263c] dark:bg-[#121e32] dark:text-white-dark dark:focus:border-primary sm:bg-transparent ltr:px-9 ltr:sm:pr-4 rtl:px-9 rtl:sm:pl-4"
            placeholder="Search..."
            onChange={(v) => setSearch(v.target.value)}
          />
          <button
            type="button"
            className="absolute inset-0 size-9 appearance-none peer-focus:text-primary ltr:right-auto rtl:left-auto">
            <IconSearch className="mx-auto" />
          </button>
          <button
            type="button"
            className="absolute top-1/2 block -translate-y-1/2 hover:opacity-80 sm:hidden ltr:right-2 rtl:left-2"
            onClick={() => setSearch(false)}>
            <IconXCircle />
          </button>
        </div>
      </form>
      <button
        type="button"
        onClick={() => setSearch(!search)}
        className="search_btn rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 dark:bg-dark/40 dark:hover:bg-dark/60 sm:hidden">
        <IconSearch className="h-4.5 w-4.5 mx-auto dark:text-[#d0d2d6]" />
      </button>
    </div>
  );
};

export default Search;
