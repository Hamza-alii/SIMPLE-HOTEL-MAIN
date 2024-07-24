import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
const Display = () => {
  const { state } = useLocation();
  const { guestName, contactInfo, arrivalDate, departureDate, numGuests, paymentInfo, roomType } = state || {};

  const formattedArrivalDate = arrivalDate ? new Date(arrivalDate).toLocaleDateString() : '';
  const formattedDepartureDate = departureDate ? new Date(departureDate).toLocaleDateString() : '';

  return (
  
    <div className="bg-white shadow-2xl rounded-lg p-10 max-w-lg mx-auto mt-20">
        <div> <Header/></div>
      <div className="border-b pb-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Elite Hotel</h1>
        </div>
        <p className="text-gray-600 text-lg">Transaction ID: 123456789</p>
      </div>
      <div className="space-y-4">
        {guestName && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Guest Name:</p>
            <p className="text-gray-800 font-semibold text-lg">{guestName}</p>
          </div>
        )}
        {contactInfo && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Contact Information:</p>
            <p className="text-gray-800 font-semibold text-lg">{contactInfo}</p>
          </div>
        )}
        {arrivalDate && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Arrival Date:</p>
            <p className="text-gray-800 font-semibold text-lg">{formattedArrivalDate}</p>
          </div>
        )}
        {departureDate && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Departure Date:</p>
            <p className="text-gray-800 font-semibold text-lg">{formattedDepartureDate}</p>
          </div>
        )}
        {numGuests && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Number of Guests:</p>
            <p className="text-gray-800 font-semibold text-lg">{numGuests}</p>
          </div>
        )}
        {paymentInfo && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Payment Information:</p>
            <p className="text-gray-800 font-semibold text-lg">{paymentInfo}</p>
          </div>
        )}
        {roomType && (
          <div className="flex justify-between">
            <p className="text-gray-600 font-medium text-lg">Room Type:</p>
            <p className="text-gray-800 font-semibold text-lg">{roomType}</p>
          </div>
        )}
      </div>
      <div className="mt-8 border-t pt-6 flex justify-between items-center">
        <p className="text-gray-600 font-medium text-lg">Thank you for choosing Elite Hotel!</p>
      </div>
    </div>
  );
};

export default Display;