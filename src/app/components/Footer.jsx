// Footer.js
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8">
      <div className="container mx-auto flex flex-wrap">
        {/* Section 1: Logo, Heading, Button, Social Icons */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <div className="flex items-center mb-4">
          <Image className='ml-8' src="/image/logo.webp" width={150} height={70} alt="company logo" />
          </div>
          <p className="mb-4 ml-8 text-base font-bold">Virtual Assistants & Executive Assistants</p>
          <button className="bg-blue-500 hover:bg-blue-800 text-white px-4 py-2 rounded mb-4 ml-8">Get Started</button>
          <div className="flex ml-8">
            <FaFacebook className="text-2xl mr-2" />
            <FaTwitter className="text-2xl mr-2" />
            <FaInstagramSquare className="text-2xl" />
          </div>
        </div>

        {/* Section 2: Services Links */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0 md:ml-0">
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#">Service 1</a></li>
            <li><a href="#">Service 2</a></li>
            <li><a href="#">Service 3</a></li>
          </ul>
        </div>

        {/* Section 3: Resources Links */}
        <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul>
            <li><a href="#">Resource 1</a></li>
            <li><a href="#">Resource 2</a></li>
            <li><a href="#">Resource 3</a></li>
          </ul>
        </div>

        {/* Section 4: Company Links */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="text-center mt-8">
        <p>&copy; 2023 Magic Clone. All Rights Reserved. | <span className="text-blue-500">Terms of Service</span> | <span className="text-blue-500">Privacy Policy</span></p>
      </div>
    </footer>
  );
};

export default Footer;
