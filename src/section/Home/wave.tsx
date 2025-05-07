import { useEffect, useState } from "react";

const Wave = () => {
  const [barCount, setBarCount] = useState(30);

  useEffect(() => {
    const updateBarCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBarCount(20);
      } else if (width >= 640 && width < 1024) {
        setBarCount(35);
      } else {
        setBarCount(50);
      }
    };

    updateBarCount();
    window.addEventListener("resize", updateBarCount);

    return () => window.removeEventListener("resize", updateBarCount);
  }, []);

  return (
    <div className="w-full flex justify-center items-center mt-5 md:mt-20">
      <div className="flex justify-center items-center flex-col">
        <div className="md:max-w-[655.83px] lg:w-[655.83px] md:max-h-[100px] lg:h-[100px] mt-[30px]">
          <div className=" flex justify-center">
            <div className="flex items-center space-x-2">
              {Array.from({ length: barCount }).map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-[#7DD3FC] rounded-full animate-pulse"
                  style={{
                    height: `${Math.random() * 50 + 10}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wave;
