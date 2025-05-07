interface ClientCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export const ClientCard = ({
  imageSrc,
  imageAlt,
  title,
  description,
}: ClientCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full mx-auto h-[300px] md:w-[580px] max-w-full md:h-[494px] md:max-h-[494px] rounded-[64px] p-[4px] bg-gradient-to-r from-[#00FFF2] to-[#8200FF]">
        <div className="w-full h-full rounded-[64px] overflow-hidden ">
          <img
            loading="lazy"
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-[64px]"
          />
        </div>
      </div>
      <div className="w-full max-w-[580px] h-auto pt-[12px] gap-[12px] flex flex-col">
        <div className="w-full max-w-[580px] h-auto">
          <p className="font-playfair-display font-semibold text-xl md:text-[32px]  leading-[150%] tracking-[0%] text-[#8200FF]">
            {title}
          </p>
        </div>
        <div className="w-full max-w-[580px] h-auto">
          <p className="font-urbanist font-normal text-[18px] leading-[160%] tracking-[0%] text-[#515756]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
