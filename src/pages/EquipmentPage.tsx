import FullEquipment from "@/section/Equipment/FullEquipment";
import FooterSection from "@/section/footerSection";
import ContactSection from "@/section/Home/Contact";
import { useEffect } from "react";

const EquipmentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full h-full">
      <section className="relative h-full w-full mt-10">
        <img
          loading="lazy"
          src="/pink.png"
          className="absolute w-1/2 top-[-20%] left-0 z-[-20]"
        />
        <FullEquipment />
        <img
          loading="lazy"
          src="/sky.png"
          className="absolute w-1/2 bottom-[-50%] right-0 z-[-20]"
        />
        <img
          loading="lazy"
          src="/sky.png"
          className="absolute w-1/2 top-[-4%] right-0 z-[-20]"
        />
      </section>
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default EquipmentPage;
