import React from "react";
import VidImg from "../assets/3.jpg";

export const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section
        className='bg-cover bg-center text-white py-20'
        style={{ backgroundImage: `url(${VidImg})` }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl font-bold mb-4 '>
            Empowering Youth for a Sustainable Future
          </h1>
          <p className='text-lg mb-8'>
            Join us in creating a better world through environmental
            conservation, social development, and community empowerment.
          </p>
          <div className='space-x-4'>
            <a
              href='/get-involved'
              className='bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100'
            >
              Get Involved
            </a>
            <a
              href='/donate'
              className='bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100'
            >
              Donate
            </a>
            <a
              href='/get-involved'
              className='bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100'
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className='py-12 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Ongoing Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold mb-2'>Animal Welfare</h3>
              <p className='text-gray-600'>
                Sterilizing and vaccinating stray dogs to control rabies and
                promote humane population management.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold mb-2'>
                Sustainable Agriculture
              </h3>
              <p className='text-gray-600'>
                Training farmers in eco-friendly farming techniques to improve
                yields and sustainability.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold mb-2'>
                Environmental Conservation
              </h3>
              <p className='text-gray-600'>
                Tree plantation drives and waste management programs to combat
                climate change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Success Stories
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold mb-2'>
                Rabies Control in Arghakhanchi
              </h3>
              <p className='text-gray-600'>
                Sterilized and vaccinated 120 dogs, reducing rabies cases by 50%
                in the region.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold mb-2'>
                Youth Leadership Training
              </h3>
              <p className='text-gray-600'>
                Trained 53 students in technical skills, enhancing their
                employability and leadership capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
