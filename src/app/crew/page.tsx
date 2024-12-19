"use client";

import Image from "next/image";

export default function Crew() {
  return (
    <div className="p-32 flex gap-2">
      <p className="text-white">Crew</p>

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
