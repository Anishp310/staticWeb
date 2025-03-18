import React from "react";
import VidImg1 from "../assets/1.jpg"; 
import VidImg2 from "../assets/2.jpg";
import Advisor1 from "../assets/team/AakritRijal.jpg";


export const About = () => {
  return (
    <div className='py-12 pt-0 bg-gray-50'>
      <div></div>
      <div className='relative w-full h-64  overflow-hidden'>
        <img
          src={VidImg2}
          alt='Banner'
          className='w-full h-full object-cover'
        />
        <h2 className='absolute top-[20%] left-[30%] text-3xl font-bold text-center mb-8 mt-8 text-white'>
          About YEAST
        </h2>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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

        <div className='w-full h-64 md:h-96 overflow-hidden my-12'>
          <img
            src={VidImg1}
            alt='Banner'
            className='w-full h-full object-cover'
          />
        </div>

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

        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-8 text-center'>Our Advisors</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
                alt='Huma Neupane'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Huma Neupane, PhD</h4>
              <p className='text-gray-600'>Director, DORP, IAAS, TU</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
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
                src={Advisor1} 
                alt='Aakrit Rizal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Dr. Aakrit Rizal</h4>
              <p className='text-gray-600'>Founding President</p>
            </div>
          </div>
        </div>

        <div className='mb-12'>
          <h3 className='text-2xl font-bold mb-8 text-center'>
            Executive Board 2024/25
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
                alt='Pradeep Bhusal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Pradeep Bhusal</h4>
              <p className='text-gray-600'>President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
                alt='Saraswoti Gautam'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Saraswoti Gautam</h4>
              <p className='text-gray-600'>Applied Coordinator</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150'
                alt='Ritu Bhattarai'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Ritu Bhattarai</h4>
              <p className='text-gray-600'>Social Media Coordinator</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
                alt='Manisha Dhakal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Manisha Dhakal</h4>
              <p className='text-gray-600'>Social Coordinator</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-2xl font-bold mb-8 text-center'>Our Members</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Kritima Sapkota</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150'
                alt='Amrit Bhusal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Amrit Bhusal</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150' 
                alt='Prabin Thapa'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Prabin Thapa</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src='https://via.placeholder.com/150'
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
