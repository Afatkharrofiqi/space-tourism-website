"use client";

import Image from "next/image";

export default function Technology() {
  return (
    <div>
      <p className="text-white">Technology</p>

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
