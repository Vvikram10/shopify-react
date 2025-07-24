import React from 'react';

const TopHeader = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-1 md:py-1.5">
        <div
          className="text-center w-full"
          role="region"
          aria-label="Announcement"
        >
        <em>
            <p className="text-[16px] md:text-[16px] text-black font-normal font-montserrat capitalize tracking-wide m-0 py-1">
            Welcome to our store!
          </p>
        </em>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
