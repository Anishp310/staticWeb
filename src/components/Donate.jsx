import React, { useState } from "react";

export const Donate = () => {
  const [showQRCode, setShowQRCode] = useState(false); // State to manage QR code visibility

  const handleDonateClick = () => {
    setShowQRCode(!showQRCode); // Toggle QR code visibility
  };

  return (
    <div className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8 text-green-700'>
          Donate
        </h2>

        {/* Donation Description */}
        <div className='mb-12 text-center'>
          <p className='text-gray-600 text-lg mb-6'>
            Your generous donations help us create a sustainable and equitable
            society. By supporting YEAST, you contribute to environmental
            conservation, social development, and community empowerment.
          </p>
          <p className='text-gray-600 text-lg'>
            Every donation, big or small, makes a significant impact. Together,
            we can make a difference!
          </p>
        </div>

        {/* Donation Options */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-xl font-bold mb-2 text-green-700'>
              One-Time Donation
            </h3>
            <p className='text-gray-600 mb-4'>
              Make a single donation to support our projects.
            </p>
            <button
              onClick={handleDonateClick}
              className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
            >
              Donate Now
            </button>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-xl font-bold mb-2 text-green-700'>
              Monthly Donation
            </h3>
            <p className='text-gray-600 mb-4'>
              Support us monthly and help sustain our initiatives.
            </p>
            <button
              onClick={handleDonateClick}
              className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
            >
              Donate Monthly
            </button>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-xl font-bold mb-2 text-green-700'>
              Sponsorships
            </h3>
            <p className='text-gray-600 mb-4'>
              Sponsor a specific project or program.
            </p>
            <button
              onClick={handleDonateClick}
              className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
            >
              Learn More
            </button>
          </div>
        </div>

        {/* QR Code Section */}
        {showQRCode && (
          <div className='text-center mt-8'>
            <h3 className='text-2xl font-bold mb-4 text-green-700'>
              Scan to Donate
            </h3>
            <img
              src='https://via.placeholder.com/200' // Replace with your QR code image
              alt='Donation QR Code'
              className='mx-auto w-48 h-48'
            />
            <p className='text-gray-600 mt-4'>
              Scan the QR code using your mobile payment app to donate.
            </p>
          </div>
        )}

        {/* Transparency Section */}
        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-4 text-green-700'>
            Transparency
          </h3>
          <p className='text-gray-600'>
            We ensure that every donation is used effectively. View our impact
            reports to see how your contributions make a difference.
          </p>
        </div>
      </div>
    </div>
  );
};
