"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container mx-auto grid grid-cols-12 gap-[1.875rem]">
      <div className="flex flex-col col-span-full">
        <div className="flex-1" />
        <div className="flex flex-row flex-1 justify-between">
          <div className="flex flex-col gap-6 max-w-[33.75rem]">
            <p className="text-[1.75rem] text-blue-300 tracking-[0.25rem] leading-[2.125rem]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className="text-[9rem] text-white leading-[10.3125rem] font-['Bellefair']">
              SPACE
            </p>
            <p className="text-[1.125rem] leading-[180%] text-blue-300 font-['Barlow']">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="max-w-[33.75rem] w-full flex justify-end my-auto">
            <Link href={"/destination"} passHref>
              <button className="group relative size-[17rem] bg-white rounded-full font-['Bellefair'] text-[2rem] text-blue-900">
                <span className="absolute inset-0 rounded-full bg-white group-hover:bg-white/10 group-hover:scale-150 transition-all duration-500"></span>
                <span className="relative z-10">Explore</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Image
        src="/assets/home/background-home-desktop.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover"
        priority
      />
    </section>
  );
}
