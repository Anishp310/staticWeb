import React from "react";

export const Projects = () => {
  return (
    <div className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>
          Projects & Initiatives
        </h2>

        {/* Project Categories */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>Animal Welfare</h3>
            <p className='text-gray-600'>
              Sterilization and vaccination drives for stray animals.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>Sustainable Agriculture</h3>
            <p className='text-gray-600'>
              Training farmers in eco-friendly farming techniques.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl font-bold mb-2'>
              Environmental Conservation
            </h3>
            <p className='text-gray-600'>
              Tree plantation and waste management programs.
            </p>
          </div>
        </div>

        {/* Impact Stories */}
        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-4'>Impact Stories</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h4 className='text-xl font-bold mb-2'>Rabies Control</h4>
              <p className='text-gray-600'>
                Reduced rabies cases by 50% in Arghakhanchi.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h4 className='text-xl font-bold mb-2'>Youth Training</h4>
              <p className='text-gray-600'>
                Trained 53 students in technical skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
