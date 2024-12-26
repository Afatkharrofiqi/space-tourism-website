"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Menu {
  id: string;
  label: string;
  index: string;
  link: string;
}

const listMenu: Menu[] = [
  { id: "home", label: "HOME", index: "00", link: "/" },
  {
    id: "destination",
    label: "DESTINATION",
    index: "01",
    link: "/destination",
  },
  { id: "crew", label: "CREW", index: "02", link: "/crew" },
  {
    id: "technology",
    label: "TECHNOLOGY",
    index: "03",
    link: "/technology",
  },
];

const NavMenu = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between p-6 md:p-0 lg:pt-10 md:-space-x-8">
      <div className="flex lg:flex-1 md:pl-10 md:pr-[4.5rem] lg:pr-0 lg:pl-16 gap-16 items-center z-20">
        <img src="/assets/shared/logo.svg" alt="bg-home" className="size-10 md:size-12" />
        <div className="md:hidden lg:block w-full h-[1px] bg-white/25"></div>
      </div>
      <div className="md:hidden flex justify-center items-end flex-col">
        <Menu size={28} onClick={() => setOpen(!open)} className="cursor-pointer" />
      </div>
      {/* Overlay */}
      {open && <div className="absolute cursor-pointer inset-0" onClick={() => setOpen(!open)} />}
      <div className={`flex flex-col gap-12 md:gap-0 md:flex-row md:relative flex-1 md:justify-end md:px-10 lg:px-16 bg-white/5 bg-blur backdrop-blur-xl w-full absolute inset-y-0 right-0 md:inset-y-auto md:right-auto max-w-[calc(100%-7.5625rem)] pl-8 md:pl-0 z-10 translate-x-0 md:translate-x-0 origin-right transition duration-300 ease-in-out ${!open && "translate-x-full"}`}>
        <div className="md:hidden py-8 flex flex-row justify-end pr-6">
          <X size={28} onClick={() => setOpen(!open)} className="cursor-pointer" />
        </div>
        <ul className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto items-center">
          {listMenu.map((item) => (
            <li
              key={item.id}
              className={`flex cursor-pointer transition duration-300 w-full border-r-[0.1875rem] md:border-r-0 md:w-auto md:h-full md:border-b-[0.1875rem] ${pathName === item.link
                ? "border-white"
                : "border-transparent hover:border-white/50"
                }`}
            >
              <Link
                href={item.link}
                passHref
                className="flex gap-3 text-base leading-[1.1875rem] md:h-[6rem] items-center tracking-[0.125rem] text-white"
              >
                <span className="font-bold">{item.index}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
