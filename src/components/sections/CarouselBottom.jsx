// src/components/CarouselBottom.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    desktopImage: 'https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance_5678.jpg?v=1745284154',
    mobileImage: 'https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance_2149.jpg?v=1745284155',
    text: 'MADE IN STUDIO',
  },
  {
    desktopImage: 'https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance_2241.jpg?v=1745284154',
    mobileImage: 'https://ekyn6p-av.myshopify.com/cdn/shop/files/SVelegance_2235.jpg?v=1745284155',
    text: 'MADE IN STUDIO',
  },
];

const CarouselBottom = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative">
            {/* Desktop Image */}
            <img
              src={slide.desktopImage}
              alt={`Slide ${idx + 1}`}
              className="hidden md:block w-full h-[90vh] object-cover"
            />

            {/* Mobile Image */}
            <img
              src={slide.mobileImage}
              alt={`Mobile Slide ${idx + 1}`}
              className="block md:hidden w-full h-[75vh] object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-xl md:text-2xl font-bold">{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBottom;
