"use client";

import { useState, useEffect } from "react";
import { Button } from "../atoms/button.component";
import Card from "../atoms/card.component";
import SectionOneBottomPartDescription from "../molecules/SectionOneBottomPartDescription.component";

const cardsData = [
  {
    text: "ذكاء اصطناعي يرافقك خطوة بخطوة",
    color: "pink",
    svgPath: "/svgs/artificial-intelligence.svg",
  },
  {
    text: "راقب تقدمك الدراسي بنفسك",
    color: "blue",
    svgPath: "/svgs/online-learning.svg",
  },
  {
    text: "تحفيزنا مستمر لـ تتعلم بمتعــــــة",
    color: "black",
    svgPath: "/svgs/mortarboard.svg",
  },
];

const SectionOneBottomPart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("features-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div className="bg-white flex-col-center gap-y-9 px-4 sm:px-6 " 
    style={{
      paddingTop: "140px",
    }}
    id="features-section">
      <div className={`flex-col-center gap-y-5 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}>
        {/* <Button variant={"transpirentColored"} className="h-9 text-[18px] animate-pulse-subtle">
          المميزات الأساسية
        </Button> */}
        <p className="font-bold text-2xl p-4 md:text-3xl text-center">
          جميع احتياجاتك الدراسية بشكل مبتكر ، في مكان واحد
        </p>
      </div>
      <div className="w-full max-w-[1200px] flex-col-center items-center justify-center gap-y-6 xl:flex-row xl:flex-wrap gap-x-4 xl:gap-x-10">
        {cardsData.map((card, index) => (
          <div 
            key={card.color}
            className={`w-full sm:w-auto flex justify-center transition-all duration-700 delay-${index * 150} ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-20"
            }`}
          >
            <Card
              text={card.text}
              bgColor={card.color}
              svgPath={card.svgPath}
            />
          </div>
        ))}
      </div>
      <SectionOneBottomPartDescription />
    </div>
  );
};
export default SectionOneBottomPart;
