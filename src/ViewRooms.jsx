import React from 'react';
import Footer from './Footer';
import Header from './Header';
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

const ImageWithButton = ({ imageUrl, to, description }) => {
  return (
    <div className="flex justify-center">
      <div className="relative mx-4 mb-10 w-[300px] sm:w-[400px]">
        <a href={to}>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
              src={imageUrl}
              alt=""
            />
            <div className="p-4">
              <p className="text-gray-700 text-base">{description}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

const DoubleImageWithButton = ({ imageUrl, to, description }) => {
  return (
    <div className="flex justify-center">
      <div className="relative mx-4 mb-10 w-[300px] sm:w-[400px]">
        <a href={to}>
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="w-full h-[200px] sm:h-[250px] object-cover rounded-t-lg hover:scale-105 transition-transform duration-300"
              src={imageUrl}
              alt=""
            />
            <div className="p-4">
              <p className="text-gray-700 text-base">{description}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

function ViewRooms() {
  return (
   
    <div>
       <div><Header/></div>
      <section className="bg-white py-12">
      
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <ImageWithButton imageUrl={room1} to="/Booking" description="Single Room" />
            <DoubleImageWithButton imageUrl={room2} to="/Booking" description="Double Room" />
            <ImageWithButton imageUrl={room3} to="/Booking" description="Single Room" />
            <DoubleImageWithButton imageUrl={room4} to="/Booking" description="Double Room" />
            <ImageWithButton imageUrl={room5} to="/Booking" description="Single Room" />
            <DoubleImageWithButton imageUrl={room6} to="/Booking" description="Double Room" />
            <ImageWithButton imageUrl={room7} to="/Booking" description="Single Room" />
            <DoubleImageWithButton imageUrl={room8} to="/Booking" description="Double Room" />
            <ImageWithButton imageUrl={room9} to="/Booking" description="Single Room" />
            <DoubleImageWithButton imageUrl={room10} to="/Booking" description="Double Room" />
            <ImageWithButton imageUrl={room11} to="/Booking" description="Single Room" />
            <DoubleImageWithButton imageUrl={room12} to="/Booking" description="Double Room" />
          </div>
        </div>
      </section>
      <div><Footer/></div>
    </div>
  );
}

export default ViewRooms;