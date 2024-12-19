"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Destination {
  title: string;
  description: string;
  distance: string;
  travelTime: string;
  image: string;
}

const destinationData: Destination[] = [
  {
    title: "moon",
    description: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance: "384.400 KM",
    travelTime: "3 DAYS",
    image: "/assets/destination/image-moon.webp",
  },
  {
    title: "mars",
    description: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`,
    distance: "225 MIL. km",
    travelTime: "9 months",
    image: "/assets/destination/image-mars.webp",
  },
  {
    title: "europa",
    description: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    distance: "628 MIL. km",
    travelTime: "3 years",
    image: "/assets/destination/image-europa.webp",
  },
  {
    title: "titan",
    description: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    distance: "1.6 BIL. km",
    travelTime: "7 years",
    image: "/assets/destination/image-titan.webp",
  },
];

export default function Destination() {
  const [activeTab, setActiveTab] = useState("moon");
  const [data, setData] = useState(
    destinationData.find((value) => value.title === activeTab),
  );

  useEffect(() => {
    setData(destinationData.find((value) => value.title === activeTab));
  }, [activeTab]);

  return (
    <div className="container mx-auto my-12 grid grid-cols-12 gap-[1.875rem]">
      <div className="col-span-full h-full flex flex-col gap-6">
        <div role="heading" className="flex gap-6">
          <span className="font-bold text-[1.75rem] tracking-[0.295rem] text-white/25">
            01
          </span>
          <p className="text-[1.75rem] tracking-[0.25rem]">
            PICK YOUR DESTINATION
          </p>
        </div>
        <div role="contentinfo" className="flex-1 flex gap-8">
          <div role="img" className="flex flex-1 justify-center items-center">
            <img src={data?.image} alt="moon" className="size-[30rem]" />
          </div>
          <div
            role="contentinfo"
            className="flex flex-1 justify-center items-center"
          >
            <div className="flex flex-col w-[27.8125rem] gap-10 justify-start items-start">
              <ul className="flex flex-row gap-8 h-[2rem] w-full">
                {[
                  { id: "moon", label: "MOON" },
                  {
                    id: "mars",
                    label: "MARS",
                  },
                  { id: "europa", label: "EUROPA" },
                  {
                    id: "titan",
                    label: "TITAN",
                  },
                ].map((item) => (
                  <li
                    key={item.id}
                    className={`font-normal text-base gap-8 leading-none tracking-[0.125rem] cursor-pointer transition duration-300 border-b-[0.1875rem] ${
                      activeTab === item.id
                        ? "border-white"
                        : "border-transparent hover:border-white/50"
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div role="textbox" className="flex flex-col gap-4">
                <p
                  role="textbox"
                  className="flex space-y-4 font-['Bellefair'] text-[6.875rem] leading-none"
                >
                  {data?.title.toUpperCase()}
                </p>
                <p
                  role="textbox"
                  className="flex space-y-4 text-blue-300 font-['Barlow'] text-[1.125rem] leading-[1.778] tracking-normal"
                >
                  {data?.description}
                </p>
              </div>
              <div className="h-[1px] w-full bg-white/25"></div>
              <div className="flex gap-6 w-full">
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-blue-300 text-[0.875rem] tracking-[0.125rem] leading-[1.0625rem]">
                    AVG. DISTANCE
                  </p>
                  <p className="font-['Bellefair'] text-[1.75rem] leading-8">
                    {data?.distance.toUpperCase()}
                  </p>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <p className="text-blue-300 text-[0.875rem] tracking-[0.125rem] leading-[1.0625rem]">
                    EST. TRAVEL TIME
                  </p>
                  <p className="font-['Bellefair'] text-[1.75rem] leading-8">
                    {data?.travelTime.toUpperCase()}
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
        className="-z-10 object-cover"
        priority
      />
    </div>
  );
}
