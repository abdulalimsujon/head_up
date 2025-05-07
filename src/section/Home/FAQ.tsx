import SectionHeader from "@/lib/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="w-full flex justify-center items-center mt-[140px] px-4 z-20">
      <div className="max-w-screen-lg w-full h-auto flex flex-col justify-center items-center">
        {/* Ensuring this div is centered */}
        <SectionHeader
          title="FAQ"
          text1="Frequently Asked "
          text2="Questions"
          style1=""
          style2=""
          style3="font-urbanist italic"
          lineBreak={false}
        />
        <div className="w-full md:max-w-[789px] lg:max-w-[889px] mt-16">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="py-4 !border-b !border-[#E9EAEA]"
            >
              <AccordionTrigger className="text-[#515756] data-[state=open]:text-[#8200FF] font-playfair text-xl md:text-[26px] lg:text-[30px] font-semibold leading-[150%] flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#00E8DC"
                  />
                </svg>
                What types of podcast setups do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-[#515756] font-urbanist md:text-[18px] lg:text-[22px] font-light leading-[160%]">
                High-quality video production services for various types of
                projects, including corporate, promotional, and creative
                content.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="py-4 !border-b !border-[#E9EAEA]"
            >
              <AccordionTrigger className="text-[#515756] data-[state=open]:text-[#8200FF] font-playfair text-xl md:text-[26px] lg:text-[30px] font-semibold leading-[150%] flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#00E8DC"
                  />
                </svg>
                How does the booking process work?
              </AccordionTrigger>
              <AccordionContent className="text-[#515756] font-urbanist md:text-[18px] lg:text-[22px] font-light leading-[160%]">
                The booking process is simple. You can either reach out via our
                contact form or call us directly. Once we confirm availability,
                we finalize the details.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="py-4 !border-b !border-[#E9EAEA]"
            >
              <AccordionTrigger className="text-[#515756] data-[state=open]:text-[#8200FF] font-playfair text-xl md:text-[26px] lg:text-[30px] font-semibold leading-[150%] flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#00E8DC"
                  />
                </svg>
                Do you offer live-streaming podcast services?
              </AccordionTrigger>
              <AccordionContent className="text-[#515756] font-urbanist md:text-[18px] lg:text-[22px] font-light leading-[160%]">
                Yes, we offer live-streaming podcast services, including
                high-quality streaming equipment, and support to ensure smooth
                broadcasts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="py-4 !border-b !border-[#E9EAEA]"
            >
              <AccordionTrigger className="text-[#515756] data-[state=open]:text-[#8200FF] font-playfair text-xl md:text-[26px] lg:text-[30px] font-semibold leading-[150%] flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#00E8DC"
                  />
                </svg>
                Is training provided for using the podcast equipment?
              </AccordionTrigger>
              <AccordionContent className="text-[#515756] font-urbanist md:text-[18px] lg:text-[22px] font-light leading-[160%]">
                Yes, we provide training for using all podcast equipment. Our
                team ensures that you're comfortable with everything before the
                live recording.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="py-4 !border-b !border-[#E9EAEA]"
            >
              <AccordionTrigger className="text-[#515756] data-[state=open]:text-[#8200FF] font-playfair text-xl md:text-[26px] lg:text-[30px] font-semibold leading-[150%] flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 12 11"
                  fill="none"
                  className="mr-2"
                >
                  <path
                    d="M6 0L7.34708 4.1459H11.7063L8.17963 6.7082L9.52671 10.8541L6 8.2918L2.47329 10.8541L3.82037 6.7082L0.293661 4.1459H4.65292L6 0Z"
                    fill="#00E8DC"
                  />
                </svg>
                What is included in your podcast production services?
              </AccordionTrigger>
              <AccordionContent className="text-[#515756] font-urbanist md:text-[18px] lg:text-[22px] font-light leading-[160%]">
                Our podcast production services include recording, editing, and
                publishing your podcast. We also offer additional services like
                sound engineering and live-streaming.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
