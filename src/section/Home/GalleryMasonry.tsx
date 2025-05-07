import React from "react";

interface GalleryMasonryProps {
  images: string[];
}

export const GalleryMasonry: React.FC<GalleryMasonryProps> = ({ images }) => {
  const column1 = images.slice(0, 3);
  const column2 = images.slice(3, 6);
  const column3 = images.slice(6, 9);

  return (
    <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
      {/* Column 1 */}
      <div className="flex flex-col gap-6 w-full sm:w-[48%] lg:w-[384px] mt-12">
        <div className="w-full h-[240px] md:h-[298px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column1[0]}
            alt=""
          />
        </div>
        <div className="w-full h-[260px] md:h-[358px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column1[1]}
            alt=""
          />
        </div>
        <div className="w-full h-[300px] md:h-[428px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column1[2]}
            alt=""
          />
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-6 w-full sm:w-[48%] lg:w-[384px]">
        <div className="w-full h-[300px] md:h-[358px] lg:h-[380px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column2[0]}
            alt=""
          />
        </div>
        <div className="w-full h-[300px] md:h-[428px] lg:h-[500px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column2[1]}
            alt=""
          />
        </div>
        <div className="w-full h-[240px] md:h-[358px] lg:h-[400px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column2[2]}
            alt=""
          />
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-6 w-full sm:w-[48%] lg:w-[384px] mt-12">
        <div className="w-full h-[240px] md:h-[328px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column3[0]}
            alt=""
          />
        </div>
        <div className="w-full h-[280px] md:h-[398px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column3[1]}
            alt=""
          />
        </div>
        <div className="w-full h-[300px] md:h-[428px] rounded-[24px] overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={column3[2]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
