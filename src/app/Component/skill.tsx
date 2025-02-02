"use client";

import React from 'react';
import { FaSearch, FaChartLine, FaPenNib, FaCode, FaLanguage, FaBrain, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaUsers, FaFacebook, FaHubspot } from 'react-icons/fa';

const Skill = () => {
    return (
        <div id='skill' className="min-h-auto bg-[#445049] text-[#D9D9D9] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 font-inter2">
            <div className="max-w-3xl mx-auto mb-16 sm:mb-20 md:mb-24 lg:mb-28">
                {/* Header Section */}
                <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 mb-8 sm:mb-10 md:mb-12 border-b border-gray-300 pb-6 sm:pb-7 md:pb-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D9D9D9] to-[#7A5653]">
                        SKILL
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                    Skills I have learned from classes and self-study.
                    </p>
                </div>

                {/* Hard Skills Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Hard Skills
                    </h3>
                    <ul className="space-y-4 sm:space-y-5 md:space-y-6 bg-[#D9D9D9] rounded-xl p-4 sm:p-5 md:p-6 shadow-lg">
                        <li className="text-[#445049] font-bold">
                            <div className='flex items-center mb-2'>
                                <FaUsers className='mr-2 text-[#553733]' />
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#445049]">Customer Relation Management (CRM)</h4>
                            </div>
                            <p className='pl-4 sm:pl-5 md:pl-6 font-light'>
                                <div className='flex items-center mb-2'>
                                    <FaFacebook className='mr-2 text-[#553733]' />
                                    <span>Meta Suite</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaHubspot className='mr-2 text-[#553733]' />
                                    <span>Hubspot</span>
                                </div>
                            </p>
                        </li>
                        <li className="font-bold text-[#445049]">
                            <div className='flex items-center mb-2'>
                                <FaCode className='mr-2 text-[#553733]' />
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#445049]">Coding</h4>
                            </div>
                            <p className='pl-4 sm:pl-5 md:pl-6 font-light'>
                                <div className='flex items-center mb-2'>
                                    <FaHtml5 className='mr-2 text-[#553733]' />
                                    <span>Web Development with HTML</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaCss3Alt className='mr-2 text-[#553733]' />
                                    <span>CSS</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaJs className='mr-2 text-[#553733]' />
                                    <span>JavaScript</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaReact className='mr-2 text-[#553733]' />
                                    <span>Next.js</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaPython className='mr-2 text-[#553733]' />
                                    <span>OOP Python</span>
                                </div>
                                <div className='flex items-center mb-2'>
                                    <FaDatabase className='mr-2 text-[#553733]' />
                                    <span>MongoDB database</span>
                                </div>
                            </p>
                        </li>
                        <li className="font-bold text-[#445049]">
                            <div className='flex items-center mb-2'>
                                <FaSearch className='mr-2 text-[#553733]' />
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#445049]">Digital Marketing</h4>
                            </div>
                            <div className='pl-4 sm:pl-5 md:pl-6 font-light'>
                                <div className='flex items-center mb-2'>
                                    <FaSearch className='mr-2 text-[#553733]' />
                                    <span className='text-[#553733]'>Search Engine Optimization (SEO)</span>
                                </div>
                                <ul className='pl-6 sm:pl-7 md:pl-8 list-disc'>
                                    <li>Keyword Research</li>
                                    <li>Backlink</li>
                                    <li>Article and Blog</li>
                                    <li>Programmatic</li>
                                    <li>Site Architecture</li>
                                </ul>
                                <div className='flex items-center mt-4 mb-2'>
                                    <FaChartLine className='mr-2 text-[#553733]' />
                                    <span className='text-[#553733]'>Urchin Tracking Module (UTM)</span>
                                </div>
                                <div className='flex items-center mt-4 mb-2'>
                                    <FaPenNib className='mr-2 text-[#553733]' />
                                    <span className='text-[#553733]'>Content Creator</span>
                                </div>
                                <ul className='pl-6 sm:pl-7 md:pl-8 list-disc'>
                                    <li>Recording</li>
                                    <li>Editing</li>
                                    <li>Publishing</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Soft Skills Section */}
                <div className="mb-8 sm:mb-10 md:mb-12 transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Soft Skills
                    </h3>
                    <ul className="space-y-4 sm:space-y-5 md:space-y-6 bg-[#D9D9D9] rounded-xl p-4 sm:p-5 md:p-6 shadow-lg">
                        <li className="font-bold text-[#445049]">
                            <div className='flex items-center mb-2'>
                                <FaLanguage className='mr-2 text-[#553733]' />
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#445049]">English Communication</h4>
                            </div>
                            <p className='pl-4 sm:pl-5 md:pl-6 font-light'>
                                Written Communication 
                            </p>
                        </li>
                        <li className="font-bold text-[#445049]">
                            <div className='flex items-center mb-2'>
                                <FaBrain className='mr-2 text-[#553733]' />
                                <h4 className="font-bold text-lg sm:text-xl md:text-2xl text-[#445049]">Fast Self-Learning</h4>
                            </div>
                            <p className='pl-4 sm:pl-5 md:pl-6 font-light'>
                                Ability to quickly grasp new concepts <br />
                                Adaptability to new environments
                            </p>
                        </li>
                    </ul>
                </div>

                {/* Other Section */}
                <div className="transform hover:scale-[1.02] transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-4 sm:mb-5 md:mb-6 text-[#D9D9D9]">
                        Other
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

export default Skill;