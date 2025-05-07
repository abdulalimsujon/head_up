import FaqSection from "@/section/FaqSection";
import FooterSection from "@/section/footerSection";
import Header from "@/section/header";
import Contact from "@/section/Home/Contact";
import Middle from "@/section/middle";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full">
          <Header />
          <Middle />
          <FaqSection />
          <Contact />
          <FooterSection />
        </div>
      </div>
    </>
  );
};

export default HomePage;
