// Navbar.js

"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-100 p-4 md:text-2xl sm:text-base">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">
          <a href="/">
          <Image src="/image/logo.webp" width={100} height={70} alt="company logo" />
          </a>
        </div>

        <div className="lg:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="text-black hover:text-blue-400 p-2">Services</a>
          <a href="#" className="text-black hover:text-blue-400 p-2">Resources</a>
          <a href="#" className="text-black hover:text-blue-400 p-2">Prices</a>
          <a href="#" className="text-black hover:text-blue-400 p-2">Login</a>
          <a href="#" className="text-black hover:text-blue-400 p-2">(888) 404-8243</a>
        </div>
        <a
          href="#"
          class="hidden p-3 px-6 pt-2 text-white bg-blue-800 rounded-full baseline hover:bg-blue-400 md:block md:text-lg sm:text-base"
          >Get Started</a>
      </div>
    </nav>
  );
};

export default Navbar;
