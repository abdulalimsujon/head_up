/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { X } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import SectionHeader from "@/lib/SectionTitle";
import CustomButton from "@/components/CustomButton";

// Define interface for portfolio items
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  category: string;
}

// Portfolio items with titles, descriptions, YouTube video URLs, and categories
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Podcast Video",
    description: "Engaging podcast content",
    videoUrl: "https://www.youtube.com/watch?v=6OYu2bTU4Ow",
    category: "Podcast Video",
  },
  {
    id: 2,
    title: "Event Podcast 1",
    description: "Live event coverage",
    videoUrl: "https://www.youtube.com/watch?v=kRvjsU7hK-E",
    category: "Event Podcast",
  },
  {
    id: 3,
    title: "Event Podcast 2",
    description: "Event highlights",
    videoUrl: "https://www.youtube.com/watch?v=xlJ_TwXbiXY",
    category: "Event Podcast",
  },
  {
    id: 4,
    title: "Event Podcast 3",
    description: "Event recap",
    videoUrl: "https://www.youtube.com/watch?v=Sew6gwdvmWE",
    category: "Event Podcast",
  },
  {
    id: 5,
    title: "Short Videos/Reels",
    description: "Client testimonial",
    videoUrl: "https://www.youtube.com/shorts/t-2UTiZN43I",
    category: "Short Videos/Reels",
  },
  {
    id: 6,
    title: "Short Video 1",
    description: "Quick reel content",
    videoUrl: "https://www.youtube.com/shorts/t-2UTiZN43I",
    category: "Short Videos/Reels",
  },
  {
    id: 7,
    title: "Short Video 2",
    description: "Engaging short video",
    videoUrl: "https://www.youtube.com/shorts/sX3U7juHn2A",
    category: "Short Videos/Reels",
  },
  {
    id: 8,
    title: "Short Video 3",
    description: "Creative reel",
    videoUrl: "https://www.youtube.com/shorts/AoDPDQX-R_U",
    category: "Short Videos/Reels",
  },
  {
    id: 9,
    title: "Short Video 4",
    description: "Viral short content",
    videoUrl: "https://www.youtube.com/shorts/9xLK39ti9c4",
    category: "Short Videos/Reels",
  },
  {
    id: 10,
    title: "Short Video 5",
    description: "Dynamic reel",
    videoUrl: "https://www.youtube.com/shorts/2BlBv4L5Z6k",
    category: "Short Videos/Reels",
  },
  {
    id: 11,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=x_BMq0d69LM",
    category: "Podcast Video",
  },
  {
    id: 12,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=OJrIOAYlgXE",
    category: "Podcast Video",
  },
  {
    id: 13,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=-orQiCMAyUk",
    category: "Podcast Video",
  },
  {
    id: 14,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=bok6VaqFPRo",
    category: "Podcast Video",
  },
  {
    id: 15,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=d3_Vyi375pM",
    category: "Podcast Video",
  },
  {
    id: 16,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=CcoVHr4xJec&t=223s",
    category: "Podcast Video",
  },
  {
    id: 17,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=IMivGiBzFDY&t=13s",
    category: "Podcast Video",
  },
  {
    id: 18,
    title: "Podcast Video",
    description: "",
    videoUrl: "https://www.youtube.com/watch?v=Ov9yrREHtrA",
    category: "Podcast Video",
  },
  {
    id: 19,
    title: "Client Interview",
    description: "Client testimonial",
    videoUrl: "https://www.youtube.com/watch?v=srPF8wuNU_4&t",
    category: "Client Interview",
  },
  {
    id: 20,
    title: "Client Interview",
    description: "Client testimonial",
    videoUrl: "https://www.youtube.com/watch?v=WnjNp8Nup9U&t=25s",
    category: "Client Interview",
  },
  {
    id: 21,
    title: "Client Interview",
    description: "Client testimonial",
    videoUrl: "https://www.youtube.com/watch?v=V3Y56cjrOFo&t",
    category: "Client Interview",
  },
  {
    id: 22,
    title: "Client Interview",
    description: "Client testimonial",
    videoUrl: "https://www.youtube.com/watch?v=YVy-7PMBW1Y&t",
    category: "Client Interview",
  },
];

const Portfolio: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Podcast Video");
  const [thumbnailCache, setThumbnailCache] = useState<{
    [videoId: string]: string;
  }>({});
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    "Podcast Video",
    "Event Podcast",
    "Client Interview",
    "Short Videos/Reels",
  ];

  // Preload thumbnails using hidden <img> elements
  useEffect(() => {
    const container = thumbnailContainerRef.current;
    if (!container) return;

    // Initialize cache with placeholder for all video IDs
    const uniqueVideoIds = Array.from(
      new Set(
        portfolioItems.map((item) => {
          const url = item.videoUrl;
          return url.includes("v=")
            ? url.split("v=")[1]?.split("&")[0]
            : url.split("/shorts/")[1]?.split("?")[0];
        })
      )
    ).filter((id): id is string => !!id);

    const initialCache = uniqueVideoIds.reduce((acc, videoId) => {
      acc[videoId] = "/placeholder.jpg";
      return acc;
    }, {} as { [videoId: string]: string });

    setThumbnailCache(initialCache);
    console.log("Initialized thumbnail cache:", uniqueVideoIds);

    uniqueVideoIds.forEach((videoId) => {
      const urls = [
        `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`, // Fastest, may be pixelated
        `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
        `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      ];

      // Attempt all URLs concurrently with Promise.race
      urls.forEach((url, index) => {
        const img = document.createElement("img");
        img.src = url;
        img.style.display = "none";
        img.className = `thumbnail-preload thumbnail-${videoId}-${index}`;

        img.onload = () => {
          console.log(`Loaded thumbnail for ${videoId}: ${url}`);
          setThumbnailCache((prev) => {
            // Only update if current URL is better (lower index means lower quality)
            const currentIndex = urls.indexOf(
              prev[videoId] || "/placeholder.jpg"
            );
            if (currentIndex === -1 || index < currentIndex) {
              return { ...prev, [videoId]: url };
            }
            return prev;
          });
          container.appendChild(img);
        };

        img.onerror = () => {
          console.log(`Failed to load thumbnail for ${videoId}: ${url}`);
        };

        container.appendChild(img);
      });

      // Fallback to placeholder after timeout
      setTimeout(() => {
        setThumbnailCache((prev) => {
          if (prev[videoId] === "/placeholder.jpg") {
            console.log(`Timeout: Using placeholder for ${videoId}`);
            return { ...prev, [videoId]: "/placeholder.jpg" };
          }
          return prev;
        });
      }, 5000);
    });

    console.log("Thumbnails queued for preloading:", uniqueVideoIds);

    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  // Update Swiper when selectedCategory changes
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.updateSlides();
      swiperRef.current.swiper.slideTo(0, 0);
      console.log(
        `Selected Category: ${selectedCategory}, Items: ${JSON.stringify(
          filteredItems.map((item) => item.title)
        )}`
      );
    }
  }, [selectedCategory]);

  const handleWatchMore = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handleVideoClick = (url: string) => {
    setSelectedVideo(url);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  // Convert YouTube watch URL to embed URL
  const convertToEmbedUrl = (url: string) => {
    const videoId = url.includes("v=")
      ? url.split("v=")[1]?.split("&")[0]
      : url.split("/shorts/")[1]?.split("?")[0];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  // Get cached thumbnail URL
  const getYouTubeThumbnail = (url: string) => {
    const videoId = url.includes("v=")
      ? url.split("v=")[1]?.split("&")[0]
      : url.split("/shorts/")[1]?.split("?")[0];
    return thumbnailCache[videoId] || "/placeholder.jpg";
  };

  // Filter portfolio items based on selected category
  const filteredItems = useMemo(
    () => portfolioItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="py-8 sm:py-12 lg:py-16 mx-auto mt-20" id="portfolio">
      {/* Hidden container for preloading thumbnails */}
      <div ref={thumbnailContainerRef} style={{ display: "none" }}></div>
      {/* Section Header */}
      <SectionHeader
        title="PORTFOLIO"
        text1="Our Works"
        text2="Videos"
        lineBreak={false}
        style1=""
        style2=""
        style3="italic font-urbanist"
      />

      {/* Category Navigation */}
      <nav className="flex flex-wrap justify-center gap-3 mt-12 font-urbanist">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              console.log(`Button clicked: ${category}`);
            }}
            className={`px-6 py-2 rounded-full text-md md:text-2xl transition-colors ${
              selectedCategory === category
                ? "bg-[#E6FFFE] text-[#8200FF]"
                : "text-[#9B9E9E] hover:bg-gray-300"
            }`}
            aria-selected={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Swiper Carousel */}
      <div className="relative w-full mx-auto">
        <Swiper
          key={selectedCategory}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect=""
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={50}
          initialSlide={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 1.5,
            slideShadows: true,
          }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={filteredItems.length > 1}
          className="portfolio-swiper"
          ref={swiperRef}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 2.2,
              spaceBetween: 65,
            },
          }}
        >
          {filteredItems.map((item) => (
            <SwiperSlide
              key={item.id}
              className="portfolio-slide !h-[300px] md:!h-[540px] lg:!h-[800px] rounded-2xl mb-3 md:mb-0"
              onClick={() => handleVideoClick(item.videoUrl)}
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-black shadow-lg">
                <img
                  src={getYouTubeThumbnail(item.videoUrl)}
                  alt={item.title}
                  className="absolute inset-0 w-full h-9/12 my-auto object-cover"
                />
                <div className="play-button-overlay absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <img
                    src="/youtube.png"
                    className="md:!w-[60px] md:!h-[60px] lg:!w-[80px] lg:!h-[80px] !w-[50px] !h-[50px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Watch More Button */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <CustomButton
          buttonName="Watch More"
          onClick={handleWatchMore}
          className="rounded-full px-8 py-3 border-2 border-[#8B5CF6] text-[#8B5CF6] bg-transparent hover:bg-[#8B5CF6] hover:text-white transition-colors text-base font-medium"
          aria-label="View the next portfolio video"
        />
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close video"
            >
              <X size={32} />
            </button>
            <iframe
              src={convertToEmbedUrl(selectedVideo)}
              className="w-full h-full rounded-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video player"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
