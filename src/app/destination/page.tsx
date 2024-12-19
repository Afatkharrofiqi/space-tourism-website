"use client";

import Image from "next/image";

export default function Destination() {
  return (
    <div>
      <p className="text-white">Destination</p>

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
