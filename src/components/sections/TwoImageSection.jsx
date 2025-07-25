import React from "react";

const TwoImageSection = () => {
  return (
    <section className="py-8 px-4 lg:px-20 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
        {/* Left Box */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <img
            src="/images/SVelegance-17.jpg"
            alt="Mix & Match Left"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-5 left-5 text-white font-['Playfair_Display'] text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">MIX &</h2>
            <a
              href="#"
              className="inline-block border-2 border-white text-white uppercase px-6 py-2 text-sm md:text-base hover:bg-white hover:text-black transition duration-300"
            >
              Shop Tops
            </a>
          </div>
        </div>

        {/* Right Box */}
        <div className="relative w-full md:w-1/2 overflow-hidden">
          <img
            src="/images/SVelegance-59.jpg"
            alt="Mix & Match Right"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-5 left-5 text-white font-['Playfair_Display'] text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">MATCH</h2>
            <a
              href="#"
              className="inline-block border-2 border-white text-white uppercase px-6 py-2 text-sm md:text-base hover:bg-white hover:text-black transition duration-300"
            >
              Shop Skirts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoImageSection;