type SectionHeaderProps = {
  title: string;
  text1: string;
  text2: string;
  lineBreak: boolean;
  style1: string;
  style2: string;
  style3: string;
};

const SectionHeader = ({
  title,
  text1,
  text2,
  lineBreak,
  style1,
  style2,
  style3,
}: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-6 lg:px-0">
      {/* Subtitle */}
      <div
        className={
          "text-[#8200FF] font-urbanist font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%] mb-3 " +
          style1
        }
      >
        {title}
      </div>

      {/* Main Title */}
      <div
        className={
          " text-3xl md:text-[42px] lg:text-[64px] font-medium tracking-[0%] text-[#515756] leading-[130%] max-w-[701px] text-center " +
          style2
        }
      >
        {text1} {lineBreak ? <br /> : ""}{" "}
        <span className={"text-[#7600E8] " + style3}>{text2}</span>
      </div>
    </div>
  );
};

export default SectionHeader;
