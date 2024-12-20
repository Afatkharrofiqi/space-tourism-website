"use client";

import Image from "next/image";
import { useState } from "react";

interface Technology {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

const technologyData: Technology[] = [
  {
    id: 1,
    title: "THE TERMINOLOGY…",
    subTitle: "LAUNCH VEHICLE",
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image: "/assets/technology/image-launch-vehicle-portrait.jpg",
  },
  {
    id: 2,
    title: "THE TERMINOLOGY…",
    subTitle: "SPACEPORT",
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image: "/assets/technology/image-spaceport-portrait.jpg",
  },
  {
    id: 3,
    title: "THE TERMINOLOGY…",
    subTitle: "SPACE CAPSULE",
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image: "/assets/technology/image-space-capsule-portrait.jpg",
  },
];

export default function Technology() {
  const [activeDot, setActiveDot] = useState(1);
  const data: Technology | null =
    technologyData.find((v) => v.id === activeDot) || null;

  return (
    <div className="ml-[10.3125rem] w-full my-12 grid grid-cols-12 gap-[1.875rem]">
      <div className="col-span-full h-full flex flex-col gap-6">
        <div role="heading" className="flex gap-6">
          <span className="font-bold text-[1.75rem] tracking-[0.295rem] text-white/25 leading-[2.125rem]">
            03
          </span>
          <p className="text-[1.75rem] tracking-[0.25rem] leading-[2.125rem]">
            SPACE LAUNCH 101
          </p>
        </div>
        <div role="contentinfo" className="flex-1 flex gap-8">
          <div className="flex flex-1 justify-center items-center gap-16">
            <ul className="flex flex-col gap-8">
              {technologyData.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveDot(item.id)}
                    className={`flex items-center justify-center size-[5rem] rounded-full font-['Bellefair'] text-[2rem] cursor-pointer ${
                      activeDot === item.id
                        ? "bg-white text-blue-900"
                        : "bg-transparent text-white border-[1px] border-white/50 hover:border-white"
                    }`}
                  >
                    {item.id}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col flex-1 gap-6">
              <div id="rank_and_name" className="flex flex-col gap-4">
                <p className="font-['Bellefair'] text-[2rem] leading-[2.3125rem] text-white/50 uppercase">
                  {data?.title}
                </p>
                <p className="font-['Bellefair'] text-[3.5rem] leading-[4rem] uppercase">
                  {data?.subTitle}
                </p>
              </div>
              <div id="description">
                <p className="text-blue-200 font-['Barlow'] text-[1.125rem] leading-[2rem]">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[38rem]">
            <img
              src={data?.image}
              alt={data?.title}
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>

      <Image
        src="/assets/technology/background-technology-desktop.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover"
        priority
      />
    </div>
  );
}
