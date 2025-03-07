import React, { useState } from "react";
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

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8; 
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section className='p-4' >
      <h2 className='text-3xl font-bold text-center mb-8'>Gallery</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {currentImages.map((src, index) => (
          <div key={index} className='overflow-hidden rounded-lg shadow-md'>
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className='w-full h-full object-cover transform transition duration-300 hover:scale-105'
            />
          </div>
        ))}
      </div>
      {/* Pagination Controls */}
      <div className='flex justify-center items-center mt-4 space-x-4'>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className='px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50'
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className='px-4 py-2 bg-gray-300 text-gray-800 rounded disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Gallery;
