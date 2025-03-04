import React from "react";

export const About = () => {
  return (
    <div className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-bold text-center mb-8'>About YEAST</h2>

        {/* Vision, Mission, Goals, and Objectives */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-4 text-gray-700'>Our Vision</h3>
          <p className='text-gray-600 mb-6'>
            Create a sustainable and equitable society where youth play a vital
            role in environmental conservation, social development, and
            community empowerment.
          </p>
          <ul className='list-disc list-inside text-gray-600 mb-6'>
            <li>
              Focus on environmental conservation, social development, and
              community empowerment.
            </li>
          </ul>

          <h3 className='text-2xl font-bold mb-4 text-gray-700'>Our Mission</h3>
          <p className='text-gray-600 mb-6'>
            Empower youth by enhancing leadership skills and social
            responsibility.
          </p>
          <ul className='list-disc list-inside text-gray-600 mb-6'>
            <li>
              Engage in environmental conservation, sustainable agriculture, and
              social transformation.
            </li>
            <li>
              Bridge the gap between academic knowledge and practical
              implementation.
            </li>
            <li>
              Promote community-driven solutions for long-term societal impact.
            </li>
          </ul>

          <h3 className='text-2xl font-bold mb-4 text-gray-700'>Our Goals</h3>
          <ul className='list-disc list-inside text-gray-600 mb-6'>
            <li>
              Implement Animal Welfare programs (birth control, vaccination
              drives).
            </li>
            <li>Support eco-friendly and sustainable farming techniques.</li>
            <li>Promote environmental awareness and education in Nepal.</li>
            <li>
              Encourage youth participation in sustainable development
              initiatives.
            </li>
            <li>
              Foster leadership, innovation, and community engagement among
              youth.
            </li>
            <li>
              Advocate for social transformation through education, debates, and
              workshops.
            </li>
            <li>
              Strengthen partnerships with local communities, organizations, and
              stakeholders.
            </li>
          </ul>

          <h3 className='text-2xl font-bold mb-4 text-gray-700'>
            Our Objectives
          </h3>
          <ul className='list-disc list-inside text-gray-600'>
            <li>
              Conduct awareness programs and training on environmental and
              social issues.
            </li>
            <li>
              Organize tree plantation, waste management, and climate action
              initiatives.
            </li>
            <li>
              Provide technical and practical knowledge to farmers for
              sustainable agriculture.
            </li>
            <li>
              Implement youth-led initiatives in rural areas to promote social
              welfare.
            </li>
            <li>
              Encourage research and innovation in environmental conservation.
            </li>
            <li>
              Improve livelihood opportunities through skill development and
              entrepreneurship training.
            </li>
            <li>
              Ensure transparency and sustainability in all YEAST projects.
            </li>
          </ul>
        </div>

        {/* History and Milestones */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-4'>History and Milestones</h3>
          <p className='text-gray-600'>
            Founded in 2022, YEAST has conducted numerous programs, including
            Animal Birth Control camps, technical training, and community
            outreach initiatives.
          </p>
          <ul className='list-disc list-inside text-gray-600 mt-2'>
            <li>2023 - Launched the first large-scale ABC camp.</li>
            <li>
              2023 - Introduced technical training for veterinary students.
            </li>
            <li>2024 - Expanded outreach initiatives to rural areas.</li>
          </ul>
        </div>

        {/* Advisors Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-8 text-center'>Our Advisors</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Advisor Card */}
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Huma Neupane'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Huma Neupane, PhD</h4>
              <p className='text-gray-600'>Director, DORP, IAAS, TU</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Kamal Regmi'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>
                Asst. Prof. Kamal Regmi
              </h4>
              <p className='text-gray-600'>IAAS, TU</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Aakrit Rizal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Dr. Aakrit Rizal</h4>
              <p className='text-gray-600'>Founding President</p>
            </div>
          </div>
        </div>

        {/* Executive Board Section */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-8 text-center'>
            Executive Board 2024/25
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Executive Board Card */}
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Pradeep Bhusal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Pradeep Bhusal</h4>
              <p className='text-gray-600'>President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Saraswoti Gautam'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Saraswoti Gautam</h4>
              <p className='text-gray-600'>Applied Coordinator</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Ritu Bhattarai'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Ritu Bhattarai</h4>
              <p className='text-gray-600'>Social Media Coordinator</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Manisha Dhakal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Manisha Dhakal</h4>
              <p className='text-gray-600'>Social Coordinator</p>
            </div>
          </div>
        </div>

        {/* Members Section */}
        <div>
          <h3 className='text-2xl font-bold mb-8 text-center'>Our Members</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Member Card */}
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Kritima Sapkota'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Kritima Sapkota</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Amrit Bhusal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Amrit Bhusal</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Prabin Thapa'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Prabin Thapa</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' // Replace with actual image URL
                alt='Bishal Kunwar'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Bishal Kunwar</h4>
              <p className='text-gray-600'>Member</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
