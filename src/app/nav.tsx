"use client";

import Link from "next/link"; // Import Link from Next.js
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-between h-[8.5rem] pt-10 -space-x-8">
      <div className="flex flex-1 pl-16 gap-16 items-center z-20">
        <img src="/assets/shared/logo.svg" alt="bg-home" className="size-12" />
        <div className="w-full h-[1px] bg-white/25"></div>
      </div>
      <div className="flex-1 justify-end px-16 flex bg-white/5 bg-blur backdrop-blur z-10">
        <ul className="flex flex-row gap-12 h-full items-center">
          {[
            { id: "home", label: "HOME", index: "00", href: "/" },
            {
              id: "destination",
              label: "DESTINATION",
              index: "01",
              href: "/destination",
            },
            { id: "crew", label: "CREW", index: "02", href: "/crew" },
            {
              id: "technology",
              label: "TECHNOLOGY",
              index: "03",
              href: "/technology",
            },
          ].map((item) => (
            <li
              key={item.id}
              className={`flex h-full text-base tracking-[0.125rem] cursor-pointer transition duration-300 border-b-[0.1875rem] ${
                pathName === item.href
                  ? "border-white"
                  : "border-transparent hover:border-white/50"
              }`}
            >
              <Link
                href={item.href}
                passHref
                className="flex gap-3 h-full items-center"
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
