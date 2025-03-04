import React from "react";

export const GetInvolved = () => {
  return (
    <div className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>Get Involved</h2>

        {/* Volunteer Opportunities */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-4'>Volunteer Opportunities</h3>
          <p className='text-gray-600 mb-6'>
            Join our team and make a difference in your community.
          </p>
          <a
            href='#'
            className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
          >
            Sign Up to Volunteer
          </a>
        </div>

        {/* Membership */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-4'>Become a Member</h3>
          <p className='text-gray-600 mb-6'>
            Support our mission by becoming a member of YEAST.
          </p>
          <a
            href='#'
            className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
          >
            Join Us
          </a>
        </div>

        {/* Internship Programs */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Internship Programs</h3>
          <p className='text-gray-600 mb-6'>
            Gain hands-on experience and contribute to meaningful projects.
          </p>
          <a
            href='#'
            className='bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800'
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};
