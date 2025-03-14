"use client";

import { useState, useEffect } from "react";
import SectionOneBottomPart from "./SectionOneBottomPart.component";
import SectionOneTopPart from "./SectionOneTopPart.component";

const SectionOne = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-44 relative">
      <div 
        className="fixed inset-0 bg-[url('/images/first-section-bg.jpg')] bg-cover bg-center w-full h-screen z-[-1]"
        style={{ 
          transform: `translateY(${scrollY * 0.15}px)`,
          opacity: Math.max(0, 1 - scrollY * 0.002)
        }}
      ></div>
      <SectionOneTopPart />
      <SectionOneBottomPart />
    </div>
  );
};
export default SectionOne;
