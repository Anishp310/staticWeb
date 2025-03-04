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
            Volunteering is a powerful way to contribute to the community and
            make a tangible difference. Whether you're looking to help with
            events, support local initiatives, or offer your expertise, there
            are countless opportunities to get involved. Volunteers play an
            essential role in bringing our projects to life, and your time and
            effort can have a lasting impact. We encourage everyone to
            participate and join our mission to create a positive change in the
            world.
          </p>
        </div>

        {/* Membership */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-4'>Become a Member</h3>
          <p className='text-gray-600 mb-6'>
            Becoming a member of our organization allows you to be part of a
            community working toward a shared vision. As a member, you'll
            receive regular updates on our initiatives, gain access to special
            events, and have the opportunity to participate in shaping the
            direction of our work. Your support helps us continue our efforts
            and reach even more people. Join us today and help us grow our
            impact.
          </p>
        </div>

        {/* Internship Programs */}
        <div>
          <h3 className='text-2xl font-bold mb-4'>Internship Programs</h3>
          <p className='text-gray-600 mb-6'>
            Our internship programs provide valuable hands-on experience while
            allowing you to contribute to meaningful projects. Interns have the
            chance to work closely with experts, develop new skills, and engage
            in work that directly benefits our mission. Whether you're pursuing
            a career in non-profit work, social impact, or another field, our
            internship programs offer the opportunity to make a difference while
            building your professional skills.
          </p>
        </div>
      </div>
    </div>
  );
};
