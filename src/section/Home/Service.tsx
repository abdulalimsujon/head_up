
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/lib/SectionTitle";

const serviceInfo = [
  {
    title: "Podcast Setup and Equipment Rental",
    description:
      "Headup delivers high-quality podcast setups directly to your location, including microphones, cameras, soundproofing, and all necessary equipment for a professional recording experience.",
  },
  {
    title: "Podcast Production",
    description:
      "We provide full-service podcast production, from planning and scripting to recording and editing. Our team ensures your content sounds polished and engaging.",
  },
  {
    title: "Live Podcast Services",
    description:
      "Headup offers live-streaming podcast services, allowing you to connect with your audience in real-time while ensuring top-notch audio and video quality.",
  },
  {
    title: "Custom Podcast Solutions",
    description:
      "Headup tailors every aspect of your podcast setup to fit your unique needs, whether you're an individual creator or a large company looking to produce branded podcasts.",
  },
];

const Service = () => {
  return (
    <div
      className="w-full flex flex-col justify-center items-cente mt-24 md:mt-34 "
      id="service"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="md:max-w-[996px] lg:w-[996px]  flex flex-col gap-[40px] ">
          <SectionHeader
            title="SERVICES"
            text1="Brief our Service"
            text2="Description"
            style3="italic font-urbanist"
            style2=""
            style1=""
            lineBreak={false}
          />
          <div className="mx-2 mt-3 ">
            <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-[24px]">
              {serviceInfo.map((s, index) => (
                <ServiceCard
                  key={index}
                  title={s.title}
                  description={s.description}
                />
              ))}
            </div>
            <div className="w-full flex justify-center items-center mt-[24px] ">
              <ServiceCard
                title="Podcast Consulting and Training"
                description="We offer expert consulting and training to help you create, manage, and grow your podcast. Whether you need help with equipment, editing, or content strategy, we’ve got you covered."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
