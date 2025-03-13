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
  return (
    <div
      className={`flex-center justify-start w-8/12 h-[190px] xl:w-[372px] rounded-[40px] relative overflow-hidden select-none
        hover:
        ${bgColor === "pink" && "bg-design-pink"} 
        ${bgColor === "blue" && "bg-design-blue"} 
        ${bgColor === "black" && "bg-design-black text-white"}`}
    >
      <p className="font-bold text-2xl w-1/6 sm:w-3/6 md:w-7/12 ms-4 sm:ms-7">
        {text}
      </p>
      <Image
        className="absolute top-0 right-[-55px]"
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={110}
        height={110}
      />
      <Image
        className="absolute bottom-0 end-0"
        src={svgPath}
        alt="icon"
        width={width || 127}
        height={height || 127}
      />
    </div>
  );
};
export default Card;
