
// // src/components/OpenHours.jsx
// export default function OpenHours() {
//     return (
//         <section id="hours" className="bg-[#B5C732]/50 py-16 px-6 lg:px-24">
//             <div className="max-w-4xl mx-auto text-center">
//                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Opening Hours</h2>
//                 <p className="text-gray-600 mb-8">
//                     We are open 7 days a week to serve you fresh and delicious meals.
//                 </p>
//                 <div className="grid sm:grid-cols-2 gap-6 text-center">
//                     <div>
//                         <h3 className="font-semibold text-lg text-black mb-2">Monday - Friday</h3>
//                         <p className="text-gray-700">11:00 AM - 10:00 PM</p>
//                     </div>
//                     <div>
//                         <h3 className="font-semibold text-lg text-black mb-2">Saturday - Sunday</h3>
//                         <p className="text-gray-700">09:00 AM - 11:00 PM</p>
//                     </div>
//                 </div>
//             </div>
//         </section>);
// }


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
    <div
      className="relative w-1/2 mx-auto h-1/6 p-6   rounded-3xl my-2 sm:my-4 md:my-6 flex items-center justify-center  bg-cover bg-center"
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
        <div  onClick={handleOrderNowClick} className="flex space-x-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
            Order now
          </button>
          <button  onClick={handleReservationClick} className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-full border border-gray-400">
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpenHours;