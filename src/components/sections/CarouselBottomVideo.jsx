import React from 'react';

const CarouselBottomVideo = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center my-2 px-0 py-0 md:h-screen">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen gap-[20px] md:gap-2">
        {/* Left Video Block */}
        <div className="relative flex-1 flex justify-center items-center flex-col h-[50vh] md:h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/5735d837edc341d4be6a327ae7c67af6.mp4" type="video/mp4" />
          </video>
          <a
            href="#"
            className="absolute bottom-24 md:bottom-5 left-1/2 md:left-5 transform -translate-x-1/2 md:translate-x-0 text-white border-2 border-white px-6 py-2 uppercase text-sm hover:bg-white hover:text-black transition duration-300 z-10"
          >
            Learn More
          </a>
        </div>

        {/* Right Video Block */}
        <div className="relative flex-1 flex justify-center items-center flex-col h-[50vh] md:h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://cdn.shopify.com/videos/c/o/v/6ca006be2a4541419b2cf789d98bcdf5.mp4" type="video/mp4" />
          </video>
          <a
            href="#"
            className="absolute bottom-24 md:bottom-5 left-1/2 md:left-5 transform -translate-x-1/2 md:translate-x-0 text-white border-2 border-white px-6 py-2 uppercase text-sm hover:bg-white hover:text-black transition duration-300 z-10"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CarouselBottomVideo;
