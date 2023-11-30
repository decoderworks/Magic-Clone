"use client"

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Animation = () => {
  return (
    <div className=" font-bold md:text-3xl sm:text-sm md:text-white sm:text-white">
      <div className="md:mt-0 sm:-mt-8">
      <Image className="md:h-32 sm:h-32" src="/image/purple3.svg" width={1300} height={20} alt="purple background" />
      </div>
      <div className="md:ml-64 md:-mt-24 sm:-mt-20 sm:ml-5">
      <TypeAnimation
        sequence={[
          "Magic is made for Sales",
          1000,
          "Magic is made for Marketing",
          1000,
          "Magic is made for Operations",
          1000,
          "Magic is made for Finance",
          1000,
          "Magic is made for Recruiting",
          1000,
          "Magic is made for Retention",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
      />
      </div>
    </div>
  );
};

export default Animation;