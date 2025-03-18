import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VidImg from "../assets/3.jpg";
import { Link } from "react-router-dom";
import Gallery from "./Gallery";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToGallery) {
      const gallerySection = document.getElementById("gallery");
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      {/* Banner Section */}
      <section
        className='bg-cover bg-center text-white py-20'
        style={{ backgroundImage: `url(${VidImg})` }}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-4xl font-bold mb-4'>
            Empowering Youth for a Sustainable Future
          </h1>
          <p className='text-lg mb-8'>
            Join us in creating a better world through environmental
            conservation, social development, and community empowerment.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <Link
              to='/get-involved'
              className='bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100'
            >
              Get Involved
            </Link>
            <Link
              to='/donate'
              className='bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100'
            >
              Donate
            </Link>
            <Link
              to='/get-involved'
              className='bg-white text-green-700 px-6 py-2 rounded-lg font-semibold hover:bg-green-100'
            >
              Volunteer
            </Link>
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
              <h3 className='text-xl font-bold mb-2'>Empowering Women</h3>
              <p className='text-gray-600'>
                We’ve empowered women in rural areas through skill development
                and entrepreneurship programs.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h3 className='text-xl font-bold mb-2'>Youth Leadership</h3>
              <p className='text-gray-600'>
                Our leadership training programs have shaped young leaders who
                are making a difference in their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id='gallery' className='py-12 bg-gray-100'>
        <Gallery />
      </section>
    </div>
  );
};

export default Home;
