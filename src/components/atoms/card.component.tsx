"use client";

import { useState } from "react";
import Image from "next/image";

type CardProps = {
  text: string;
  bgColor: string;
  svgPath: string;
  width?: number;
  height?: number;
};
// todo: ask chatgpt how can I use clsx for conditional styles instead of this...
const Card = ({ text, bgColor, svgPath, width, height }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center md:justify-start w-10/12 sm:w-8/12 h-[190px] xl:w-[372px] rounded-[40px] relative overflow-hidden select-none mx-auto md:mx-0
        transition-all duration-300 ease-in-out transform ${isHovered ? "scale-105 shadow-lg" : ""}
        ${bgColor === "pink" && "bg-design-pink"} 
        ${bgColor === "blue" && "bg-design-blue"} 
        ${bgColor === "black" && "bg-design-black text-white"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="font-bold text-xl sm:text-2xl w-3/5 sm:w-3/6 md:w-7/12 text-center md:text-start ms-0 sm:ms-7 transition-all duration-300 z-10">
        {text}
      </p>
      <Image
        className={`absolute top-0 right-[-55px] transition-all duration-500 ${
          isHovered ? "rotate-12" : ""
        }`}
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={110}
        height={110}
      />
      <Image
        className={`absolute bottom-0 end-0 transition-all duration-500 ${
          isHovered ? "scale-110 translate-y-[-5px]" : ""
        }`}
        src={svgPath}
        alt="icon"
        width={width || 127}
        height={height || 127}
      />
    </div>
  );
};
export default Card;
