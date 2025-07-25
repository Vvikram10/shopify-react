import React from 'react';

const BottomBanner = () => {
  return (
    <section className="w-full relative overflow-hidden my-1">
      <div className="w-full h-[60vh] relative flex items-end justify-center pb-10 md:pb-40">
        {/* Desktop Image - hidden on mobile */}
        <img
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1] hidden md:block"
          src="/images/SV_Elegence58-(1).jpg"
          alt="Background Image"
        />
        
        {/* Mobile Image - hidden on desktop */}
        <img
          className="w-full h-full object-cover absolute top-0 left-0 z-[-1] block md:hidden"
          src="/images/SV_Elegence58-(1).jpg"
          alt="Mobile Background Image"
        />
        
        {/* Content Overlay */}
        <div className="relative text-center text-white z-[2] w-[80%] max-w-[900px] pb-8 md:pb-[30px]">
          <h1 className="text-3xl md:text-[42px] font-bold uppercase font-playfair-display mb-2 md:mb-[10px] text-white">
            Your Heading Here
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-4">
            <a
              href="/policies/privacy-policy"
              className="inline-block bg-transparent text-white py-2 px-4 md:py-[10px] md:px-5 uppercase border-2 border-white transition-colors duration-300 text-sm md:text-base hover:bg-white hover:text-black"
            >
              Shop Now
            </a>
            
            <a
              href=""
              className="inline-block bg-transparent text-white py-2 px-4 md:py-[10px] md:px-5 uppercase border-2 border-white transition-colors duration-300 text-sm md:text-base hover:bg-white hover:text-black"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;