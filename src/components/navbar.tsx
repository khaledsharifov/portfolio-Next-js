"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import burger_menu from "../../public/icons/burger-menu.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import TopMenu from "./TopMenu";

const Navbar = () => {
  const [topMenuClass, setTopMenuClass] = useState("top-[-100vh]");
  const pathname = usePathname();
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
  ];
  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="2000"
      className="flex justify-between items-center py-[30px] max-w-[1166px]  m-auto px-[20px]"
    >
      <TopMenu topMenuClass={topMenuClass} setTopMenuClass={setTopMenuClass} />
      <Link href={"/"}>
        <Image src={logo} alt="" />
      </Link>
      <Image
        onClick={() => setTopMenuClass("top-0")}
        className="text-[white] lg:hidden"
        src={burger_menu}
        alt=""
      />
      <ul className="hidden lg:flex items-center gap-8 uppercase text-white font-[400] text-[14px] font-rubik">
        {links.map((link) => {
          return (
            <li
              className={`opacity-[0.5] relative group ${
                pathname == link.link && " opacity-[1]"
              }`}
              key={link.name}
            >
              <Link
                className={`${
                  pathname == link.link && "before:w-[100%]"
                } link-hover`}
                href={link.link}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
        <Link href={"/contacts"}>
          <button
            className={`btn-contacts ${
              pathname == "/contacts" && "opacity-[1] border-[white]"
            }`}
          >
            Contact
          </button>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
