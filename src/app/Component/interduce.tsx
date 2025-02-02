import React from 'react';

const Introduction = () => {
  return (
    <div id='introduction' className="min-h-full bg-[#445049] text-white p-8 pt-32 pb-32">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Content */}
        <div className="flex-col">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-inter font-bold tracking-wider">
            PHUWADON THONTRA
          </h1>
          
          <div className="text-gray-300 text-lg sm:text-xl font-inter">
            <p>
              Digital Marketing student 
              at Harbour.Space Institute of Technology Bangkok campus
            </p>
          </div>
          
          <div className="text-2xl sm:text-3xl mt-10 sm:mt-20 text-[#dddddd] font-inter">
            <p>
              I help tech companies improve their online presence through SEO, writing articles, analyzing data, and using coding skills in Website Development
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-full max-w-xs sm:max-w-md mx-auto overflow-hidden shadow-2xl border-20 drop-shadow-2xl transform transition-all duration-300 hover:-translate-y-2">
            <img 
              src="LOCPFPP.png" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
