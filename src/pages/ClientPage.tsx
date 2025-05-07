import { useEffect } from "react";
import FullClient from "@/section/client/FullClient";
import FooterSection from "@/section/footerSection";
import ContactSection from "@/section/Home/Contact";

const ClientPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full h-full">
      <section className="relative h-full w-full">
        <img
          loading="lazy"
          src="/pink.png"
          className="absolute w-1/2 top-[0%] left-0 z-[-20]"
        />
        <FullClient />
        <img
          loading="lazy"
          src="/sky.png"
          className="absolute w-1/2 bottom-[0%] right-0 z-[-20]"
        />
        <img
          loading="lazy"
          src="/sky.png"
          className="absolute w-1/2 top-[4%] right-0 z-[-20]"
        />
      </section>
      <ContactSection />
      <FooterSection />
    </main>
  );
};

export default ClientPage;
