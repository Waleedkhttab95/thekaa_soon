"use client";


import { useTranslations } from "next-intl";
import { Button } from "../atoms/button.component";
import { useRef, useState } from "react";
const TopSectionText = () => {
  const t = useTranslations("HomePage");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = () => {
    if (window.sectionTwoFormRef) {
      window.sectionTwoFormRef.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center gap-y-6 text-center w-9/12 lg:w-[800px]">
      <h1 className="text-gradient-custom text-transparent bg-clip-text text-5xl font-bold py-1.5 mb-6">
        {t("thekaa")}
      </h1>
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-4xl font-bold">{t("section-one-description")}</h2>
        <p className="text-2xl leading-relaxed w-full text-center">
          {t("section-one-description-2")}
        </p>
      </div>
      <Button 
        className={`hidden md:block transition-all duration-300 ${isHovered ? "scale-105" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={scrollToSection}
      >
        {t("join-us")}
      </Button>
    </div>
  );
};
export default TopSectionText;
