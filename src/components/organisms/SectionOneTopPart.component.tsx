import Image from "next/image";
import SiteDescription from "../molecules/SiteDescription.component";

const SectionOneTopPart = () => {
  return (
    <div className="flex-col-center justify-start pt-4 bg-[url('/images/first-section-bg.jpg')] bg-cover bg-center w-full relative overflow-hidden">
      <Image
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={500}
        height={476}
        className="absolute right-[-300px] top-[-40px] z-0"
      />
      <Image
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={316}
        height={296}
        className="absolute left-[-190px] z-0"
      />
      <Image
        src={"/svgs/transparent-sm-logo.svg"}
        alt="logo"
        width={400}
        height={377}
        className="absolute left-56 top-[-150px] z-0"
      />
      <SiteDescription />
      <div className="absolute bottom-0 left-0 w-full h-60 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
  );
};
export default SectionOneTopPart;
