// import React, { useEffect } from 'react';

// const AnnouncementSection = () => {
//   // Initialize Swiper on mobile
//   useEffect(() => {
//     const initializeSwiper = () => {
//       if (window.innerWidth <= 768) {
//         const Swiper = require('swiper/bundle');
//         new Swiper.default('.myCustomSwiper', {
//           slidesPerView: 1,
//           spaceBetween: 20,
//           pagination: {
//             el: '.custom-swiper-pagination',
//             clickable: true,
//           },
//         });
//       }
//     };

//     // Load Swiper dynamically
//     if (typeof window !== 'undefined' && window.innerWidth <= 768) {
//       import('swiper/bundle').then(initializeSwiper);
//     }

//     // Reinitialize on window resize
//     const handleResize = () => {
//       if (window.innerWidth <= 768 && !document.querySelector('.myCustomSwiper').swiper) {
//         initializeSwiper();
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const features = [
//     {
//       icon: '/images/leaf.svg',
//       title: 'MADE IN CANADA',
//       link: '',
//     },
//     {
//       icon: '/images/gender.svg',
//       title: 'WOMEN OWNED',
//       link: '',
//     },
//     {
//       icon: '/images/sewing.svg',
//       title: 'MADE TO MEASURE',
//       link: '',
//     },
//   ];

//   return (
//     <section className="w-full py-3 bg-white font-playfair-display">
//       <div className="max-w-[1100px] mx-auto">
//         <div className="myCustomSwiper md:flex md:gap-12 md:justify-center md:items-center">
//           <div className="custom-swiper-wrapper md:flex md:flex-nowrap">
//             {features.map((feature, index) => (
//               <div key={index} className="custom-swiper-slide flex flex-col items-center min-w-[250px] px-4 md:flex-1">
//                 <div className="w-20 h-20 bg-[#f5ebdf] rounded-full flex items-center justify-center mb-2">
//                   <img src={feature.icon} alt="Icon" className="w-10 h-10" />
//                 </div>
//                 <h3 className="text-xl font-normal font-playfair-display mb-2">{feature.title}</h3>
//                 <a
//                   href={feature.link}
//                   className="text-base font-normal font-avenir-next text-black relative hover:after:w-1/2 after:block after:w-full after:h-px after:bg-black after:mt-1 after:transition-all after:duration-300"
//                 >
//                   Learn More
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Pagination Dots (for Mobile) */}
//           <div className="custom-swiper-pagination relative mt-3 md:hidden">
//             {/* Swiper will add bullets here dynamically */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnnouncementSection;

import React from 'react';

const AnnouncementSection = () => {
  const features = [
    {
      icon: '/images/leaf.svg',
      title: 'MADE IN CANADA',
      link: '#',
    },
    {
      icon: '/images/gender.svg',
      title: 'WOMEN OWNED',
      link: '#',
    },
    {
      icon: '/images/sewing.svg',
      title: 'MADE TO MEASURE',
      link: '#',
    },
  ];

  return (
    <section className="w-full py-8 bg-white font-playfair-display">
      <div className="max-w-[1100px] mx-auto">
        {/* On mobile, this will stack items. On desktop, it will use flexbox. */}
        <div className="md:flex md:gap-12 md:justify-center md:items-center">
          <div className="md:flex md:flex-nowrap">
            {features.map((feature, index) => (
              // Added py-5 for vertical padding on mobile, which is removed on desktop (md:py-0)
              <div
                key={index}
                className="flex flex-col items-center min-w-[250px] px-4 py-5 md:py-0 md:flex-1"
              >
                <div className="w-20 h-20 bg-[#f5ebdf] rounded-full flex items-center justify-center mb-2">
                  <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-normal font-playfair-display mb-2">{feature.title}</h3>
                <a
                  href={feature.link}
                  className="text-base font-normal font-avenir-next text-black relative hover:after:w-1/2 after:block after:w-full after:h-px after:bg-black after:mt-1 after:transition-all after:duration-300"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;