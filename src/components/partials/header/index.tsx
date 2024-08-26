import { Search, ThemeSwitcher } from "@/components/common";
import ToggleSidebar from "./toggle-sidebar";
import ImageFallback from "@/components/common/image-with-fallback";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-40 flex h-14 w-full items-center justify-between bg-white px-5 py-2.5 shadow-sm dark:bg-black">
      <div className="flex gap-1 sm:gap-3 lg:hidden">
        <ImageFallback
          src="/logo.png"
          alt="next svg"
          width={32}
          height={28}
          className="!h-7 !w-auto"
        />
        <ToggleSidebar />
      </div>
      <div className="flex gap-1 sm:gap-4">
        <ThemeSwitcher />
        <Search />
      </div>
    </header>
  );
};

export default Header;
