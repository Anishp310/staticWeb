import React from "react";
import VidImg1 from "../assets/1.jpg"; 
import VidImg2 from "../assets/2.jpg";
import Advisor1 from "../assets/team/HumaNeupane.png";
import Advisor2 from "../assets/team/KamalRegmi.jpg";
import Advisor3 from "../assets/team/AkritRijal.jpg";
import Advisor4 from "../assets/team/Anish Gyawali.jpg";
import Advisor5 from "../assets/team/Utsab Sapkota.jpg";
import President from "../assets/team/Pardip bhusal.jpg";
import VPresident from "../assets/team/Resma KC.jpg";
import Secretary from "../assets/team/Arbin Dawadi.jpg";
import VSecretary from "../assets/team/sadikshya Bhattarai.jpg";
import Treasurer from "../assets/team/Indu Panthi.jpg";
import AC from "../assets/team/saraswati_gautam.jpg";
import SC from "../assets/team/manisha_dhakal.jpg";
import Smc from "../assets/team/ritu Bhattarai.jpg";
import m1 from "../assets/team/m1.jpg";
import m2 from "../assets/yeast_logo.jpg";
import m3 from "../assets/yeast_logo.jpg";
import m4 from "../assets/team/m4.jpg";
import m5 from "../assets/team/m5.jpg";
import m6 from "../assets/team/m6.jpg"; 
import m7 from "../assets/team/m7.jpg";
import m8 from "../assets/team/m8.jpg";
import Samikshya from "../assets/team/Samikshya Ryamajhi.jpg";
import Bishal from "../assets/team/BIshal Dhungana.jpg";
import kamal from "../assets/team/Kamal Acharya.jpg";
import Srijana from "../assets/team/Sirjana Basyal.jpg";
import Manish from "../assets/team/Manish Dahal.jpg";
import Samundra from "../assets/team/samundra Pandey.jpg";








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
        <h2 className='absolute top-[10%] left-[10%] text-3xl font-bold text-center mb-8 mt-8 text-black'>
          About Youth for Environment And Social Transformation-YEAST
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
                src={Advisor1}
                alt='Huma Neupane'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Huma Neupane, PhD</h4>
              <p className='text-gray-600'>Director, DORP, IAAS, TU</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Advisor2}
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
                src={Advisor3} 
                alt='Akrit Rizal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Dr. Akrit Rizal</h4>
              <p className='text-gray-600'>Founding President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Advisor4} 
                alt='Anish Gyawali'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Anish Gyawali </h4>
              <p className='text-gray-600'>Former President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Advisor5} 
                alt='Utsab Sapkota'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Utsab Sapkota</h4>
              <p className='text-gray-600'>Former President</p>
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
                src={President} 
                alt='Pradeep Bhusal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Pradeep Bhusal</h4>
              <p className='text-gray-600'>President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={VPresident} 
                alt='Reshma KC'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Reshma KC</h4>
              <p className='text-gray-600'>Vice President</p>
            </div> <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Secretary} 
                alt='Secretary'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Arbin Dawadi</h4>
              <p className='text-gray-600'>Secretary</p>
            </div> <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={VSecretary} 
                alt='Vice Secretary'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Sadikshya Bhattarai</h4>
              <p className='text-gray-600'>Vice Secretary</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Treasurer} 
                alt='Treasurer'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Indu Panthi</h4>
              <p className='text-gray-600'>Treasurer</p>
            </div>
           
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={AC} 
                alt='Applied Coordinator'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Saraswoti Gautam</h4>
              <p className='text-gray-600'>Applied Coordinator</p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Smc}
                alt='Ritu Bhattarai'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Ritu Bhattarai</h4>
              <p className='text-gray-600'>Social Media Coordinator</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={SC} 
                alt='Manisha Dhakal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Manisha Dhakal</h4>
              <p className='text-gray-600'>Social Coordinator</p>
            </div>
          </div>
        </div>

        <div className="members">
          <h3 className='text-2xl font-bold mb-8 text-center'>Our Members</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={m1} 
                alt='Kritima Sapkota'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Kritima Sapkota</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={m2} 
                alt='Samikshya Khanal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Samikshya Khanal</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={m3} 
                alt='Amrit Bhusal'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Amrit Bhusal</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={m4} 
                alt='Prabin Thapa'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Prabin Thapa</h4>
              <p className='text-gray-600'>Member</p>
            </div>
           
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={m5} 
                alt='Bishal Kunwar'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Bishal Kunwar</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                 src={m6}
                alt='Kalyan Aryan'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Kalyan Aryan</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                 src={m7}
                alt='Sanjay Yadav'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Sanjay Yadav</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                 src={m8}
                alt='Sandeep Mourya'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Sandeep Mourya</h4>
              <p className='text-gray-600'>Member</p>
            </div>

          </div>
        </div>

        <div className="founding Comittee">
          <br></br>
          <h3 className='text-2xl font-bold mb-8 text-center'>Founding Committee</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          
          <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Advisor3} 
                alt='President'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Dr. Akrit Rijal</h4>
              <p className='text-gray-600'>President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Srijana} 
                alt='Vice President'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Srijana Basyal</h4>
              <p className='text-gray-600'>Vice President</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Advisor4} 
                alt='Secretary'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Anish Gyawali </h4>
              <p className='text-gray-600'>Secretary</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Manish} 
                alt='VSecretary'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Manish Dahal </h4>
              <p className='text-gray-600'>Secretary</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={m2} 
                alt='Tresaurer'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Bipin Bhandari </h4>
              <p className='text-gray-600'>Treasurer</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={kamal} 
                alt='Kamal Acharya'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Kamal Acharya</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Advisor5} 
                alt='Utsab Sapkota'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Utsab Sapkota</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Bishal} 
                alt='Bishal Dhungana'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Bishal Dhungana</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Samikshya} 
                alt='Samikshya Rayamajhi '
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Samikshya Rayamajhi </h4>
              <p className='text-gray-600'>Member</p>
            </div>
           
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                src={Treasurer} 
                alt='Indu Panth'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Indu Panthi</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                 src={Secretary}
                alt='Arbin Dawadi'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Mr. Arbin Dawadi</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                 src={m2}
                alt='Indu Gyawali'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Indu Gyawali</h4>
              <p className='text-gray-600'>Member</p>
            </div>
            
            <div className='bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300'>
              <img
                 src={m3}
                alt='Prakriti'
                className='w-24 h-24 rounded-full mx-auto mb-4'
              />
              <h4 className='text-xl font-bold mb-2'>Prakriti Bhusal</h4>
              <p className='text-gray-600'>Member</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
