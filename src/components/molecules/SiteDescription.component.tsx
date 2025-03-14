"use client";

import { useEffect, useState } from "react";
import Header from "./Header.component";
import TopSectionText from "./TopSectionText.component";

const SiteDescription = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay for a better animation effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`flex flex-col items-center bg-white/50 backdrop-blur-sm w-[97%] max-w-[1500px] rounded-t-[40px] p-5 gap-y-20 z-1 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <Header />
      <TopSectionText />
    </div>
  );
};
export default SiteDescription;
