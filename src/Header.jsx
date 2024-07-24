import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2 text-lg font-bold transition-colors duration-200 hover:text-blue-500">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 9L12 2L21 9V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 21V12H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Home</span>
          </Link>
          <nav className="hidden md:flex space-x-6 ml-10">
            <Link to="/viewrooms" className="font-semibold transition-colors duration-200 hover:text-blue-500">
              <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 15H9V9H15V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              View Rooms
            </Link>
            <Link to="/HotelDetails" className="font-semibold transition-colors duration-200 hover:text-blue-500">
              <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19.4 15C18.2 16.9 15.4 19 12 19C8.6 19 5.8 16.9 4.6 15C4.2 14.5 4 13.9 4 13.2V11C4 8.8 5.8 7 8 7H16C18.2 7 20 8.8 20 11V13.2C20 13.9 19.8 14.5 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Hotel Details
            </Link>
            <Link to="/Booking" className="font-semibold transition-colors duration-200 hover:text-blue-500">
              <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 15H9V9H15V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Book Now
            </Link>
            <Link to="/AboutAs" className="font-semibold transition-colors duration-200 hover:text-blue-500">
              <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 19.5C4 18.1193 5.11929 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.5 2C5.11929 2 4 3.11929 4 4.5V19.5C4 20.8807 5.11929 22 6.5 22H20V11H6.5C5.11929 11 4 9.88071 4 8.5V4.5C4 3.11929 5.11929 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <Link to="/ContactUs" className="inline-flex items-center px-4 py-2 font-semibold text-black bg-white rounded-lg hover:bg-gray-200 focus:bg-gray-200 transition-colors duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header