import React from 'react';

const Introduction = () => {
  return (
    <div className=" min-h-full bg-[#445049] text-white p-8 pt-32 pb-32" >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ">
        {/* Content */}
        <div className="flex-col">
          
         <h1 className="text-6xl font-inter font-bold tracking-wider">
          PHUWADON THONTRA
          </h1>
          
          <div className="text-gray-300 text-xl font-inter">
            <p className="">
              Digital Marketing student 
              at Harbour Space University Bangkok campus
            </p>
          </div>
          
          <div className="text-3xl mt-20 text-[#dddddd] font-inter">
            <p>
            I help tech companies improve their online presence through SEO, writing articles, analyzing data, and using coding skills in Website Development
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-full bg-[#A38371] max-w-md mx-auto overflow-hidden border-8 shadow-2xl drop-shadow-2xl">
            <img 
              src="PoohPFP.png" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;