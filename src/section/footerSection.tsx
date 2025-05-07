import Footer from "@/shared/Footer";

const FooterSection = () => {
  return (
    <main className="relative w-full h-full pb-10">
      <Footer />
      <img
        loading="lazy"
        src="/pink3.png"
        className="absolute h-[300%] bottom-0 left-0"
      />
    </main>
  );
};

export default FooterSection;
