"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/icons/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
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
    <nav className="flex justify-between items-center py-[30px] max-w-[1166px]  m-auto px-[20px]">
      <Image src={logo} alt="" />
      <ul className="flex items-center gap-8 uppercase text-white font-[400] text-[14px] font-rubik">
        {links.map((link) => {
          return (
            <li
              className={`opacity-[0.5] ${
                pathname == link.link && "border-b-[2px] opacity-[1]"
              }`}
              key={link.name}
            >
              <Link href={link.link}>{link.name}</Link>
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
