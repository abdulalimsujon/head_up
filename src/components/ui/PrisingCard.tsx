import { FC } from "react";

interface PrisingCardProps {
  name: string;
  price: number;
  features: string[];
  duration: number;
}

const PrisingCard: FC<PrisingCardProps> = ({
  name,
  price,
  features,
  duration,
}) => {
  return (
    <div className="bg-[#E6FFFE] flex rounded-[40px] w-full border border-[#33fff5]">
      <div className="flex flex-col w-full justify-between m-[40px]">
        <div>
          <div>
            <div>
              <div className="h-[36px] font-urbanist text-[24px] leading-[150%] tracking-[0%]">
                {name}
              </div>
              <div className="flex items-baseline border-b pb-2">
                <span className="text-5xl md:text-[64px] font-urbanist text-[#515756] leading-[130%]">
                  {price.toFixed(2)}
                </span>
                <span className="text-md md:text-[20px] text-[#8200FF] ml-1">
                  AED/{duration} Hours
                </span>
              </div>
              <div className="h-[83px]">
                <div className="h-[29px] font-urbanist font-normal text-[18px] leading-[160%] tracking-[0%] mt-3">
                  Choose as per your needs
                </div>
                <div className="mt-3 h-[30px] font-urbanist font-medium text-[20px] leading-[150%] tracking-[0%] text-[#8200FF]">
                  Audio + Video
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col mt-2">
            <div>
              {features.map((feature, index) => (
                <div key={index} className="h-[29px] flex gap-2">
                  <div className="text-[#00E8DC] text-[12px] w-[12px] h-[12px]">
                    ★
                  </div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <button className="border-[#8200FF] text-[#8200FF] font-urbanist text-sm mt-5 md:text-[24px] bg-[#F3E6FF] h-[52px] px-[12px] py-[4px] md:px-[24px] md:py-[8px] gap-[12px] border-[1.5px] rounded-[99px] box-border">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrisingCard;
