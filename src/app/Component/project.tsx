"use client";

import React from 'react';

const Project = () => {
    return (
        <div>
            <div id='project' className="min-h-auto bg-[#7A5653] text-[#D9D9D9] p-4 sm:p-6 md:p-12 lg:p-16 font-inter2">
                <div className="max-w-3xl mx-auto pb-6 sm:pb-8 md:pb-10">
                    <div className="pt-16 sm:pt-20 md:pt-28 mb-8 sm:mb-10 md:mb-12 border-b border-gray-300 pb-6 sm:pb-8">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#7A5653]">
                            PROJECT
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                        Projects I have worked on, whether required or just things I wanted to do.
                        <br />
                            <span className="block mt-2 ">" You can click to explore "</span>
                        </p>
                    </div>
                    <div className="mb-8 sm:mb-10 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
                        <ul className="space-y-4 sm:space-y-6 bg-[#D9D9D9] rounded-xl p-4 sm:p-6 shadow-lg">
                            <li className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                                <a href="https://docs.google.com/document/d/1Cu--S3kMIuipPcVOLfktGS6SWgK1ZKlSQMeQwnOv3wE/edit?usp=sharing" className='ml-2 sm:ml-6 font-bold text-[#445049] hover:text-[#7A5653] text-sm sm:text-base'>This is my Portfolio-Website by Next.js</a>
                                <span className="px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium w-fit">In-Progress</span>
                            </li>
                            <li className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                                <a href="https://docs.google.com/document/d/1VVOwxrNspb1vjUQCva62cRWJ5ddF8IRH_PELkBqVBMc/edit?usp=sharing" className='ml-2 sm:ml-6 font-bold text-[#445049] hover:text-[#7A5653] text-sm sm:text-base'>Game Pet Simulator by Python</a>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium">In-Progress</span>
                                    <span className="px-3 py-1 text-xs sm:text-sm bg-[#7c3535] text-[#D9D9D9] rounded-full font-medium">Break</span>
                                </div>
                            </li>
                            <li className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                                <a href="https://docs.google.com/document/d/1uc5BUe-hjZp6IJ3pniyt5VCjHDvlA4DfztW-R-YetaY/edit?usp=sharing" className='ml-2 sm:ml-6 font-bold text-[#445049] hover:text-[#7A5653] text-sm sm:text-base'>Bot Discord by Discord.js</a>
                                <span className="px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-700 rounded-full font-medium w-fit">Done</span>
                            </li>
                            <li className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
                                <a href="https://docs.google.com/document/d/1-EgVWryzGVYIy0ryiLGi5yl91aAkNebPAB-9yuqZyEQ/edit?usp=sharing" className='ml-2 sm:ml-6 font-bold text-[#445049] hover:text-[#7A5653] text-sm sm:text-base'>Leagues of Code TH Marketing team</a>
                                <span className="px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium w-fit">In-Progress</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <p className='ml-2 sm:ml-6 font-bold text-[#7d8f85] text-sm sm:text-base'>Coming Soon....</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;