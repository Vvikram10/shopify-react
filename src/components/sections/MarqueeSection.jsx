import React from 'react';

const logos = [
  "//ekyn6p-av.myshopify.com/cdn/shop/files/Screenshot_2025-02-27_at_12.00.41_PM-removebg-preview.png?v=1745286805",
  "//ekyn6p-av.myshopify.com/cdn/shop/files/Screenshot_2025-02-27_at_12.03.19_PM-removebg-preview.png?v=1745286805",
];

const MarqueeSection = () => {
  return (
    <section className="py-2 bg-white overflow-hidden">
      {/* Custom animation via internal style */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }

          .animate-marquee {
            display: flex;
            animation: marquee 20s linear infinite;
            width: max-content;
            align-items: center;
          }

          .marquee-container {
            display: flex;
            width: 100%;
            overflow: hidden;
            position: relative;
          }

          .logo-item {
            flex-shrink: 0;
            margin: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-img {
            max-height: 30px;
            width: auto;
            object-fit: contain;
          }
        `}
      </style>

      <div className="marquee-container">
        <div className="animate-marquee">
          {/* Double the items for seamless looping */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="logo-item">
              <img
                src={logo}
                alt="Brand Logo"
                className="logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;