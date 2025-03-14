import Image from "next/image";
import { Button } from "../atoms/button.component";
import { useState } from "react";

const SectionOneBottomPartDescription = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = () => {
    if (window.sectionTwoFormRef) {
      window.sectionTwoFormRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-[1196px] md:h-[411px] max-w-full bg-[url('/images/first-section-sub-section-bg.jpg')] 
    bg-cover bg-center mt-36 text-white flex-col-center md:flex-row justify-between p-8 
    "
    >
      <div className=" flex flex-col justify-center gap-y-7 h-full pt-4 ">
        <div className="flex flex-col items-center md:items-start gap-y-7">
          <h3 className="font-bold text-2xl md:text-4xl text-center md:text-start">
            خطواتك الأولى نحو التعليم الذكي تبدأ من هنــــــا
          </h3>
          <p className="font-medium text-lg md:text-2xl text-center md:text-start">
            لا تفوّت فرصتك لتحظى بتجربة  ذكاء قبل الجميع!
          </p>
        </div>
        <Button className="self-center md:self-auto" variant={"transpirent"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={scrollToSection}
       >
          سجل معنا الآن
        </Button>


      </div>
      <Image src={"/svgs/book.svg"} alt="book" width={332} height={280} />
    </div>
  );
};
export default SectionOneBottomPartDescription;
