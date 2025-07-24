import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const slides = [
  {
    desktop: "https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance_2212.jpg?v=1745284154",
    mobile: "https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance-21.jpg?v=1745282542",
    text: "MADE IN STUDIO",
  },
  {
    desktop: "https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance_2184.jpg?v=1745284154",
    mobile: "https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance-59.jpg?v=1745282542",
    text: "MADE IN STUDIO",
  },
];

const CarouselSection = () => {
  useEffect(() => {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);

  return (
    <div className="swiper mySwiper w-full h-[90vh] relative mt-1">
      <div className="swiper-wrapper">
        {slides.map((slide, index) => (
          <div className="swiper-slide relative" key={index}>
            {/* Desktop Image */}
            <img
              src={slide.desktop}
              alt={`Slide ${index + 1}`}
              className="w-full h-[90vh] object-cover hidden md:block"
            />

            {/* Mobile Image */}
            <img
              src={slide.mobile}
              alt={`Mobile Slide ${index + 1}`}
              className="w-full h-[75vh] object-cover block md:hidden"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-white text-center text-xl md:text-2xl font-bold">
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="swiper-button-next !text-white !bg-black/50 w-12 h-12 rounded-full"></div>
      <div className="swiper-button-prev !text-white !bg-black/50 w-12 h-12 rounded-full"></div>

      {/* Pagination */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default CarouselSection;
