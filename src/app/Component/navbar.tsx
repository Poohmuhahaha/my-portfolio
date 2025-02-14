"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#553733] shadow-lg drop-shadow-md sticky top-0 z-50">
      <nav>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-inter2 font-bold">
          
          <p className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              PT. PORTFOLIO
            </span>
          </p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none transition-transform duration-300"
            aria-controls="navbar-solid-bg"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} w-full md:block md:w-auto transition-all duration-300 ease-in-out`} id="navbar-solid-bg">
            <ul className="flex flex-col font-medium mt-4 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <a href="#introduction" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-[#312220] md:hover:bg-transparent md:border-0 md:hover:text-[#5a8c70] dark:text-white md:dark:hover:text-[#5a8c70] transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#experience" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-[#312220] md:hover:bg-transparent md:border-0 md:hover:text-[#5a8c70] dark:text-white md:dark:hover:text-[#5a8c70] transition-colors duration-300">Experience and Project</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 md:p-0 text-white rounded-sm hover:bg-[#312220] md:hover:bg-transparent md:border-0 md:hover:text-[#5a8c70] dark:text-white md:dark:hover:text-[#5a8c70] transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
