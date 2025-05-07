import Gallery from "./Home/Gallery";
import Portfolio from "./Home/Portfolio";
import Service from "./Home/Service";

const Middle = () => {
  return (
    <main className="relative">
      <div className="relative">
        <img
          loading="lazy"
          src="/pink2.png"
          className="w-7/10 absolute right-0 z-[-10]  bottom-[15%]"
        />
        <img
          loading="lazy"
          src="/sky2.png"
          className="w-7/10 absolute left-0 z-[-10]  bottom-[-5%]"
        />
        <div className="relative">
          <img
            loading="lazy"
            src="/shapes/particles2.png"
            className="absolute top-1/3 z-[-50] "
          />
          <Gallery />
          <div className="relative">
            <img
              loading="lazy"
              src="/green-star.png"
              className="absolute top-[10%] left-10 z-[-50] w-[76px] h-[76px]"
            />
            <Service />
            <img
              loading="lazy"
              src="/sky.png"
              className="w-10/12 top-0 absolute right-0 z-[-10]"
            />
            <img
              loading="lazy"
              src="/green-star.png"
              className="absolute bottom-[55%] right-10 z-[-50] w-[76px] h-[76px]"
            />
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src="/shapes/particles2.png"
        className="absolute top-6/10 z-[-50] "
      />
      <nav className="flex gap-5 items-center justify-between"></nav>
      <div className="">
        <Portfolio />
        <img
          loading="lazy"
          src="/pink.png"
          className="absolute top-6/10 z-[-100]"
        />
      </div>
    </main>
  );
};

export default Middle;
