import React, { useState } from 'react';
import img from '../assets/img.svg';
import question from '../assets/question.svg';
import group from '../assets/group.svg';

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([img, img, img]); // Initial images

  const handleAddImage = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setGalleryImages([...galleryImages, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="bg-tab-dark p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          <div className="flex flex-col items-center">
            <img src={question} alt="Question" className="mb-4" />
          </div>
          <button className="bg-black text-white px-4 ml-2 mb-2 rounded-2xl">
            Gallery
          </button>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={handleAddImage} className="bg-gallery-btn text-white px-4 py-2 rounded-2xl">
            + Add Image
          </button>
          <div className="flex space-x-2">
            <button className="gallery-nav-btn px-2 py-1 rounded-[50%]">
              &larr;
            </button>
            <button className="gallery-nav-btn px-2 py-1 rounded-[50%]">
              &rarr;
            </button>
          </div>
        </div>
      </div>

      <div className="flex space-x-4">
      <div className="mt-2">
      <div className="grid grid-cols-2">
              <img src={group} alt="Group" className="m-0 p-0 inline-block" />
              <img src={group} alt="Group" className="m-0 p-0 inline-block" />
              <img src={group} alt="Group" className="m-0 p-0 inline-block" />
              <img src={group} alt="Group" className="m-0 p-0 inline-block" />
              <img src={group} alt="Group" className="m-0 p-0 inline-block" />
              <img src={group} alt="Group" className="m-0 p-0 inline-block" />
            </div>
        </div>

        <div className="flex space-x-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="w-32 h-32 bg-gray-700 rounded-lg">
              <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;

