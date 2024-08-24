import Search from "@/components/common/search";
import ThemeSwitcher from "@/components/common/theme-switcher";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 flex h-14 w-full items-center justify-between bg-white px-5 py-2.5 shadow-sm dark:bg-black">
      <div className="flex gap-2">
        <ThemeSwitcher />
        <Search />
      </div>
    </header>
  );
};

export default Header;
