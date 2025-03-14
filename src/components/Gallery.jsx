import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import g1 from "../assets/gallery/g1.jpg";
import g2 from "../assets/gallery/g2.jpg";
import g3 from "../assets/gallery/g3.jpg";
import g4 from "../assets/gallery/g4.jpg";
import g5 from "../assets/gallery/g5.jpg";
import g6 from "../assets/gallery/g6.jpg";
import g7 from "../assets/gallery/g7.jpg";
import g8 from "../assets/gallery/g8.jpg";

const Gallery = () => {
  const images = [g1, g2, g3, g4, g5, g6, g7, g8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 4;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className='relative p-6 max-w-7xl mx-auto'>
      <h2 className='text-4xl font-bold text-center mb-8 text-gray-800'>
        Gallery
      </h2>
      <div className='relative'>
        {/* Left Arrow (hidden on small devices) */}
        <button
          onClick={handlePrev}
          className='opacity-50 absolute left-2 bottom-[45%] md:left-4 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 z-10 md:block hidden'
        >
          <FaArrowLeft size={24} />
        </button>

        {/* Images */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6'>
          {[...Array(imagesPerPage)].map((_, index) => {
            const imgIndex = (currentIndex + index) % images.length;
            return (
              <div
                key={imgIndex}
                className='overflow-hidden rounded-lg shadow-lg'
              >
                <img
                  src={images[imgIndex]}
                  alt={`Gallery Image ${imgIndex + 1}`}
                  className='w-full h-64 object-cover transform transition duration-500 hover:scale-110 rounded-lg'
                />
              </div>
            );
          })}
        </div>

        {/* Right Arrow (hidden on small devices) */}
        <button
          onClick={handleNext}
          className='opacity-50 absolute right-2 bottom-[45%] md:right-4 bg-black bg-opacity-50 text-white p-3 rounded-full shadow-lg hover:bg-opacity-80 transition duration-300 z-10 md:block hidden'
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Gallery;
