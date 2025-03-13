import Header from "./Header.component";
import TopSectionText from "./TopSectionText.component";

const SiteDescription = () => {
  return (
    <div className="flex flex-col items-center bg-white/50 backdrop-blur-sm w-[97%] max-w-[1500px] rounded-t-[40px] p-5 gap-y-20 z-1">
      <Header />
      <TopSectionText />
    </div>
  );
};
export default SiteDescription;
