import Equipment from "./Equipment";
import Client from "./Home/Client";
import FAQ from "./Home/FAQ";

const FaqSection = () => {
  return (
    <main className="relative">
      <img loading="lazy" src="/sky.png" className="absolute top-0" />
      <img
        loading="lazy"
        src="/blue-triangle.png"
        className="absolute bottom-0 right-15 w-[66px] h-[66px] z-[-20] hidden xl:inline"
      />
      <Equipment />
      <Client />
      <FAQ />
      <img
        loading="lazy"
        src="/sky.png"
        className="h-3/4 w-1/2 absolute z-[-20] top-[70%] right-0"
      />
    </main>
  );
};

export default FaqSection;
