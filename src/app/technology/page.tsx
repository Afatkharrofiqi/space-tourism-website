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
    <div className="md:mx-10 md:my-10 lg:mr-0 lg:ml-[10.3125rem] w-full lg:my-12 grid grid-cols-12 gap-[1.875rem]">
      <div className="col-span-full h-full flex flex-col gap-6">
        <div role="heading" className="flex gap-6">
          <span className="font-bold md:text-[1.25rem] md:tracking-[0.1018rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:tracking-[0.295rem] text-white/25 lg:leading-[2.125rem]">
            03
          </span>
          <p className="md:text-[1.25rem] md:tracking-[0.181525rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:tracking-[0.25rem] lg:leading-[2.125rem]">
            SPACE LAUNCH 101
          </p>
        </div>
        <div
          role="contentinfo"
          className="grid md:grid-cols-1 lg:grid-cols-2 flex-1 gap-8"
        >
          <div className="col-span-1 flex md:flex-col lg:flex-row flex-1 justify-center items-center md:gap-10 lg:gap-16 md:max-w-[32rem] lg:max-w-full md:place-self-center lg:place-self-start lg:place-self-center">
            <ul className="flex md:flex-row lg:flex-col gap-8">
              {technologyData.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveDot(item.id)}
                    className={`flex items-center justify-center md:size-[3.5rem] lg:size-[5rem] rounded-full font-['Bellefair'] text-[2rem] cursor-pointer ${
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
            <div className="flex flex-col flex-1 md:gap-4 lg:gap-6">
              <div id="rank_and_name" className="flex flex-col gap-4">
                <p className="font-['Bellefair'] md:text-[1.5rem] md:text-center lg:text-left lg:text-[2rem] md:leading-[1.75rem] lg:leading-[2.3125rem] text-white/50 uppercase">
                  {data?.title}
                </p>
                <p className="font-['Bellefair'] md:text-center lg:text-left text-[3.5rem] md:leading-[2.875rem] lg:leading-[4rem] uppercase">
                  {data?.subTitle}
                </p>
              </div>
              <div id="description">
                <p className="text-blue-200 font-['Barlow'] md:text-center lg:text-left md:text-base lg:text-[1.125rem] md:leading-[1.8127rem] lg:leading-[2rem]">
                  {data?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:pt-16 lg:pt-0 md:-mx-[5vw] lg:mx-0 lg:max-w-[38rem] lg:justify-self-end md:row-end-1 lg:row-end-auto">
            <img
              src={data?.image}
              alt={data?.title}
              className="h-full object-contain md:hidden lg:block"
            />
            <img
              src={data?.imageAlternative}
              alt={data?.title}
              className="h-full object-cover md:block lg:hidden"
            />
          </div>
        </div>
      </div>

      <Image
        src="/assets/technology/background-technology-desktop.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover md:hidden lg:block"
        priority
      />

      <Image
        src="/assets/technology/background-technology-tablet.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover md:block lg:hidden"
        priority
      />
    </div>
  );
}
