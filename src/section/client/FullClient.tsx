import { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "@/components/CustomButton";

import { ClientCard } from "./ClientCard";

// Main FullClient component
const FullClient = () => {
  const [visibleClients, setVisibleClients] = useState(4); // Start with 4 cards

  const clients = [
    {
      imageSrc: "client/client10.png",
      imageAlt: "Jim Kwik",
      title: "1. DAVIDE FRANCOGOALLO",
      description:
        "OWNER immobilia and CEO @ondayproperties and has 3.4k Instagram followers.",
    },
    {
      imageSrc: "client/client2.png",
      imageAlt: "Sales Force Team",
      title: "2. SALES FORCE TEAM",
      description:
        "They #1 AI CRM-where humans with agents drive customer success together with AI, data, and Customer 360 apps on one platform. And has 259k followers on Instagram.",
    },
    {
      imageSrc: "client/client3.png",
      imageAlt: "Sales Force Team",
      title: "3. SALES FORCE TEAM",
      description:
        "They #1 AI CRM-where humans with agents drive customer success together with AI, data, and Customer 360 apps on one platform. And has 259k followers on Instagram.",
    },
    {
      imageSrc: "client/client4.png",
      imageAlt: "Ministry of Economy",
      title: "4. MINISTRY OF ECONOMY",
      description:
        "Regulating the Small and Medium Enterprises (SMEs) sector and encouraging entrepreneurship. Protection of consumer rights and intellectual property rights. In addition, coordinating economic, commercial and industrial plans and programs among the different emirates of the UAE. And they have 55.7k followers Instagram.",
    },
    {
      imageSrc: "client/client5.png",
      imageAlt: "Ministry of Economy",
      title: "5. MINISTRY OF ECONOMY",
      description:
        "Regulating the Small and Medium Enterprises (SMEs) sector and encouraging entrepreneurship. Protection of consumer rights and intellectual property rights. In addition, coordinating economic, commercial and industrial plans and programs among the different emirates of the UAE. And they have 55.7k followers Instagram.",
    },
    {
      imageSrc: "client/client6.png",
      imageAlt: "Jim Kwik",
      title: "6. JIM KWIK",
      description:
        "Your Brain Coach, NYT Bestseller LIMITLESS, KwikBrain Founder @kwiklearning @kwik_formulas and Speed-Reading & Memory, Book & Show. And has 2.4 million Instagram followers.",
    },
    {
      imageSrc: "client/client7.png",
      imageAlt: "Jim Kwik",
      title: "7. JIM KWIK",
      description:
        "Your Brain Coach,NYT Bestseller LIMITLESS, KwikBrain Founder @kwiklearning @kwik_formulas and  Speed-Reading & Memory, Book & Show. And has 2.4 million Instagram followers.",
    },
    {
      imageSrc: "client/client08.png",
      imageAlt: "Jim Kwik",
      title: "8. GHANIM NASSIR AND CERTIFICATE",
      description:
        "YEMIRATI ACTOR/DIRECTOR AND HAS 72.6 THOUSAND FOLLOWERS ON INSTAGRAM",
    },
    {
      imageSrc: "client/client09.png",
      imageAlt: "Jim Kwik",
      title: "9. IZIL BEAUTY COSMETIC",
      description:
        "Beauty, cosmetic & personal care: Naturally powerful skin, hair & body care, And has 402k followers on Instagram.",
    },

    {
      imageSrc: "client/client1.png",
      imageAlt: "Sara Al Madani",
      title: "10. SARA AL MADANI",
      description:
        "Dr. Sara Al Madani is a well-known serial entrepreneur in the field of fashion, F&B, tech, marketing and more. And has 1.6 million followers on Instagram. Sara was inspired to start her own business at the age of 15. Following her success as a young entrepreneur and business woman",
    },

    {
      imageSrc: "client/client11.png",
      imageAlt: "Jim Kwik",
      title: "11. ZUBAIR SAROOKH",
      description:
        "COMEDY CONTENT CREATOR and Influencer and has 1.1 millions followers on Instagram and Facebook 1.3 millions and TikTok 840k thousands and YouTube 705k thousands.",
    },
    {
      imageSrc: "client/client12.png",
      imageAlt: "Jim Kwik",
      title: "12. ZEEBU EVENT AT MADINAT JUMAIRAH",
      description:
        "ZEEBU's all-in-one blockchain-based platform is built to meet every telecom settlement need, enabling trust less, frictionless, and superfast global transactions. Twitter X 96.4K followers.",
    },
    {
      imageSrc: "/client/client13.png",
      imageAlt: "Shabreenn Meersafeer",
      title: "13.Shabreenn Meersafeer",
      description:
        "Shabreenn meersafeer is an influencer she makes TikTok, Instag on culture, comedy, and connections. and has 267k on Instag and has 766.6k followers on TikTok.",
    },

    {
      imageSrc: "client/client14.png",
      imageAlt: "LAILLI MIRZA:",
      title: "14.LAILLI MIRZA",
      description:
        "British YouTube personality and blogger who specializes in fashion-related content. She runs the channel PintsizeFash TV and the award-winning blog PintsizeDFashionista.com and lailli mirza has followers 377.7k on YouTube and on Instag she has272k followers.",
    },
    {
      imageSrc: "client/client15.png",
      imageAlt: "ANCYTWINKLE:",
      title: "15.ANCYTWINKLE",
      description:
        "YouTube beauty guru who posts makeup, fashion and beauty videos as well as lifestyle vlogs. Her channel has earned over 850,000subscribers. And she has 231k followers on instagrm.",
    },
    {
      imageSrc: "client/client16.png",
      imageAlt: "DR. REEM ELGANZOURY:",
      title: "16.ANCYTWINKLE",
      description:
        "In 2025, Dr. Reem was crowned Miss Arab World—Egypt, and Dr. Reem's influence extends beyond traditional classrooms. Her popular online series, Improve Your Language Quickly, has gained significant traction. DR.REEM has 497k followers on Instagram",
    },
  ];

  const handleLoadMore = () => {
    setVisibleClients((prev) => prev + 4);
  };

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-6 mt-10 relative">
      <div className="w-full max-w-[1200px] flex flex-col">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mt-20 mr-10">
            <div className="w-[185px] md:max-w-[185px] h-[36px] flex items-center px-3 gap-2">
              <Link to="/">
                <p className="font-urbanist font-normal text-lg md:text-[24px] leading-[160%] tracking-[0%] text-center text-[#6E7272]">
                  Back
                </p>
              </Link>
              <img
                loading="lazy"
                src="/client/leftarrow.png"
                className="w-[50px] mx-2"
              />
              <p className="font-urbanist font-medium text-lg md:text-[24px] leading-[150%] tracking-[0%] text-center text-[#8200FF]">
                Clients
              </p>
            </div>
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

        {/* Client Cards */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[40px] mt-12 md:mt-20">
            {clients.slice(0, visibleClients).map((client, index) => (
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

        {/* Navigate Button */}
        {visibleClients < clients.length && (
          <div className="w-full flex justify-center mt-12 md:mt-16">
            <CustomButton buttonName="Explore More" onClick={handleLoadMore} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FullClient;
