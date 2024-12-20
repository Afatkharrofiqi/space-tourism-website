"use client";

import Image from "next/image";

export default function Crew() {
  return (
    <div className="container mx-auto my-12 grid grid-cols-12 gap-[1.875rem]">
      <div className="col-span-full h-full flex flex-col gap-6">
        <div role="heading" className="flex gap-6">
          <span className="font-bold text-[1.75rem] tracking-[0.295rem] text-white/25 leading-[2.125rem]">
            02
          </span>
          <p className="text-[1.75rem] tracking-[0.25rem] leading-[2.125rem]">
            MEET YOUR CREW
          </p>
        </div>
        <div role="contentinfo" className="flex-1 flex gap-8">
          <div role="contentinfo" className="flex flex-col flex-1 gap-10">
            <div
              id="explanation"
              className="flex flex-1 flex-col gap-6 justify-center"
            >
              <div id="rank_and_name">
                <p className="font-['Bellefair'] text-[2rem] leading-[2.3125rem] text-white/50 uppercase">
                  Commander
                </p>
                <p className="font-['Bellefair'] text-[3.5rem] leading-[4rem] uppercase">
                  Douglas Hurley
                </p>
              </div>
              <div id="description">
                <p className="text-blue-300 font-['Barlow'] text-[1.125rem] leading-[180%]">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
            </div>
            <div id="pagination" className="flex gap-2 pb-12">
              <ul className="flex gap-10">
                <li className="size-[0.9375rem] rounded-full bg-white"></li>
                <li className="size-[0.9375rem] rounded-full bg-white/20"></li>
                <li className="size-[0.9375rem] rounded-full bg-white/20"></li>
                <li className="size-[0.9375rem] rounded-full bg-white/20"></li>
              </ul>
            </div>
          </div>
          <div
            role="img"
            className="flex flex-1 justify-center items-center relative"
          >
            <div className="h-[42.25rem] w-[33.705rem] relative">
              <img
                src="/assets/crew/image-douglas-hurley.webp"
                alt="moon"
                className="h-full w-full object-contain"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_bottom,_transparent_70%,_black)] z-10 bg-clip-image" />
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/assets/crew/background-crew-desktop.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover"
        priority
      />
    </div>
  );
}
