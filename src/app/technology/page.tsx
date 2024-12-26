"use client";

import Image from "next/image";
import { useState } from "react";

interface Technology {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  image: string;
  imageAlternative: string;
}

const technologyData: Technology[] = [
  {
    id: 1,
    title: "THE TERMINOLOGY…",
    subTitle: "LAUNCH VEHICLE",
    description: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    image: "/assets/technology/image-launch-vehicle-portrait.jpg",
    imageAlternative: "/assets/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    id: 2,
    title: "THE TERMINOLOGY…",
    subTitle: "SPACEPORT",
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    image: "/assets/technology/image-spaceport-portrait.jpg",
    imageAlternative: "/assets/technology/image-spaceport-landscape.jpg",
  },
  {
    id: 3,
    title: "THE TERMINOLOGY…",
    subTitle: "SPACE CAPSULE",
    description: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    image: "/assets/technology/image-space-capsule-portrait.jpg",
    imageAlternative: "/assets/technology/image-space-capsule-landscape.jpg",
  },
];

export default function Technology() {
  const [activeDot, setActiveDot] = useState(1);
  const data: Technology | null =
    technologyData.find((v) => v.id === activeDot) || null;

  return (
    <div className="p-6 md:px-10 md:py-10 lg:pr-0 lg:pl-[10.3125rem] w-full lg:py-12 grid grid-cols-12 md:gap-[1.875rem]">
      <div className="col-span-full h-full flex flex-col gap-6">
        <div role="heading" className="flex gap-6 justify-center md:justify-start">
          <span className="font-bold text-base leading-[1.1875rem] tracking-[0.25rem] md:text-[1.25rem] md:tracking-[0.1018rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:tracking-[0.295rem] text-white/25 lg:leading-[2.125rem]">
            03
          </span>
          <p className="text-base text-white leading-[1.1875rem] tracking-[0.25rem] md:text-[1.25rem] md:tracking-[0.181525rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:tracking-[0.25rem] lg:leading-[2.125rem]">
            SPACE LAUNCH 101
          </p>
        </div>
        <div
          role="contentinfo"
          className="grid md:grid-cols-1 lg:grid-cols-2 flex-1 gap-8"
        >
          <div className="col-span-1 flex flex-col lg:flex-row flex-1 justify-center items-center gap-10 lg:gap-16 md:max-w-[32rem] lg:max-w-full md:place-self-center lg:place-self-center">
            <ul className="flex md:flex-row lg:flex-col gap-8">
              {technologyData.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveDot(item.id)}
                    className={`flex items-center justify-center size-10 md:size-[3.5rem] lg:size-[5rem] rounded-full font-['Bellefair'] text-[1.125rem] md:text-[2rem] cursor-pointer ${activeDot === item.id
                      ? "bg-white text-blue-900"
                      : "bg-transparent text-white border-[1px] border-white/50 hover:border-white"
                      }`}
                  >
                    {item.id}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col flex-1 gap-4 lg:gap-6">
              <div id="rank_and_name" className="flex flex-col gap-4 text-center md:text-left">
                <p className="font-['Bellefair'] text-[1.125rem] leading-[1.3125rem] md:text-[1.5rem] md:text-center lg:text-left lg:text-[2rem] md:leading-[1.75rem] lg:leading-[2.3125rem] text-white/50 uppercase">
                  {data?.title}
                </p>
                <p className="font-['Bellefair'] text-white md:text-center lg:text-left text-[2rem] leading-[1.75rem] md:text-[3.5rem] md:leading-[2.875rem] lg:leading-[4rem] uppercase">
                  {data?.subTitle}
                </p>
              </div>
              <div id="description" className="text-center md:text-left">
                <p className="text-blue-200 font-['Barlow'] text-[0.9375rem] leading-[1.8] md:text-center lg:text-left md:text-base lg:text-[1.125rem] md:leading-[1.8127rem] lg:leading-[2rem]">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 pt-16 lg:pt-0 -mx-[6vw] md:-mx-[5vw] lg:mx-0 lg:max-w-[38rem] lg:justify-self-end row-end-1 lg:row-end-auto">
            <img
              src={data?.image}
              alt={data?.title}
              className="h-full object-contain hidden lg:block"
            />
            <img
              src={data?.imageAlternative}
              alt={data?.title}
              className="h-full object-cover block lg:hidden"
            />
          </div>
        </div>
      </div>

      <Image
        src="/assets/technology/background-technology-desktop.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover hidden md:hidden lg:block"
        priority
      />

      <Image
        src="/assets/technology/background-technology-tablet.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover hidden md:block lg:hidden"
        priority
      />

      <Image
        src="/assets/technology/background-technology-mobile.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover block md:hidden lg:hidden"
        priority
      />
    </div>
  );
}
