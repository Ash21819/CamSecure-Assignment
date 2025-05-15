import React from 'react';

const Cards = ({ img, heading, text }) => (
  <div className="flex flex-col bg-white rounded-3xl shadow hover:shadow-lg transition p-1 h-full ">
    <img className="w-fit h-fit mb-4 object-contain rounded-3xl" src={img} alt={heading} />
    <h3 className="font-serif text-2xl font-bold mb-2 text-center">{heading}</h3>
    <p className="text-gray-600 text-sm text-center">{text}</p>
  </div>
    );

export default Cards;
