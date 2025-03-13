import SectionTwoDescription from "../molecules/SectionTwoDescription.component";
import SectionTwoForm from "./SectionTwoForm.component";

const SectionTwo = () => {
  return (
    <div className="flex-col-center bg-[url('/images/last-section-bg-2.jpg')] bg-cover bg-center w-full  pt-16 pb-30 relative">
      <SectionTwoDescription />
      <SectionTwoForm />
      <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
  );
};

export default SectionTwo;
