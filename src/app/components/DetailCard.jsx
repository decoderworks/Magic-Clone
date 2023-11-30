// App.js
import React from 'react';
import Card from './Card';

const App = () => {
  const cardsData = [
    {
      title: 'Lighting Fast',
      imageUrl: '/image/lighting.svg',
      description: 'Hire an assistant in as little as a week. Our accurate & diligent Matching team handpicks the right talent for you and trains them to be magical.',
    },
    {
      title: 'Infinitely Scalable',
      imageUrl: '/image/magic.svg',
      description: 'Whether you need 1 worker or 1,000, we make it easy to scale your team. We handle all the recruiting and hiring, so you don’t have to.',
    },
    {
      title: 'Top Talent',
      imageUrl: '/image/magic-ai.svg',
      description: 'We only hire the top 3% of talent Every candidate goes through a multi-step screening process and is trained on current technology, including Magic AI.',
    },
    {
      title: 'Powered by cutting edge AI',
      imageUrl: '/image/magic-top.svg',
      description: 'Our executive assistants and virtual assistants use custom Magic AI that helps them be more efficient.',
    },
  ];

  return (
    <div className="flex flex-wrap">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
      <div className='md:ml-96 sm:ml-24'>
      <a
          href="#"
          class="p-3 px-6 pt-2 text-white bg-blue-800 rounded-full baseline hover:bg-blue-400 md:ml-56 sm:ml-20"
          >Get Started</a
        >
      </div>
    </div>
    
  );
};

export default App;
