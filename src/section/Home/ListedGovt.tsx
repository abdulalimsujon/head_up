import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";

const ListedGovt = () => {
  return (
    <div className="w-full mt-42">
      <div className="flex justify-center items-center w-full">
        <div className="w-full lg:max-w-[1400px] flex flex-col md:max-gap-[47px] lg:gap-[47px]   ">
          <div className="lg:max-w-[1400px] mx-auto w-10/12 max-w-[500px]   text-center ">
            <h1 className="font-playfair text-3xl md:text-[42px] lg:text-[64px] font-medium leading-[130%] tracking-[0%] text-[#515756]">
              Listed Government <br /> Podcast Service{" "}
              <span className="text-[#8200FF] font-playfair italic ">
                Supplier.{" "}
              </span>{" "}
            </h1>
          </div>
          <div className="w-10/12 mx-auto max-w-[1380px]   flex justify-center items-center my-[50px] lg:mb-[110px] ">
            <div className="w-full flex flex-wrap max-w-[1400px] justify-center md:justify-around  rounded-4xl border-t-[1px] border-b-[1px] border-[rgba(0,0,0,0.1)] border-solid p-1  bg-[#8200FF]">
              <div className="md:max-w-[150px] md:w-[150px]  w-[90px]  md:h-[85px]   ">
                <img loading="lazy" src={image1} alt="" />
              </div>
              <div className="md:max-w-[150px] md:w-[150px]  w-[90px]  md:h-[85px]   ">
                <img loading="lazy" src={image2} alt="" />
              </div>
              <div className="md:max-w-[150px] md:w-[150px] ] w-[90px]  md:h-[85px]  ">
                <img loading="lazy" src={image3} alt="" />
              </div>
              <div className="md:max-w-[150px] md:w-[150px] ] w-[90px]  md:h-[85px]  ">
                <img loading="lazy" src={image4} alt="" />
              </div>
              <div className="md:max-w-[150px] md:w-[150px]  w-[90px]  md:h-[85px]  ">
                <img loading="lazy" src={image5} alt="" />
              </div>
              <div className="md:max-w-[150px] md:w-[150px]  w-[90px]  md:h-[85px]  ">
                <img loading="lazy" src={image6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedGovt;
