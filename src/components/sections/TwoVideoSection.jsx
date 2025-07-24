import React from "react";

const TwoVideoSection = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center px-0 my-4">
      <div className="flex flex-col md:flex-row w-full h-screen gap-[20px] md:gap-[8px]">
        {/* Left Video */}
        <div className="relative flex flex-col justify-center items-center flex-1 h-[50vh] md:h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/5735d837edc341d4be6a327ae7c67af6.mp4"
              type="video/mp4"
            />
          </video>
          <a
            href="#"
            className="absolute left-1/2 bottom-24 md:left-5 md:bottom-5 transform md:translate-x-0 -translate-x-1/2 z-10 px-6 py-3 text-white uppercase border-2 border-white hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
          >
            Learn More
          </a>
        </div>

        {/* Right Video */}
        <div className="relative flex flex-col justify-center items-center flex-1 h-[50vh] md:h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://cdn.shopify.com/videos/c/o/v/030962dba35c46c9ada45ced82aa0ae8.mp4"
              type="video/mp4"
            />
          </video>
          <a
            href="#"
            className="absolute left-1/2 bottom-24 md:left-5 md:bottom-5 transform md:translate-x-0 -translate-x-1/2 z-10 px-6 py-3 text-white uppercase border-2 border-white hover:bg-white hover:text-black transition duration-300 text-sm md:text-base"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwoVideoSection;
