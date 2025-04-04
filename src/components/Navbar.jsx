import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/yeast_logo.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToGallery = () => {
    navigate("/", { state: { scrollToGallery: true } });
  };

  const scrollToCollaborate = () => {
    navigate("/", { state: { scrollToCollaborate: true } }); 
  };

  //for mobil
  const scrollforGallery = () => {
     setIsMenuOpen(!isMenuOpen);
    navigate("/", { state: { scrollToGallery: true } });
  };
  const scrollforCollaborate = () => {
    setIsMenuOpen(!isMenuOpen);
    navigate("/", { state: { scrollToCollaborate: true } });
  };

  return (
    <nav className='bg-white shadow-lg'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-25'>
          <div className='flex-shrink-0 flex items-center'>
            <Link to='/' className='text-2xl font-bold text-green-700'>
              <img src={logo} alt='YEAST Logo' className='h-20 w-auto' />
            </Link>
          </div>
          <div className='hidden md:flex space-x-8 items-center'>
            <Link
              to='/'
              className='text-gray-700 hover:text-green-600 font-medium'
            >
              Home
            </Link>
            <Link
              to='/about'
              className='text-gray-700 hover:text-green-600 font-medium'
            >
              About Us
            </Link>
            <Link
              to='/projects'
              className='text-gray-700 hover:text-green-600 font-medium'
            >
              Projects
            </Link>
            <Link
              to='/get-involved'
              className='text-gray-700 hover:text-green-600 font-medium'
            >
              Get Involved
            </Link>
            <Link
              to='/donate'
              className='text-gray-700 hover:text-green-600 font-medium'
            >
              Donate
            </Link>
            <a
              href='#gallery'
              className='text-gray-700 hover:text-green-600 font-medium'
              onClick={scrollToGallery}
            >
              Gallery
            </a>
            <a
              href='#collaborate' // Corrected href
              className='text-gray-700 hover:text-green-600 font-medium cursor-pointer'
              onClick={scrollToCollaborate}
            >
              Collaborate
            </a>
            <a
              href='#Footer'
              className='text-gray-700 hover:text-green-600 font-medium'
            >
              Contact Us
            </a>
          </div>
          <div className='flex items-center md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-700 hover:text-green-600 focus:outline-none'
            >
              {isMenuOpen ? (
                <FaTimes className='h-6 w-6' />
              ) : (
                <FaBars className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to='/about'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to='/projects'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to='/get-involved'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={toggleMenu}
            >
              Get Involved
            </Link>
            <Link
              to='/donate'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={toggleMenu}
            >
              Donate
            </Link>
            <a
              href='#gallery'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={ scrollforGallery}
            >
              Gallery
            </a>
            <a
              href='#collaborate'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={scrollforCollaborate}
            >
              Collaborate
            </a>
            <a
              href='#Footer'
              className='block text-gray-700 hover:text-green-600 font-medium'
              onClick={toggleMenu}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
