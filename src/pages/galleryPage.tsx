import FooterSection from "@/section/footerSection";
import ContactSection from "@/section/Home/Contact";
import Gallery from "@/section/Home/Gallery";

const GalleryPage = () => {
  return (
    <main className="w-full h-full">
      <section className="relative h-full w-full">
        <img
          loading="lazy"
          src="/pink.png"
          className="absolute w-1/2 top-[-20%] left-0 z-[-20]"
        />
        <Gallery />
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

export default GalleryPage;
