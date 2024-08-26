import Image from "next/image";
import Link from "next/link";
import Handler from "./handler";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <Handler>
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
    </Handler>
  );
};

export default Sidebar;
