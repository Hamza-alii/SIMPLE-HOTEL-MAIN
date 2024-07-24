
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import room13 from './img/room6.jpg'
import Footer from './Footer';
const RoomBooks = ({ room4 }) => {
  const [guestName, setGuestName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [contactInfoError, setContactInfoError] = useState('');
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());
  const [numGuests, setNumGuests] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState('');
  const [paymentInfoError, setPaymentInfoError] = useState('');
  const [roomType, setRoomType] = useState('');
  const navigate = useNavigate();

  const handleContactInfoChange = (e) => {
    setContactInfo(e.target.value);
    if (!e.target.value) {
      setContactInfoError('Contact information is required.');
    } else {
      setContactInfoError('');
    }
  };

  const handlePaymentInfoChange = (e) => {
    setPaymentInfo(e.target.value);
    if (!e.target.value) {
      setPaymentInfoError('Payment information is required.');
    } else {
      setPaymentInfoError('');
    }
  };

  const handleBookNow = () => {
    if (!guestName) {
      alert('Enter the guest name.');
      return;
    }

    if (!roomType) {
      alert('Choose the room type.');
      return;
    }

    if (!contactInfoError && !paymentInfoError) {
      navigate('/Display', {
        state: {
          guestName,
          contactInfo,
          arrivalDate: arrivalDate.toISOString().substr(0, 10),
          departureDate: departureDate.toISOString().substr(0, 10),
          numGuests,
          paymentInfo,
          roomType,
        },
      });
    } else {
      if (contactInfoError) {
        alert('Enter the contact information.');
      }
      if (paymentInfoError) {
        alert('Enter the payment information.');
      }
    }
  };

  return (
    <div class="bg-black" style={{ backgroundImage: `url(${room13})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh' }}>
  
  
      <div>
        <Header />
      </div>

      <div className="flex justify-center items-center h-full">
      <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-8 mt-80 ">
          <h1 className="text-2xl font-bold mb-4 mt-20  text-center">Room Books</h1>
          <div>
            <div className="mb-4">
              <label htmlFor="guestName" className="block font-medium mb-2">
                Guest Name
              </label>
              <input
                type="text"
                id="guestName"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter the guest name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="contactInfo" className="block font-medium mb-2">
                Contact Information
              </label>
              <input
                type="text"
                id="contactInfo"
                value={contactInfo}
                onChange={handleContactInfoChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter the contact information"
              />
              {contactInfoError && (
                <p className="text-red-500 mt-2">{contactInfoError}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="arrivalDate" className="block font-medium mb-2">
                Arrival Date
              </label>
              <input
                type="date"
                id="arrivalDate"
                value={arrivalDate.toISOString().substr(0, 10)}
                onChange={(e) => setArrivalDate(new Date(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="departureDate" className="block font-medium mb-2">
                Departure Date
              </label>
              <input
                type="date"
                id="departureDate"
                value={departureDate.toISOString().substr(0, 10)}
                onChange={(e) => setDepartureDate(new Date(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numGuests" className="block font-medium mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                id="numGuests"
                value={numGuests}
                onChange={(e) => setNumGuests(parseInt(e.target.value))}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                min="1"
                max="2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="paymentInfo" className="block font-medium mb-2">
                Payment Information
              </label>
              <input
                type="text"
                id="paymentInfo"
                value={paymentInfo}
                onChange={handlePaymentInfoChange}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Enter the payment information"
              />
              {paymentInfoError && (
                <p className="text-red-500 mt-2">{paymentInfoError}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="roomType" className="block font-medium mb-2">
                Room Type
              </label>
              <select
                id="roomType"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option value="">Choose the room type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
              </select>
            </div>
          </div>
          <button
            onClick={handleBookNow}
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:bg-blue-700 w-full"
          >
            Submit
          </button>
        </div>
      </div>
      <div>
        
      </div >
      <div className="  mt-80">
  <Footer />
</div>
    </div>
    
    
  );
};

export default RoomBooks;