/* eslint-disable no-self-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
// src/layouts/MainLayout.jsx
import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/shared/Navbar";
import LoadingSpinner from "./LoadingSpiner";

const MainLayout = () => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const processedImages = useRef(new WeakSet()); // Track processed images
  const observerRef = useRef<any>(null); // Store observer for cleanup
  const timeoutRef = useRef<any>(null); // Store fallback timeout
  const location = useLocation(); // Get current route

  // Debounce function to limit MutationObserver triggers
  const debounce = (func: any, wait: any) => {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    console.log(`Route changed to: ${location.pathname}`);
    // Reset states for new page
    setAllImagesLoaded(false);
    processedImages.current = new WeakSet(); // Clear processed images

    // Fallback timeout to prevent infinite loading (10 seconds)
    timeoutRef.current = setTimeout(() => {
      console.log(
        "Fallback timeout triggered, forcing allImagesLoaded to true"
      );
      setAllImagesLoaded(true);
    }, 10000);

    const totalImages = { count: 0 };
    let loadedCount = 0;

    const handleImageLoad = (event: any) => {
      loadedCount += 1;
      console.log(
        `Image loaded. Loaded: ${loadedCount}/${totalImages.count}, URL: ${
          event ? event.target.src : "unknown"
        }`
      );
      if (loadedCount === totalImages.count && totalImages.count > 0) {
        console.log("All images loaded, setting allImagesLoaded to true");
        setAllImagesLoaded(true);
      }
    };

    const processImages = () => {
      const images = Array.from(document.getElementsByTagName("img"))
        .filter((img) => !processedImages.current.has(img))
        .filter((img) => !img.classList.contains("no-lazy")); // Exclude Navbar images
      totalImages.count += images.length;
      console.log(
        `Processing ${images.length} new images. Total: ${totalImages.count}`
      );

      if (totalImages.count === 0) {
        console.log("No images found, setting allImagesLoaded to true");
        setAllImagesLoaded(true);
        return;
      }

      images.forEach((img) => {
        processedImages.current.add(img); // Mark as processed
        // Remove loading="lazy" to ensure load events fire
        if (img.hasAttribute("loading")) {
          img.removeAttribute("loading");
          console.log(`Removed loading="lazy" from image: ${img.src}`);
        }
        // Check if image is already loaded (cached or rendered)
        if (img.complete && img.naturalWidth > 0) {
          console.log(`Image already loaded: ${img.src}`);
          handleImageLoad(null); // Pass null since no event
        } else {
          console.log(`Adding load/error listeners for image: ${img.src}`);
          img.addEventListener("load", handleImageLoad);
          img.addEventListener("error", handleImageLoad);
          // Force load by setting src (in case lazy loading delayed it)
          if (img.src) {
            img.src = img.src; // Trigger load
          }
        }
      });
    };

    // Initial image processing
    processImages();

    // Debounced MutationObserver to detect new images
    const debouncedProcessImages = debounce(() => {
      const newImages = Array.from(document.getElementsByTagName("img"))
        .filter((img) => !processedImages.current.has(img))
        .filter((img) => !img.classList.contains("no-lazy"));
      if (newImages.length > 0) {
        console.log(`MutationObserver detected ${newImages.length} new images`);
        setAllImagesLoaded(false); // Reset only if new images are found
        processImages();
      } else {
        console.log("MutationObserver triggered, but no new images found");
      }
    }, 500);

    observerRef.current = new MutationObserver(debouncedProcessImages);
    observerRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Cleanup
    return () => {
      console.log("Cleaning up MainLayout useEffect");
      clearTimeout(timeoutRef.current);
      const images = document.getElementsByTagName("img");
      Array.from(images).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
        img.removeEventListener("error", handleImageLoad);
      });
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [location.pathname]); // Re-run on route change

  return (
    <div className="">
      <Navbar />
      {!allImagesLoaded && <LoadingSpinner />}
      <div style={{ display: allImagesLoaded ? "block" : "none" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
