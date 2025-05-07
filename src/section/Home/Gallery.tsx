import { useState } from "react";

import image2 from "../../assets/Gallery/001.jpg";
import image3 from "../../assets/Gallery/01.jpg";
import image4 from "../../assets/Gallery/05.jpg";
import image6 from "../../assets/Gallery/06.jpg";
import image5 from "../../assets/Gallery/06.jpg";
import image7 from "../../assets/Gallery/08.jpg";
import image8 from "../../assets/Gallery/09.jpg";
import image9 from "../../assets/Gallery/10.jpg";
import image10 from "../../assets/Gallery/11.jpg";
import image20 from "../../assets/Gallery/12.jpg";
import image30 from "../../assets/Gallery/13.jpg";
import image40 from "../../assets/Gallery/14.jpg";
import image50 from "../../assets/Gallery/15.jpg";
import image60 from "../../assets/Gallery/16.jpg";
import image70 from "../../assets/Gallery/17.jpg";
import image80 from "../../assets/Gallery/18.jpg";
import image90 from "../../assets/Gallery/19.jpg";
import image100 from "../../assets/Gallery/20.jpg";

import A from "../../assets/Gallery/21.jpg";
import B from "../../assets/Gallery/22.jpg";
import C from "../../assets/Gallery/23.jpg";
import D from "../../assets/Gallery/24.jpg";
import E from "../../assets/Gallery/25.jpg";
import F from "../../assets/Gallery/26.jpg";
import G from "../../assets/Gallery/A.jpeg";
import H from "../../assets/Gallery/B.jpeg";

import AA from "../../assets/Gallery/C.jpeg";

import BB from "../../assets/Gallery/D.jpeg";
import CC from "../../assets/Gallery/E.jpeg";
import DD from "../../assets/Gallery/F.jpeg";
import EE from "../../assets/Gallery/G.jpeg";
import FF from "../../assets/Gallery/H.jpeg";
import GG from "../../assets/Gallery/I.jpeg";
import HH from "../../assets/Gallery/J.jpeg";

import II from "../../assets/Gallery/K.jpeg";
import JJ from "../../assets/Gallery/L.jpeg";

import { GalleryMasonry } from "./GalleryMasonry";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

const images = [
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  A,
  image100,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image20,
  image30,
  image40,
  image50,
  image60,
  image70,
  image80,
  image90,
  AA,
  BB,
  CC,
  DD,
  EE,
  FF,
  GG,
  HH,
  II,
  JJ,
];

const ITEMS_PER_PAGE = 9;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedImages = images.slice(startIndex, endIndex);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const handlePrevious = () => {
    if (hasPreviousPage) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div
      id="gallery"
      className="flex justify-center items-center px-4 md:px-8 md:mt-[140px] lg:mt-[140px] "
    >
      <div className="w-full md:max-w-[1200px] h-full">
        <div className="flex justify-center items-center text-center">
          <div>
            <div className="w-full text-[#8200FF] font-urbanist font-medium text-[20px] md:text-[24px] leading-[150%]">
              GALLERY
            </div>

            <div className="mt-2 md:max-w-[726px] mx-auto">
              <h1 className="font-playfair text-3xl md:text-[42px] lg:text-[64px] font-medium tracking-[0%] text-[#515756] leading-[130%]">
                Pictures of Our Podcast
              </h1>
              <h2 className="font-urbanist font-semibold italic text-3xl md:text-[42px] lg:text-[64px] leading-[130%] text-[#8200FF]">
                Setups
              </h2>
            </div>
          </div>
        </div>
        <GalleryMasonry images={displayedImages} />
        <div className="flex flex-col items-center gap-6 mt-12">
          {/* Previous/Next Buttons */}
          <div className="flex justify-center gap-4 border-[#8200FF]">
            <div className="w-[152px] h-[56px] rounded-[99px] border-[1.5px] border-solid p-2 gap-2 flex items-center justify-center border-[#8200FF]">
              <button
                onClick={handlePrevious}
                disabled={!hasPreviousPage}
                className={`w-[40px] h-[40px] rounded-[123.75px] border-[1.5px] border-solid border-[#8200FF] pr-[5px] pl-[5px] gap-[12.5px] flex items-center justify-center ${
                  hasPreviousPage
                    ? "bg-[#8200FF]"
                    : "bg-transparent opacity-50 cursor-not-allowed"
                }`}
                aria-label="Go to previous page"
              >
                <MoveLeftIcon
                  className={hasPreviousPage ? "text-white" : "text-[#8200FF]"}
                />
              </button>
              <div className="w-[40px] h-[30px] font-urbanist text-[#8200FF] font-medium text-[20px] leading-[30px] tracking-[0%] text-center flex items-center justify-center">
                {String(currentPage).padStart(2, "0")}
              </div>
              <button
                onClick={handleNext}
                disabled={!hasNextPage}
                className={`w-[40px] h-[40px] rounded-[123.75px] border-[1.5px] border-solid border-[#8200FF] pr-[5px] pl-[5px] gap-[12.5px] flex items-center justify-center ${
                  hasNextPage
                    ? "bg-[#8200FF]"
                    : "bg-transparent opacity-50 cursor-not-allowed"
                }`}
                aria-label="Go to next page"
              >
                <MoveRightIcon
                  className={hasNextPage ? "text-white" : "text-[#8200FF]"}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
