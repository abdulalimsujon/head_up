import { useNavigate } from "react-router-dom";
import CustomButton from "@/components/CustomButton";
import { ClientCard } from "../client/ClientCard";

const Client = () => {
  const navigate = useNavigate();

  const clients = [
    {
      imageSrc: "/client/client10.png",
      imageAlt: "Jim Kwik",
      title: "1. DAVIDE FRANCOGOALLO",
      description:
        "OWNER immobilia and CEO @ondayproperties and has 3.4k Instagram followers.",
    },
    {
      imageSrc: "/client/client2.png",
      imageAlt: "Sales Force Team",
      title: "2. SALES FORCE TEAM",
      description:
        "They #1 AI CRM-where humans with agents drive customer success together with AI, data, and Customer 360 apps on one platform. And has 259k followers on Instagram.",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-6 mt-42 relative">
      <img
        loading="lazy"
        src="/pink.png"
        className="absolute top-[10%] w-full h-full z-[-20]"
      />
      <img
        loading="lazy"
        src="sky.png"
        className="absolute right-0 top-[10%] w-full h-full z-[-20]"
      />
      <div className="w-11/12 mx-auto lg:max-w-[1200px] flex flex-col">
        {/* Header */}
        <div className="text-center">
          <div className="text-[#8200FF] font-urbanist font-medium text-[20px] md:text-[24px] leading-[150%]">
            Clients
          </div>
          <div className="mt-2 max-w-[726px] mx-auto">
            <h1 className="font-playfair text-3xl md:text-[42px] lg:text-[64px] font-medium tracking-[0%] text-[#515756] leading-[130%]">
              Head Up Studio
            </h1>
            <h2 className="font-urbanist font-semibold italic text-3xl md:text-[42px] lg:text-[64px] leading-[130%] text-[#8200FF]">
              Clients Profile
            </h2>
          </div>
        </div>

        <div className="w-full justify-center">
          {/* Client Cards */}
          <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-col lg:flex-row gap-[40px] mt-12 md:mt-20">
              {clients.slice(0, 2).map((client, index) => (
                <ClientCard
                  key={index}
                  imageSrc={client.imageSrc}
                  imageAlt={client.imageAlt}
                  title={client.title}
                  description={client.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigate Button */}
        <div className="w-full flex justify-center mt-12 md:mt-16">
          <CustomButton
            buttonName="Explore More"
            onClick={() => navigate("/client")}
          />
        </div>
      </div>
    </div>
  );
};

export default Client;
