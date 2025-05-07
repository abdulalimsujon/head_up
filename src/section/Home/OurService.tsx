import arrow from "../../assets/arrow.png";

const OurService = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0 gap-10">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-6 md:gap-[47px]">
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="w-full max-w-[850px] mt-14 md:mt-16">
            <div className="text-center flex flex-col gap-5">
              <h2 className="font-playfair text-3xl font-semibold md:text-[42px] lg:text-[64px] leading-[130%] tracking-[0%] text-[#6E7272]">
                Your Location, Our Service.
                <br />
                Start Your Podcast Journey
                <br />
                with{" "}
                <span className="text-[#8200FF] italic font-urbanist">
                  Head Up
                </span>
              </h2>
            </div>
          </div>
          <div className="w-10/12 max-w-[892px] mx-auto font-urbanist text-lg lg:text-[24px] leading-[150%] tracking-[0%] text-center text-[#6E7272]">
            Headup brings professional podcast setups to your location,
            providing all the equipment and expertise for flawless recordings.
          </div>
        </div>
      </div>
      <div className=" md:w-[191px] max-w-[191px] h-[56px] max-h-[56px] px-[24px] pr-[8px] py-[8px] gap-[12px] rounded-[99px] flex items-center bg-[#8200FF] font-urbanist">
        <a
          href="#contact"
          className="inline-flex items-center gap-[12px] cursor-pointer"
          aria-label="Book a podcast session now"
        >
          <div className="md:w-[107px] h-[36px] text-lg md:text-[24px] leading-[36px] tracking-normal font-urbanist text-[#FFFFFF]">
            Book Now
          </div>
          <div className="h-[40px] w-[40px]">
            <img
              loading="lazy"
              className="w-full h-full rounded-full bg-[#FFFFFF]"
              src={arrow}
              alt="Arrow pointing right"
            />
          </div>
        </a>
      </div>

      <div className="fixed z-50 bottom-2 right-5 md:bottom-[5%] md:right-14 ">
        <div className="flex flex-col gap-4">
          <a
            href="mailto:info@headupstudio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform"
            aria-label="Email us"
          >
            <img
              loading="lazy"
              src="/email.png"
              className="w-12 h-12 md:w-[70px] md:h-[70px]"
              alt="Email icon"
            />
          </a>
          <a
            href="tel:+9715020170926"
            className="transform hover:scale-110 transition-transform"
            aria-label="Call us"
          >
            <img
              loading="lazy"
              src="/call.png"
              className="w-12 h-12 md:w-[70px] md:h-[70px]"
              alt="Call icon"
            />
          </a>
          <a
            href="https://wa.me/9715020170926"
            className="transform hover:scale-110 transition-transform"
            aria-label="Chat with us on WhatsApp"
          >
            <img
              loading="lazy"
              src="/whatsapp.png"
              className="w-12 h-12 md:w-[70px] md:h-[70px]"
              alt="WhatsApp icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurService;
