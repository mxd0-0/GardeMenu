import React from 'react';
import backgroundImage from '../assets/coveropenhours.jpg'; // ✅ Correct relative path

const OpenHours = () => {
    const handleOrderNowClick = () => {
    alert('feauture mazal ma darnah');
  };

  const handleReservationClick = () => {
    alert('feuture mazal ma darnaha');
  };
  return (
    <div  id="openhours"
       className="relative w-10/12 max-w-xl mx-auto p-6 rounded-3xl my-4 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // ✅ Dynamically use imported image
    >
      {/* Dark Overlay */}
      <div className=" absolute inset-0  bg-black opacity-50"
      style={{ clipPath: 'inset(0 round 1.5rem)' }} ></div>

      {/* Content */}
      <div className="z-10 text-white text-center">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold mb-4">we are open from</h1>

        {/* Subheading */}
        <h2 className="text-3xl font-semibold mb-8">Monday–Sunday</h2>

        {/* Opening Hours */}
        <p className="text-xl mb-4">
          Lunch: Mon-Sun: 11:00am–02:00pm
        </p>
        <p className="text-xl mb-4">
          Dinner: Sunday: 04:00pm–08:00pm
        </p>
        <p className="text-xl mb-8">
          04:00pm–09:00pm
        </p>

        {/* Buttons */}
        <div onClick={handleOrderNowClick} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full w-full sm:w-auto">
            Order now
          </button>
          <button onClick={handleReservationClick} className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full border border-gray-400 w-full sm:w-auto">
            Reservation
          </button>
        </div>

      </div>
    </div>
  );
};

export default OpenHours;