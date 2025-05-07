import OurService from "./Home/OurService";
import Wave from "./Home/wave";
import ListedGovt from "./Home/ListedGovt";

const Header = () => {
  return (
    <main className="w-full h-full relative">
      <img
        loading="lazy"
        src="/pink.png"
        className="absolute h-full w-3/4 top-1/10"
      />
      <img
        loading="lazy"
        src="/sky.png"
        className="absolute h-full w-3/4 top-[-20%] right-0"
      />
      <div className="bg-[url('./shapes/header-particles.png')] bg-cover bg-no-repeat">
        <Wave />
        <div className="bg-[#e6fffe] flex mt-5 flex-col lg:flex-row gap-5 lg:gap-10 items-center justify-center mx-auto w-10/12 md:w-7/12 max-w-[550px] py-2 px-6 text-lg font-urbanist text-[#515756]">
          <div className="flex fle gap-2">
            <img
              loading="lazy"
              src="/call-icon.png"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="text-sm lg:text-lg">+05020170926</span>
          </div>
          <div className="flex gap-2">
            <img
              loading="lazy"
              src="/mail-icon.png"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="text-sm lg:text-lg">info@headupstudio.com</span>
          </div>
        </div>
        <div className="relative w-full max-w-[1200px] mx-auto">
          <OurService />
          <img
            loading="lazy"
            src="/shapes/star.png"
            className="absolute w-[40px] lg:w-[50px] top-[40%] md:left-[15%] lg:left-[0%] md:top-[45%] translate-x-[50%] translate-y-[50%]"
          />
          <img
            loading="lazy"
            src="/shapes/triangle.png"
            className="absolute w-[40px] lg:w-[50px] right-[10%] md:right-[20%] lg:right-[10%] top-[0%] md:top-[37%] translate-x-[50%] translate-y-[50%]"
          />
        </div>
      </div>
      <ListedGovt />
    </main>
  );
};

export default Header;
