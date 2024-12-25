"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="container md:px-10 lg:px-0 mx-auto my-32 grid grid-cols-12 gap-[1.875rem]">
      <div className="flex flex-col col-span-full">
        <div className="md:hidden lg:block flex-1" />
        <div className="md:grid md:grid-cols-1 lg:grid-cols-2 md:mx-8 lg:mx-0 flex-1 md:gap-[4.125rem] lg:gap-0">
          <div className="col-span-1 flex flex-col gap-6 md:mx-auto lg:mx-0 md:max-w-[32rem] lg:max-w-[33.75rem]">
            <p className="md:text-center lg:text-left text-[1.75rem] text-blue-300 tracking-[0.25rem] leading-[2.125rem]">
              SO, YOU WANT TO TRAVEL TO
            </p>
            <p className="md:text-center lg:text-left text-[9rem] text-white leading-[10.3125rem] font-['Bellefair']">
              SPACE
            </p>
            <p className="md:text-[1rem] md:leading-[1.8125rem] md:text-center lg:text-left lg:text-[1.125rem] leading-[2rem] text-blue-300 font-['Barlow']">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="col-span-1 md:mx-auto lg:mx-0 lg:max-w-[33.75rem] lg:w-full lg:place-content-end lg:place-self-end flex my-auto">
            <Link href={"/destination"} passHref>
              <button className="group relative size-[17rem] bg-white rounded-full font-['Bellefair'] text-[2rem] text-blue-900 -z-[1]">
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
        className="-z-10 object-cover hidden lg:block"
        priority
      />

      <Image
        src="/assets/home/background-home-tablet.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover md:block lg:hidden"
        priority
      />
    </section>
  );
}
