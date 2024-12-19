"use client";

import Image from "next/image";
import { useState } from "react";

export default function Destination() {
  const [activeTab, setActiveTab] = useState("moon");

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
            <img
              src="/assets/destination/image-moon.webp"
              alt="moon"
              className="size-[30rem]"
            />
          </div>
          <div
            role="contentinfo"
            className="flex flex-1 justify-center items-center border-red-500 border-2"
          >
            <div className="flex flex-col w-[27.8125rem] gap-10 justify-start items-start">
              <ul className="flex flex-row gap-12">
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
                    className={`flex h-full text-base gap-3 items-center tracking-[2px] cursor-pointer transition duration-300 ${
                      activeTab === item.id
                        ? "border-b-2 border-white"
                        : "border-b-2 border-transparent"
                    } hover:border-white/50`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
              <div
                role="textbox"
                className="flex space-y-4 font-['Bellefair'] text-[6rem] leading-none"
              >
                MOON
              </div>
              <div
                role="textbox"
                className="flex space-y-4 text-blue-300 font-['Barlow'] text-lg leading-[180%] tracking-normal"
              >
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
              <div className="h-[1px] w-full bg-white/25"></div>
              <div className="flex gap-6 justify-between">
                <div className="border-2 border-red-500">
                  <p>AVG. DISTANCE</p>
                  <p>384,400 KM</p>
                </div>
                <div className="border-2 border-red-500">
                  <p>EST. TRAVEL TIME</p>
                  <p>3 DAYS</p>
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
