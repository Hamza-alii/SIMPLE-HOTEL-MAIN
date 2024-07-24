import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import room1 from './img/room1.jpg';
import room2 from './img/room2.jpg';
import room3 from './img/room3.jpg';
import room4 from './img/room4.jpg';
import room5 from './img/room5.jpg';
import room6 from './img/room6.jpg';
import room7 from './img/room7.jpg';
import room8 from './img/room8.jpg';
import room9 from './img/room9.jpg';
import room10 from './img/room10.jpg';
import room11 from './img/room11.jpg';
import room12 from './img/room12.jpg';

const ImageWithButton = ({ imageUrl, to }) => {
  return (
    <div className="flex justify-center">
      <div className="relative mx-4 mb-10 w-[300px] sm:w-[400px]">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
            src={imageUrl}
            alt=""
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Single Room</h3>
            <p className="text-gray-500 mb-4">Experience the ultimate in comfort and style.</p>
            <Link
              to="/RoomBooks"
              title=""
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              BOOK NOW🌟🌟🌟
              <svg
                className="w-3 h-3 ml-1 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoubleImageWithButton = ({ imageUrl, to }) => {
  return (
    <div className="flex justify-center  ">
      <div className="relative mx-4 mb-10  w-[300px] sm:w-[400px]">
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <img
            className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg"
            src={imageUrl}
            alt=""
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 ">Double Room</h3>
            <p className="text-gray-500 mb-4">Indulge in the ultimate in comfort and luxury.</p>
            <Link
              to="/RoomBooks"
              title=""
              className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700"
              role="button"
            >
              BOOK NOW🌟🌟🌟
              <svg
                className="w-3 h-3 ml-1 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function Booking() {
  return (
    <div>
      <Header />
      <section className="bg-white py-12">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <ImageWithButton imageUrl={room1} to="/Booking" />
            <DoubleImageWithButton imageUrl={room2} to="/Booking" />
            <ImageWithButton imageUrl={room3} to="/Booking" />
            <DoubleImageWithButton imageUrl={room4} to="/Booking" />
            <ImageWithButton imageUrl={room5} to="/Booking" />
            <DoubleImageWithButton imageUrl={room6} to="/Booking" />
            <ImageWithButton imageUrl={room7} to="/Booking" />
            <DoubleImageWithButton imageUrl={room8} to="/Booking" />
            <ImageWithButton imageUrl={room9} to="/Booking" />
            <DoubleImageWithButton imageUrl={room10} to="/Booking" />
            <ImageWithButton imageUrl={room11} to="/Booking" />
            <DoubleImageWithButton imageUrl={room12} to="/Booking" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Booking;