import { FaArrowRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const CustomButton = ({
  buttonName,
  onClick,
  className,
}: {
  buttonName: string;
  onClick: any;
  className?: any;
}) => {
  return (
    <button
      onClick={onClick}
      className={
        className +
        " relative overflow-hidden flex items-center border-[1.8px] border-[#8200FF] bg-[#F3E6FF] rounded-[99px]  gap-3 group py-2 ps-6 pe-2 "
      }
    >
      {/* Sliding background */}
      <div className="absolute inset-0 bg-[#8200FF] translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

      {/* Button Text */}
      <span className="font-urbanist font-semibold text-[16px] md:text-[24px] text-[#8200FF] group-hover:text-white transition-colors duration-500 z-10">
        {buttonName}
      </span>

      {/* Icon container with swap and bg change */}
      <div className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full bg-[#8200FF] group-hover:bg-white flex items-center justify-center z-10 relative transition-colors duration-500">
        {/* Default icon: MdArrowOutward */}
        <MdArrowOutward className="absolute text-white group-hover:text-[#8200FF] transition-all duration-300 opacity-100 group-hover:opacity-0 text-xl" />
        {/* Hover icon: FaArrowRight */}
        <FaArrowRight className="absolute text-[#8200FF] transition-all duration-300 opacity-0 group-hover:opacity-100" />
      </div>
    </button>
  );
};

export default CustomButton;
