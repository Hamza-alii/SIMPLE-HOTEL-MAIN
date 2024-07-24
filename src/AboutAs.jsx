import React from 'react';
import Header from './Header';
import Footer from './Footer';
function AboutUs() {
  return (
    <div>
       <div>
    <Header/>
    </div>
      <section className="py-20 bg-white">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Elite Hotel:
            </h2>
            <p className="max-w-xl mx-auto mt-6 text-lg leading-relaxed text-gray-600">
              Nestled in the heart of the city, Elite Hotel offers an unparalleled experience of
              comfort, elegance, and exceptional service. Step into a world of refined luxury and
              indulge in the finest amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-16 md:mt-24 md:grid-cols-2 gap-y-12 gap-x-16">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Luxurious Accommodations</h3>
                <p className="mt-4 text-base text-gray-600">
                  Our rooms and suites are designed with the utmost attention to detail, featuring
                  plush bedding, high-end furnishings, and stunning city views. Relax in the lap of
                  luxury and indulge in the ultimate comfort.
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Each room is equipped with modern amenities, including a flat-screen TV, high-speed
                  Wi-Fi, and a well-stocked minibar. The marble bathrooms offer a spa-like experience
                  with luxurious toiletries and plush towels.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Exceptional Amenities</h3>
                <p className="mt-4 text-base text-gray-600">
                  Indulge in our world-class amenities, including a state-of-the-art fitness center,
                  a rejuvenating spa, multiple dining options, and a stunning rooftop pool with
                  panoramic city views. Experience the ultimate in luxury and relaxation.
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Our fitness center is equipped with the latest exercise equipment, offering a
                  range of classes and personal training services. The on-site spa provides a
                  sanctuary of tranquility, offering a variety of treatments to soothe the body and
                  mind.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Convenient Location</h3>
                <p className="mt-4 text-base text-gray-600">
                  Situated in the heart of the city, Elite Hotel offers convenient access to top
                  attractions, shopping, and dining. Explore the vibrant culture and discover the
                  best the city has to offer, all while enjoying the comfort of our luxurious hotel.
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Our concierge team is happy to provide recommendations and assist with arranging
                  local activities, transportation, and reservations, ensuring you make the most of
                  your stay.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full">
                <svg
                  className="w-6 h-6 text-gray-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-gray-900">Exceptional Service</h3>
                <p className="mt-4 text-base text-gray-600">
                  Our dedicated team of professionals is committed to ensuring your stay is nothing
                  short of remarkable. From personalized concierge services to attentive in-room
                  care, we strive to exceed your expectations and make your experience truly
                  unforgettable.
                </p>
                <p className="mt-4 text-base text-gray-600">
                  Whether you need assistance with arranging a private car, securing reservations at
                  our renowned restaurant, or simply requesting a special amenity, our team is
                  always ready to cater to your every need.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mt-16 md:mt-24">
            <div className="px-8 py-4 text-center bg-gray-900 rounded-full">
              <p className="text-gray-50">
                Discover the Elite Hotel experience.{' '}
                <a
                  href="#"
                  title=""
                  className="text-yellow-500 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline"
                >
                  Book your stay
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="  mt-10">
  <Footer />
</div>
    </div>
  );
}

export default AboutUs;