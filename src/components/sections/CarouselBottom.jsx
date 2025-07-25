// // src/components/CarouselBottom.jsx

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const slides = [
//   {
//     desktopImage: '/images/SVelegance_5678.jpg',
//     mobileImage: '/images/SVelegance_2149.jpg',
//     text: 'MADE IN STUDIO',
//   },
//   {
//     desktopImage: '/images/SVelegance_2241.jpg',
//     mobileImage: '/images/SVelegance_2235.jpg',
//     text: 'MADE IN STUDIO',
//   },
// ];

// const CarouselBottom = () => {
//   return (
//     <div className="relative w-full h-[90vh] md:h-[90vh] overflow-hidden">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         loop={true}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx} className="relative">
//             {/* Desktop Image */}
//             <img
//               src={slide.desktopImage}
//               alt={`Slide ${idx + 1}`}
//               className="hidden md:block w-full h-[90vh] object-cover"
//             />

//             {/* Mobile Image */}
//             <img
//               src={slide.mobileImage}
//               alt={`Mobile Slide ${idx + 1}`}
//               className="block md:hidden w-full h-[75vh] object-cover"
//             />

//             {/* Text Overlay */}
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
//               <p className="text-xl md:text-2xl font-bold">{slide.text}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CarouselBottom;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const slides = [
//   {
//     desktopImage: '/images/SVelegance_5678.jpg',
//     mobileImage: '/images/SVelegance_2149.jpg',
//     text: 'MADE IN STUDIO',
//   },
//   {
//     desktopImage: '/images/SVelegance_2241.jpg',
//     mobileImage: '/images/SVelegance_2235.jpg',
//     text: 'MADE IN STUDIO',
//   },
// ];

// const CarouselBottom = () => {
//   return (
//     <div className="carousel-bottom-wrapper relative w-full h-[90vh] md:h-[90vh] overflow-hidden z-0">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         loop={true}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         navigation
//         pagination={{ clickable: true }}
//         className="w-full h-full"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx} className="relative">
//             <img
//               src={slide.desktopImage}
//               alt={`Slide ${idx + 1}`}
//               className="hidden md:block w-full h-[90vh] object-cover"
//             />
//             <img
//               src={slide.mobileImage}
//               alt={`Mobile Slide ${idx + 1}`}
//               className="block md:hidden w-full h-[75vh] object-cover"
//             />
//             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
//               <p className="text-xl md:text-2xl italic font-bold">{slide.text}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default CarouselBottom;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    desktopImage: '/images/SVelegance_5678.jpg',
    mobileImage: '/images/SVelegance_2149.jpg',
    text: 'MADE IN STUDIO',
  },
  {
    desktopImage: '/images/SVelegance_2241.jpg',
    mobileImage: '/images/SVelegance_2235.jpg',
    text: 'MADE IN STUDIO',
  },
];

const CarouselBottom = () => {
  return (
    <>
      <style>{`
        /* Reduce arrow size */
        .carousel-bottom-wrapper .swiper-button-next::after,
        .carousel-bottom-wrapper .swiper-button-prev::after {
          font-size: 14px;
        }
        
        /* Adjust pagination dots position from the bottom if needed */
        .carousel-bottom-wrapper .swiper-pagination {
           bottom: 20px !important; /* आप इस मान को अपनी आवश्यकता के अनुसार समायोजित कर सकते हैं */
        }
      `}</style>

      {/* STEP 1: Changed height for mobile to h-[75vh] and for desktop to md:h-[90vh] */}
      <div className="carousel-bottom-wrapper sm:my-2 my-1 relative w-full h-[75vh] md:h-[90vh] overflow-hidden z-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: '.carousel-next',
            prevEl: '.carousel-prev',
          }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx} className="relative">
              {/* Desktop Image */}
              <img
                src={slide.desktopImage}
                alt={`Slide ${idx + 1}`}
                className="hidden md:block w-full h-full object-cover"
              />

              {/* Mobile Image */}
              {/* STEP 2: Changed mobile image height from h-[75vh] to h-full */}
              <img
                src={slide.mobileImage}
                alt={`Mobile Slide ${idx + 1}`}
                className="block md:hidden w-full h-full object-cover"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
                <p className="text-xl md:text-2xl italic font-bold">{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Arrows */}
          <div className="carousel-prev swiper-button-prev !text-white !bg-black/50 w-7 h-7 rounded-full flex items-center justify-center z-10" />
          <div className="carousel-next swiper-button-next !text-white !bg-black/50 w-7 h-7 rounded-full flex items-center justify-center z-10" />
        </Swiper>
      </div>
    </>
  );
};

export default CarouselBottom;
