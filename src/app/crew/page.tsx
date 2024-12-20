"use client";

import Image from "next/image";
import { useState } from "react";

interface Crew {
  id: number;
  rank: string;
  name: string;
  description: string;
  image: string;
}

const crewData: Crew[] = [
  {
    id: 1,
    rank: "commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "assets/crew/image-douglas-hurley.webp",
  },
  {
    id: 2,
    rank: "mission specialist",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "assets/crew/image-mark-shuttleworth.webp",
  },
  {
    id: 3,
    rank: "pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "assets/crew/image-victor-glover.webp",
  },
  {
    id: 4,
    rank: "flight engineer",
    name: "Anousheh Ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "assets/crew/image-anousheh-ansari.webp",
  },
];

export default function Crew() {
  const [activeCrew, setActiveCrew] = useState(1);

  const crew: Crew | null = crewData.find((v) => v.id === activeCrew) || null;

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
              <div id="rank_and_name" className="flex flex-col gap-4">
                <p className="font-['Bellefair'] text-[2rem] leading-[2.3125rem] text-white/50 uppercase">
                  {crew?.rank}
                </p>
                <p className="font-['Bellefair'] text-[3.5rem] leading-[4rem] uppercase">
                  {crew?.name}
                </p>
              </div>
              <div id="description">
                <p className="text-blue-200 font-['Barlow'] text-[1.125rem] leading-[2rem]">
                  {crew?.description}
                </p>
              </div>
            </div>
            <div id="pagination" className="flex gap-2 pb-12">
              <ul className="flex gap-10">
                {crewData.map((v) => (
                  <li
                    key={v.id}
                    className={`size-[0.9375rem] rounded-full cursor-pointer transition-all duration-200 ${
                      activeCrew === v.id ? "bg-white" : "bg-white/20"
                    }`}
                    onClick={() => setActiveCrew(v.id)}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div
            role="img"
            className="flex flex-1 justify-center items-center relative"
          >
            <div className="h-[42.25rem] relative">
              <img
                src={crew?.image}
                alt={crew?.name}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,_transparent_70%,_#0a0d14)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/crew/background-crew-desktop.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/10 -z-5"></div>
      </div>
    </div>
  );
}
