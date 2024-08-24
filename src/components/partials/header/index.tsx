import ThemeSwitcher from "@/components/common/theme-switcher";

const Header = () => {
  return (
    <header className="sticky flex h-14 w-full items-center justify-between shadow-sm">
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
