"use client";

import Image from "next/image";
import { useState } from "react";

interface Destination {
  id: number;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
  image: string;
}

const destinationData: Destination[] = [
  {
    id: 1,
    title: "moon",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384.400 KM",
    travelTime: "3 DAYS",
    image: "/assets/destination/image-moon.webp",
  },
  {
    id: 2,
    title: "mars",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: "225 MIL. km",
    travelTime: "9 months",
    image: "/assets/destination/image-mars.webp",
  },
  {
    id: 3,
    title: "europa",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: "628 MIL. km",
    travelTime: "3 years",
    image: "/assets/destination/image-europa.webp",
  },
  {
    id: 4,
    title: "titan",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 BIL. km",
    travelTime: "7 years",
    image: "/assets/destination/image-titan.webp",
  },
];

export default function Destination() {
  const [activeTab, setActiveTab] = useState(1);

  const destination: Destination | null =
    destinationData.find((v) => v.id === activeTab) || null;

  return (
    <div className="container md:m-10 lg:mx-auto lg:my-12 grid grid-cols-12 gap-[1.875rem]">
      <div className="col-span-full h-full flex flex-col gap-6">
        <div role="heading" className="flex gap-6">
          <span className="font-bold md:text-[1.25rem] md:tracking-[0.1018rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:tracking-[0.295rem] text-white/25 lg:leading-[2.125rem]">
            01
          </span>
          <p className="md:text-[1.25rem] md:tracking-[0.181525rem] md:leading-[1.5rem] lg:text-[1.75rem] lg:tracking-[0.25rem] lg:leading-[2.125rem]">
            PICK YOUR DESTINATION
          </p>
        </div>
        <div
          role="contentinfo"
          className="grid md:grid-cols-1 lg:grid-cols-2 flex-1 gap-8"
        >
          <div
            role="img"
            className="col-span-1 flex justify-center items-center"
          >
            <img
              src={destination?.image}
              alt={destination?.title}
              className="md:size-[18.75rem] lg:size-[30rem]"
            />
          </div>
          <div
            role="contentinfo"
            className="col-span-1 flex justify-center items-center"
          >
            <div className="flex flex-col md:max-w-[32.125rem] lg:max-w-[27.8125rem] md:gap-6 lg:gap-10 justify-start items-start">
              <ul className="flex flex-row gap-8 h-[2rem] w-full md:justify-center lg:justify-start">
                {destinationData.map((item) => (
                  <li key={item.id} className="h-full">
                    <button
                      className={`font-normal text-base h-full gap-8 leading-none uppercase tracking-[0.125rem] cursor-pointer transition duration-300 border-b-[0.1875rem] ${
                        activeTab === item.id
                          ? "border-white"
                          : "border-transparent hover:border-white/50"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div role="textbox" className="flex flex-col gap-4">
                <p
                  role="textbox"
                  className="space-y-4 font-['Bellefair'] md:text-center lg:text-left md:text-[5.75rem] lg:text-[6.875rem] leading-none uppercase"
                >
                  {destination?.title}
                </p>
                <p
                  role="textbox"
                  className="space-y-4 text-blue-300 font-['Barlow'] md:text-center lg:text-left md:text-base lg:text-[1.125rem] md:leading-[1.8126] lg:leading-[1.778] tracking-normal"
                >
                  {destination?.description}
                </p>
              </div>
              <div className="h-[1px] w-full bg-white/25"></div>
              <div className="flex gap-6 w-full">
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-blue-300 md:text-center lg:text-left text-[0.875rem] tracking-[0.125rem] leading-[1.0625rem]">
                    AVG. DISTANCE
                  </p>
                  <p className="font-['Bellefair'] md:text-center lg:text-left text-[1.75rem] leading-8 uppercase">
                    {destination?.distance}
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-blue-300 md:text-center lg:text-left text-[0.875rem] tracking-[0.125rem] leading-[1.0625rem]">
                    EST. TRAVEL TIME
                  </p>
                  <p className="font-['Bellefair'] md:text-center lg:text-left text-[1.75rem] leading-8 uppercase">
                    {destination?.travelTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/assets/destination/background-destination-desktop.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover md:hidden lg:block"
        priority
      />

      <Image
        src="/assets/destination/background-destination-tablet.jpg"
        alt="Background"
        fill
        className="-z-10 object-cover md:block lg:hidden"
        priority
      />
    </div>
  );
}
