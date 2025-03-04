import React from "react";
import AnimalWelfareImg from "../assets/animal-welfare.jpg"; 
import SustainableAgriImg from "../assets/sustainable-agticulture.jpg"; 
import EnvironmentalConservationImg from "../assets/env-conv.jpg"; 
import RabiesControlImg from "../assets/rabies-control.jpg"; 
import YouthTrainingImg from "../assets/youth-train.jpg"; 
import VidImg2 from "../assets/2.jpg"; 

export const Projects = () => {
  return (
    <div className='py-12 pt-0'>
      <div className='relative w-full h-64 '>
        <img
          src={VidImg2}
          alt='Banner'
          className='w-full h-full object-cover'
        />
        <h2 className='absolute top-[30%] left-[30%] text-3xl font-bold text-center mb-8 text-white'>
          Projects & Initiatives
        </h2>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src={AnimalWelfareImg}
              alt='Animal Welfare'
              className='w-full h-56 object-cover mb-4 rounded'
            />
            <h3 className='text-xl font-bold mb-2'>Animal Welfare</h3>
            <p className='text-gray-600'>
              Sterilization and vaccination drives for stray animals.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src={SustainableAgriImg}
              alt='Sustainable Agriculture'
              className='w-full h-56 object-cover mb-4 rounded'
            />
            <h3 className='text-xl font-bold mb-2'>Sustainable Agriculture</h3>
            <p className='text-gray-600'>
              Training farmers in eco-friendly farming techniques.
            </p>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-lg'>
            <img
              src={EnvironmentalConservationImg}
              alt='Environmental Conservation'
              className='w-full h-56 object-cover mb-4 rounded'
            />
            <h3 className='text-xl font-bold mb-2'>
              Environmental Conservation
            </h3>
            <p className='text-gray-600'>
              Tree plantation and waste management programs.
            </p>
          </div>
        </div>

        <div className='mt-12'>
          <h3 className='text-2xl font-bold mb-4'>Impact Stories</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <img
                src={RabiesControlImg}
                alt='Rabies Control'
                className='w-full h-56 object-cover mb-4 rounded'
              />
              <h4 className='text-xl font-bold mb-2'>Rabies Control</h4>
              <p className='text-gray-600'>
                Reduced rabies cases by 50% in Arghakhanchi.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <img
                src={YouthTrainingImg}
                alt='Youth Training'
                className='w-full h-56 object-cover mb-4 rounded'
              />
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
