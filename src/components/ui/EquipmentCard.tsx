import { Star } from "lucide-react";

interface EquipmentSectionProps {
  title: string;
  description?: string;
  bulletPoints: string[];
  img1Src: string;
  img1Alt: string;
  img2Src: string;
  img2Alt: string;
  reverse?: boolean;
}

const EquipmentCard = ({
  title,
  description,
  bulletPoints,
  img1Src,
  img1Alt,
  img2Src,
  img2Alt,
  reverse = false,
}: EquipmentSectionProps) => {
  return (
    <div
      className={`w-full flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-12  mb-16 md:mb-20 `}
    >
      {/* Text Content */}
      <div className="w-full lg:w-1/2 max-w-lg flex flex-col ">
        <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-purple-700">
          {title}
        </h3>

        {description && (
          <p className="font-urbanist text-base md:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex flex-col gap-3 mt-2">
          {bulletPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <Star
                className="text-teal-500 h-5 w-5 flex-shrink-0 mt-1"
                fill="#00E8DC"
                stroke="#00E8DC"
              />
              <p className="font-urbanist text-base md:text-lg text-gray-600">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="w-full h-full lg:w-1/2 flex flex-col sm:flex-row gap-4 relative ">
        <div
          className={`${
            reverse ? "sm:order-2" : "sm:order-1"
          } w-full sm:w-2/3 z-10`}
        >
          <img
            loading="lazy"
            src={img1Src}
            alt={img1Alt}
            className="w-full h-80 object-cover rounded-2xl lg:rounded-3xl shadow-md"
          />
        </div>

        <div
          className={`${
            reverse ? "sm:order-1 sm:-mr-12" : "sm:order-2 sm:-ml-12"
          } w-full sm:w-1/2 sm:self-center`}
        >
          <img
            loading="lazy"
            src={img2Src}
            alt={img2Alt}
            className="w-full h-64 object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
