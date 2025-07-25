import React from "react";

const TwoImageBottomSection = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center p-0 mb-4">
      <div className="flex flex-col md:flex-row w-full h-screen gap-3 md:gap-2">
        {/* Left Video Block */}
        <div className="flex-1 relative flex justify-center items-center flex-col h-[50vh] md:h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/SVelegance-23.mp4"
              type="video/mp4"
            />
          </video>
          <a
            href="#"
            className="absolute bottom-24 md:bottom-5 left-1/2 md:left-5 transform -translate-x-1/2 md:translate-x-0 text-white border border-white px-6 py-3 uppercase text-sm transition duration-300 hover:bg-white hover:text-black z-10"
          >
            Learn More
          </a>
        </div>

        {/* Right Video Block */}
        <div className="flex-1 relative flex justify-center items-center flex-col h-[50vh] md:h-screen">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/SVelegance-243.mp4"
              type="video/mp4"
            />
          </video>
          <a
            href="#"
            className="absolute bottom-24 md:bottom-5 left-1/2 md:left-5 transform -translate-x-1/2 md:translate-x-0 text-white border border-white px-6 py-3 uppercase text-sm transition duration-300 hover:bg-white hover:text-black z-10"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TwoImageBottomSection;
