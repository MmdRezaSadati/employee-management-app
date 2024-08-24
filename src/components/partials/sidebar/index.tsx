import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <div className="fixed top-0 z-50 flex h-screen w-64 flex-col px-4 shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] ltr:left-0 rtl:right-0">
      <Link href={"/"} className="flex items-center gap-2 py-3  text-2xl">
        <Image
          src="/logo.png"
          alt="next svg"
          width={32}
          height={28}
          className="!h-7 !w-auto"
        />
        <h2>EMPLOYEE</h2>
      </Link>
      <Menu />
    </div>
  );
};

export default Sidebar;
