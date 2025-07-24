import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/herosection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Add top padding to avoid hiding content under sticky headers */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 text-white bg-black/50 pt-20 md:pt-24">
        <h1
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
          className="text-3xl md:text-5xl mb-4 uppercase"
        >
          <em>Luxury Collection</em>
        </h1>
        <p className="text-[18px] mb-6">
          <em>Experience luxury fashion like never before.</em>
        </p>
        <a
          href="#"
          className="px-6 py-3 bg-transparent font-bold border-2 border-white text-white hover:text-black rounded-lg shadow hover:bg-white transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
