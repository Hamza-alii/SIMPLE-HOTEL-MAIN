import React from 'react';
import room1 from './img/room1.jpg';
import room2 from './img/room2.jpg';
import room3 from './img/room3.jpg';
import room4 from './img/room4.jpg';
import room5 from './img/room5.jpg';
import Header from './Header';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Get in Touch
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-black rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Meet the Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img
                  src={room1}
                  alt="Nuur Mohamed"
                  className="rounded-full h-20 w-20 mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold mb-1 text-white">
                  Nuur Mohamed
                </h3>
                <p className="text-gray-600">The leader</p>
                <a
                  href="mailto:nuur@example.com"
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                >
                  nuur@gmail.com
                </a>
              </div>
              <div className="text-center">
                <img
                  src={room2}
                  alt="Zakariye Ikar"
                  className="rounded-full h-20 w-20 mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold mb-1 text-white">
                  Zakariye Ikar
                </h3>
                <p className="text-gray-600">Co-founder</p>
                <a
                  href="mailto:zakariye@example.com"
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                >
                  zakariye@gmail.com
                </a>
              </div>
              <div className="text-center">
                <img
                  src={room3}
                  alt="Hamza Yusuf"
                  className="rounded-full h-20 w-20 mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold mb-1 text-white">
                  Hamza Yusuf
                </h3>
                <p className="text-white">Lead Developer</p>
                <a
                  href="mailto:hamza@example.com"
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                >
                  hamza@gmail.com
                </a>
              </div>
              <div className="text-center">
                <img
                  src={room4}
                  alt="Abdullahi Yufuf"
                  className="rounded-full h-20 w-20 mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold mb-1 text-white">
                  Abdullahi Yufuf
                </h3>
                <p className="text-gray-600">Marketing Manager</p>
                <a
                  href="mailto:abdullahi@gmaile.com"
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                >
                  abdullahi@gmail.com
                </a>
              </div>
              <div className="text-center">
                <img
                  src={room5}
                  alt="Ahmeddin Abdukadir"
                  className="rounded-full h-20 w-20 mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-bold mb-1 text-white">
                  Ahmedin Abdukadir
                </h3>
                <p className="text-gray-600">Customer Support</p>
                <a
                  href="mailto:ahmeddin@example.com"
                  className="text-blue-500 hover:text-blue-700 mt-2 inline-block"
                >
                  ahmeddin@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Contact Us
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;