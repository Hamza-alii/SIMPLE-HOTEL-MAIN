import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Managers from './img/manager.jpg';
import hotelImage from './img/hotel.jpg';
import waiters from './img/waiters.jpg';
import food from './img/Food.jpg';
import room3 from './img/room3.jpg';
import room4 from './img/room4.jpg';
import parking from './img/parking.jpg';

const HotelDetails = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <img
                  src={hotelImage}
                  alt="Hotel Exterior"
                  className="w-full h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Elegant and Luxurious Accommodations</h2>
                <p className="text-gray-600 mb-8">
                  Experience the ultimate in sophisticated and comfortable hotel accommodations. Our rooms and suites are designed with the utmost attention to detail, featuring luxurious bedding, high-end amenities, and breathtaking views. Escape the ordinary and indulge in the extraordinary at our hotel.
                </p>
                <a
                  href="/RoomBooks"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300"
                >
                  Book Your Stay
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20"> <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"> 
            <img src={food} alt="Delectable Cuisine" className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300" />
         <div className="p-6"> <h3 className="text-xl font-bold mb-2 text-gray-800">Delectable Cuisine</h3>
          <p className="text-gray-600 mb-4"> 
            Experience the ultimate in culinary delight with our expertly crafted dishes,
             featuring the finest local and seasonal ingredients. 
             Savor the flavors of our award-winning restaurant,
              where our talented chefs create a dining experience that will leave you truly satisfied. </p> 
              <a href="#" className="text-blue-500 hover:text-blue-700 font-medium"> 
                Explore Our Menu </a> </div> </div> <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                   <img src={Managers} alt="Dedicated Hotel Management" className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300" />
                    <div className="p-6"> <h3 className="text-xl font-bold mb-2 text-gray-800">Dedicated Hotel Management</h3> 
                    <p className="text-gray-600 mb-4"> Indulge in the ultimate in comfort and luxury with our experienced hotel management team. Our dedicated professionals are committed to ensuring your every need is met, from personalized concierge services to seamless check-in and check-out. Trust us to provide the most exceptional hospitality experience. </p>
                     <a href="#" className="text-blue-500 hover:text-blue-700 font-medium"> Meet Our Team </a> 
                     </div> </div> <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                       <img src={waiters} alt="Attentive Service" className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300" /> 
                       <div className="p-6"> <h3 className="text-xl font-bold mb-2 text-gray-800">Attentive Service</h3>
                        <p className="text-gray-600 mb-4"> Enjoy the ultimate in professional and personalized service from our dedicated waitstaff. From the moment you arrive, our team will ensure your every need is met with the utmost care and attention. Experience the difference that genuine hospitality can make in your stay. </p> 
                        <a href="#" className="text-blue-500 hover:text-blue-700 font-medium"> Explore Our Amenities </a> </div> </div> <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                           <img src={parking} alt="Convenient Parking" className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300" /> 
                           <div className="p-6"> <h3 className="text-xl font-bold mb-2 text-gray-800">Convenient Parking</h3> 
                           <p className="text-gray-600 mb-4"> Enjoy hassle-free parking with our secure and accessible options. Whether you're arriving by car or planning a day trip, our on-site parking facilities make it easy to explore the area and access the hotel with ease.
                             </p> <a href="#" className="text-blue-500 hover:text-blue-700 font-medium"> Plan Your Visit </a> </div>
                              </div> <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                 <img src={room3} alt="Single Rooms" className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300" /> <div className="p-6"> <h3 className="text-xl font-bold mb-2 text-gray-800">Single Rooms</h3> <p className="text-gray-600 mb-4"> Discover our cozy and comfortable single rooms, perfect for solo travelers or those looking for a more intimate stay. With all the amenities you need, our single rooms offer the perfect blend of privacy and convenience. </p>
                                  <a href="#" className="text-blue-500 hover:text-blue-700 font-medium"> Explore Our Rooms </a> </div> </div> <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"> <img src={room4} alt="Double Rooms" className="w-full h-[200px] object-cover transform hover:scale-105 transition-transform duration-300" /> <div className="p-6"> <h3 className="text-xl font-bold mb-2 text-gray-800">Double Rooms</h3> <p className="text-gray-600 mb-4"> For those traveling with a companion, our spacious and well-appointed double rooms offer the perfect accommodation. Enjoy the added comfort and convenience of a room designed for two, with all the amenities you need for a truly memorable stay. </p>
         <a href="#" className="text-blue-500 hover:text-blue-700 font-medium"> Explore Our Rooms </a>
          </div> </div> </div> </div> </section>
      </main>

      <Footer />
    </div>
  );
};

export default HotelDetails;