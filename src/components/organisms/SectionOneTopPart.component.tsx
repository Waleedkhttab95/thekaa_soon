"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SiteDescription from "../molecules/SiteDescription.component";

const SectionOneTopPart = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="flex-col-center justify-start pt-4 w-full relative overflow-hidden">
      <Image
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={500}
        height={476}
        className={`absolute right-[-300px] top-[-40px] z-0 transition-all duration-[3000ms] ease-in-out ${
          animate ? "transform-gpu animate-float-slow" : ""
        }`}
      />
      <Image
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={316}
        height={296}
        className={`absolute left-[-190px] z-0 transition-all duration-[4000ms] ease-in-out ${
          animate ? "transform-gpu animate-float-medium" : ""
        }`}
      />
      <Image
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={400}
        height={377}
        className={`absolute left-56 top-[-150px] z-0 transition-all duration-[5000ms] ease-in-out ${
          animate ? "transform-gpu animate-float-fast" : ""
        }`}
      />
      <SiteDescription />
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
  );
};
export default SectionOneTopPart;
