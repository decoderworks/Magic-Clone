// Card.js
import Image from 'next/image';
import React from 'react';

const Card = ({ title, imageUrl, description }) => {
  return (
    <div className="lg:w-1/2 md:w-1/2 sm:w-full p-4">
      <div className="max-w-md mx-auto bg-white rounded overflow-hidden shadow-lg">
        <Image className="w-24 h-24 object-cover mt-3 ml-3" width={50} height={50} src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-gray-700">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
