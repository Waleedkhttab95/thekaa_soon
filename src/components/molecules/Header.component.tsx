"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Locales } from "@/types/locale.types";
import { useState, useEffect } from "react";

const Header = () => {
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const scrollToSection = () => {
  //   if (window.sectionTwoFormRef) {
  //     window.sectionTwoFormRef.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div 
      className={`flex justify-between items-center w-full px-6 py-3 rounded-[40px] border border-[#231F20] transition-all duration-500 ${
        isScrolled ? "shadow-lg bg-white" : "bg-transparent"
      }`}
    >
      <div className="transition-transform duration-300 hover:scale-105">
        {locale === Locales.ar ? (
          <Image src={"/svgs/logo-ar.svg"} alt="logo" width={94} height={26} />
        ) : (
          <Image src={"svgs/logo-en.svg"} alt="logo" width={94} height={26} />
        )}
      </div>
      <Image
        className="md:hidden transition-transform duration-300 hover:scale-110"
        src={"svgs/sm-logo.svg"}
        alt="logo"
        width={35}
        height={35}
      />
    </div>
  );
};

export default Header;
