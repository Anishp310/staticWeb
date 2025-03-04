import React, { useState, useRef } from "react";
import donationImg from "../assets/donation.jpg";
import fonePay from "../assets/fonepay.jpeg";
export const Donate = () => {
  const [showQRCode, setShowQRCode] = useState(false);
  const qrCodeRef = useRef(null);

  const handleDonateClick = () => {
    setShowQRCode(true); 
    qrCodeRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <div className='py-12 pt-0 bg-gray-50'>
      <div className='w-full h-64 overflow-hidden'>
        <img
          src={donationImg}
          alt='Banner'
          className='w-full h-full object-cover object-center'
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8 mt-8'>Donate</h2>
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

        <div className='flex justify-center items-center  mb-12'>
          <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
            <h3 className='text-xl font-bold mb-2 text-green-700'>Donation</h3>
            <p className='text-gray-600 mb-4'>
              Make a donation to support our projects.
            </p>
            <button
              onClick={handleDonateClick}
              className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
            >
              Donate Now
            </button>
          </div>
        </div>

        {showQRCode && (
          <div ref={qrCodeRef} className='text-center mt-8'>
            <h3 className='text-2xl font-bold mb-4 text-green-700'>
              Scan to Donate
            </h3>
            <img
              src={fonePay}
              alt='Donation QR Code'
              className='mx-auto w-80 h-100'
            />
            <p className='text-gray-600 mt-4'>
              Scan the QR code using your mobile payment app to donate.
            </p>
          </div>
        )}

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
