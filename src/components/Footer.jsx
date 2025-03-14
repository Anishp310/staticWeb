import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-12' id='Footer'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-bold mb-4'>About YEAST</h3>
            <p className='text-sm text-gray-400'>
              YEAST is dedicated to creating a sustainable future through
              environmental conservation, social work, and community engagement.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-sm text-gray-400 hover:text-green-500'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-sm text-gray-400 hover:text-green-500'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  className='text-sm text-gray-400 hover:text-green-500'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/get-involved'
                  className='text-sm text-gray-400 hover:text-green-500'
                >
                  Get Involved
                </Link>
              </li>
              <li>
                <Link
                  to='/donate'
                  className='text-sm text-gray-400 hover:text-green-500'
                >
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Advisors Section */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Advisors</h3>
            <ul className='text-sm text-gray-400 space-y-2'>
              <li>Huma Neupane, PhD</li>
              <li>Director, DORP, IAAS, TU</li>
              <li>Asst. Prof. Kamal Regmi</li>
              <li>IAAS, TU</li>
              <div>
                <li>Dr. Aakrit Rizal</li>
                <li>Former President</li>
              </div>
              <div>
                <li>Anish Gyawali</li>
                <li>Former President</li>
              </div>
              <div>
                <li>Utsab Sapkota</li>
                <li>Former President</li>
              </div>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
            <ul className='text-sm text-gray-400 space-y-2'>
              <li>Email: info@yeast.org</li>
              <li>Phone: +977 9867230656</li>
              <li>Address: Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='md:flex md:flex-col md:justify-center md:items-center mt-5'>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a
              href='https://www.facebook.com/yeast2022'
              className='text-gray-400 hover:text-blue-500'
            >
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
              </svg>
            </a>

            <a
              href='www.instagram.com/yeast2022'
              className='text-gray-400 hover:text-red-500'
            >
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
              </svg>
            </a>
            <a
              href='https://www.linkedin.com/in/yeast2022/'
              className='text-gray-400 hover:text-blue-500'
            >
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.47 8H5v12H.47V8zm7.53 0h4.36v1.72h.06c.61-1.15 2.1-2.37 4.32-2.37 4.62 0 5.47 3.04 5.47 6.99V20H17v-5.64c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V20H8V8z' />
              </svg>
            </a>
            <a
              href='https://www.tiktok.com/@yeast2022'
              className='text-gray-400 hover:text-black-500'
            >
              <svg
                className='h-6 w-6'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M16.14 1.5h2.09a6.26 6.26 0 01-2.16-3.5h-2.34v14.94a4.77 4.77 0 01-9.54 0 4.77 4.77 0 014.77-4.77c.49 0 .97.08 1.42.23V8.77a6.89 6.89 0 00-1.42-.15A6.67 6.67 0 002 14.22a6.67 6.67 0 006.67 6.67A6.67 6.67 0 0015.14 14V4.4a9.12 9.12 0 005.6 1.84V4.03a6.49 6.49 0 01-4.6-1.98z' />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} YEAST. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
