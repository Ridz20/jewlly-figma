import React from "react";
import './gallerypage.css'

const GalleryPage = ({ src, width, height }) => {
  return (
    <div className="image-gallery" style={{ width, height }}>
      <div className="image-container">
        <img src={src} alt="Jewelry" className="image" />
      </div>
    </div>
  );
};

export default GalleryPage;
