import Image from "next/image";
import React from "react";
import logo from "../../public/icons/logo.svg";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

type Props = {
  topMenuClass: string;
  setTopMenuClass: React.SetStateAction<any>;
};

const TopMenu = ({ topMenuClass, setTopMenuClass }: Props) => {
  const pathname = usePathname();
  const { push } = useRouter();
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/about",
    },
    {
      name: "My works",
      link: "/works",
    },
    {
      name: "Contact",
      link: "/contacts",
    },
  ];

  const redirect = (link: string): void => {
    push(link);
    setTopMenuClass("top-[-100vh]");
  };
  return (
    <div
      className={`bg-[#131212] h-[100vh] w-[100%] fixed left-0 right-0  duration-500 ${topMenuClass}`}
    >
      <div className="flex items-center justify-between px-[30px] py-[6px] border-b">
        <Image src={logo} alt="" />
        <span
          onClick={() => setTopMenuClass("top-[-100vh]")}
          className="text-[40px] text-white mb-[14px]"
        >
          &times;{" "}
        </span>
      </div>
      <ul className="p-[30px]">
        {links.map((link) => {
          return (
            <li
              onClick={() => redirect(link.link)}
              className={`text-white text-[22px] uppercase my-[10px] opacity-[0.5] font-rubik ${
                pathname == link.link && "opacity-[1]"
              }`}
            >
              {link.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopMenu;
