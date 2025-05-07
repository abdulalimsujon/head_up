import { Link } from "react-router-dom";
import camera1 from "../../assets/Equipment/camera1.png";
import camera2 from "../../assets/Equipment/camera2.png";
import camera3 from "../../assets/Equipment/camera3.png";
import camera4 from "../../assets/Equipment/camera4.png";
import light1 from "../../assets/Equipment/light1.png";
import light2 from "../../assets/Equipment/light2.png";
import tele1 from "../../assets/Equipment/tele1.png";
import tele2 from "../../assets/Equipment/tele2.png";
import soundSystem1 from "../../assets/Equipment/soundSystem1.jpeg";
import soundSystem2 from "../../assets/Equipment/soundSystem2.jpeg";
import EquipmentCard from "@/components/ui/EquipmentCard";

const FullEquipment = () => {
  const equipmentData = [
    {
      title: "Cameras",
      bulletPoints: [
        "Three Sony FX3 Full Frame Cinema Cameras.",
        "One Sony a7R V Mirrorless Camera",
      ],
      img1Src: camera1,
      img1Alt: "Sony FX3 Digital Camera",
      img2Src: camera2,
      img2Alt: "Sony FX3 Camera",
    },
    {
      title: "Lens 16-35 mm",
      description:
        "Explore the world with exceptional G Master performance in a 16-35mm F2.8 wide-angle zoom.",
      bulletPoints: [
        "Two XA (extreme aspherical) elements w/ high surface precision.",
        "Minimum focus distance - 0.28 m (0.92 ft).",
        "Maximum Magnification ratio (x)- 0.19.",
        "Constant F2.8 max aperture maintains exposure and Depth of field.",
        "Hood Type: Petal shape, bayonet type; APERTURE BLADES: 11.",
        "Angle of View (35 mm): 107°–63°.",
      ],
      img1Src: camera4,
      img1Alt: "Sony 16-35mm Lens",
      img2Src: camera3,
      img2Alt: "Sony 200 GM Lens",
      reverse: true,
    },
    {
      title: "Lighting",
      description: "We have all the latest equipment you need.",
      bulletPoints: [
        "Aputure 300D.",
        "LED panel 1x1.",
        "Frame 233.",
        "6.5kW generator with fuel.",
        "1st AC (Focus puller).",
        "Ronin assistant/2nd AC (Camera assistant).",
        "Sparks.",
        "Light assistant.",
      ],
      img1Src: light1,
      img1Alt: "Lighting Equipment",
      img2Src: light2,
      img2Alt: "Aputure 300D Light",
    },
    {
      title: "Neewer X12 Aluminum Alloy Teleprompter",
      description:
        "Neewer 14-inch Teleprompter for iPad, Tablet, Smartphone, DSLR Cameras with Remote Control, APP Enabled.",
      bulletPoints: [
        "Aluminum alloy + high density flannel.",
        "Compatible Width of iPad/Phone Bracket: 20.1 centimeters.",
        "12.6x12.6x2.8 inches/32x32x7 centimeters.",
        "5.5 pounds/2.46 kilograms.",
      ],
      img1Src: tele2,
      img1Alt: "Neewer X12 Teleprompter with Remote",
      img2Src: tele1,
      img2Alt: "Neewer X12 Teleprompter",
      reverse: true,
    },
    {
      title: "Rodecaster Pro 2",
      bulletPoints: [
        "Fully integrated audio production studio for streamers, podcasters, musicians, and content creators.",
        "Nine individually assignable channels with six broadcast-quality physical faders.",
        "Four high-quality combo inputs for connecting microphones, instruments, and line-level devices.",
      ],
      img1Src: soundSystem1,
      img1Alt: "Rodecaster Pro 2",
      img2Src: soundSystem2,
      img2Alt: "Rodecaster Pro 2 Console",
    },
  ];

  return (
    <div className="w-full flex justify-center items-center px-4 md:px-6">
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
                alt="Back arrow"
              />
              <p className="font-urbanist font-medium text-lg md:text-[24px] leading-[150%] tracking-[0%] text-center text-[#8200FF]">
                Equipment
              </p>
            </div>
          </div>
          <div className="mt-2 max-w-[726px] mx-auto">
            <h1 className="font-playfair text-3xl md:text-[42px] lg:text-[64px] font-medium tracking-[0%] text-[#515756] leading-[130%]">
              Essential Gear
            </h1>
            <h2 className="font-urbanist font-semibold italic text-3xl md:text-[42px] lg:text-[64px] leading-[130%] text-[#8200FF]">
              Checklist
            </h2>
          </div>
        </div>

        {/* Equipment Sections */}
        <div className="flex flex-col gap-12 md:gap-[40px] mt-12 md:mt-20">
          {equipmentData.slice(0, 5).map((section, index) => (
            <EquipmentCard
              key={index}
              title={section.title}
              description={section.description}
              bulletPoints={section.bulletPoints}
              img1Src={section.img1Src}
              img1Alt={section.img1Alt}
              img2Src={section.img2Src}
              img2Alt={section.img2Alt}
              reverse={section.reverse}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullEquipment;
