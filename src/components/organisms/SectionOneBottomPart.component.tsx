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
  return (
    <div className="bg-white flex-col-center gap-y-9 mt-36">
      <div className="flex-col-center gap-y-5">
        <Button variant={"transpirentColored"} className="h-9 text-[18px]">
          المميزات الأساسية
        </Button>
        <p className="font-bold text-2xl p-4 md:text-3xl text-center">
          جميع احتياجاتك الدراسية بشكل مبتكر ، في مكان واحد
        </p>
      </div>
      <div className="w-full flex-col-center gap-y-4 xl:flex-row gap-x-4 xl:gap-x-10">
        {cardsData.map((card) => (
          <Card
            key={card.color}
            text={card.text}
            bgColor={card.color}
            svgPath={card.svgPath}
          />
        ))}
      </div>
      <SectionOneBottomPartDescription />
    </div>
  );
};
export default SectionOneBottomPart;
