type ServiceCardProps = {
  title: string;
  description: string;
  className?: string; // optional for custom styling
};

const ServiceCard = ({
  title,
  description,
  className = "",
}: ServiceCardProps) => {
  return (
    <div
      className={`w-full md:max-w-[486px] lg:w-[486px] h-full md:max-h-[300px] lg:h-[300px] rounded-[40px] px-[24px] pt-[24px] pb-[40px] gap-[24px] bg-[#8200FF] flex flex-col items-center justify-start ${className}`}
    >
      <h3 className="w-full text-[28px] sm:text-[32px] font-playfair leading-[48px] text-center text-white mb-4">
        {title}
      </h3>
      <p className="w-full text-[16px] sm:text-[18px] font-urbanist font-light leading-[160%] text-center text-white">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
