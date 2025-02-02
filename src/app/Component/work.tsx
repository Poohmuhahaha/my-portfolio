"use client";

import React from 'react';

const Work = () => {
    return (
        <div id='work' className="min-h-auto bg-[#445049] text-[#D9D9D9] p-4 sm:p-8 md:p-12 lg:p-16 font-inter2">
            <div className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-28">
                {/* Header Section */}
                <div className="pt-16 sm:pt-20 md:pt-28 mb-8 sm:mb-10 md:mb-12 border-b border-gray-300 pb-6 sm:pb-7 md:pb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#7A5653]">
                        WORK
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                    My university experiences and the projects I have worked on.
                    </p>
                </div>

                {/* Marketing Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Marketing and Digital Marketing
                    </h3>
                    <div className="space-y-6 sm:space-y-8 bg-[#D9D9D9] rounded-xl p-4 sm:p-6 shadow-lg">
                        <div>
                            <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#445049]">Search Engine Optimization (SEO)</h4>
                            <ul className="space-y-4 sm:space-y-6 list-disc ml-4 sm:ml-6">
                                <li className="relative">
                                    <div className="flex items-center mb-1 sm:mb-2">
                                        <span className="font-semibold text-[#553733]">Leagues of Code TH: Keywords Research</span>
                                        <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium">In-Progress</span>
                                    </div>
                                    <p className="text-[#445049] mt-1">
                                    Two keyword research projects, such as the Leagues of Code TH website and the Leagues of Code Hackathon keywords.
                                    </p>
                                </li>
                                <li>
                                    <div className="flex items-center mb-1 sm:mb-2">
                                        <span className="font-semibold text-[#553733]">Blog Writings</span>
                                        <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium">In-Progress</span>
                                    </div>
                                    <p className="text-[#445049]">I aim to publish 50 blog posts before February 2025 ends.</p>
                                </li>
                                <li>
                                    <div className="flex items-center mb-1 sm:mb-2">
                                        <span className="font-semibold text-[#553733]">UTM Implementation</span>
                                        <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-700 rounded-full font-medium">Done</span>
                                    </div>
                                    <p className="text-[#445049]">Monitor and record customer information for every campaign.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#445049]">Customer Relation (CR)</h4>
                            <ul className="space-y-4 sm:space-y-6 list-disc ml-4 sm:ml-6">
                                <li>
                                    <div className="font-semibold mb-1 sm:mb-2 text-[#553733]">Customer Information Analysis
                                    <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-700 rounded-full font-medium">Done</span>
                                    </div>
                                    <p className="text-[#445049]">Leverage data from diverse sources to analyze trends, derive actionable insights, and strategically plan the next steps.</p>
                                </li>
                                <li>
                                    <div className="font-semibold mb-1 sm:mb-2 text-[#553733]">Discord CRM Design
                                    <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-700 rounded-full font-medium">Done</span>
                                    </div>
                                    <p className="text-[#445049]">Designed and implemented a comprehensive loyalty program bot, integrated with MongoDB, featuring gamification elements to enhance user engagement.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Development Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Development
                    </h3>
                    <div className="bg-[#D9D9D9] rounded-xl p-4 sm:p-6 shadow-lg">
                        <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#445049]">Coding Projects</h4>
                        <ul className="space-y-4 sm:space-y-6 list-disc ml-4 sm:ml-6">
                            <li>
                                <div className="flex items-center mb-1 sm:mb-2">
                                    <span className="font-semibold text-[#553733]">Discord Bot</span>
                                    <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium">In-Progress</span>
                                </div>
                                <p className="text-[#445049]">Implemented Loyalty program bot with MongoDB integration and Gamification features</p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Events Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Events
                    </h3>
                    <div className="bg-[#D9D9D9] rounded-xl p-4 sm:p-6 shadow-lg">
                        <h4 className="font-bold text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-[#445049]">Leagues of Code TH</h4>
                        <ul className="space-y-3 sm:space-y-4 list-disc ml-4 sm:ml-6">
                            <li className="font-medium text-[#445049]">Leagues of Code AI Camp year 2 ( Staff Activity )
                            <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-green-100 text-green-700 rounded-full font-medium">Done</span>
                            </li>
                            <li className="font-medium text-[#445049]">Leagues of Code Hackathon 1 ( Staff Activity and Marketing )
                            <span className="ml-2 px-2 sm:px-3 py-1 text-xs sm:text-sm bg-[#445049] text-[#D9D9D9] rounded-full font-medium">In-Progress</span>
                             </li>
                        </ul>
                    </div>
                </div>

                {/* Other Section */}
                <div className="transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Other Works
                    </h3>
                    <div className="bg-[#D9D9D9] rounded-xl p-4 sm:p-6 shadow-lg">
                        <ul className="space-y-3 sm:space-y-4 list-disc ml-4 sm:ml-6">
                            <li className="font-medium text-[#553733]">None</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;