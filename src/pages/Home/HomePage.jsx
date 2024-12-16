import React from "react";
import "./homepage.css";
import TextPage from "../../components/Text/TextPage";
import IconPage from "../../components/Icons/IconPage";
import GalleryPage from "../../components/Gallery/GalleryPage";

import image1 from "../../assets/jewel1.jpg";
import image2 from "../../assets/jewel2.jpg";
import image3 from "../../assets/jewel3.jpg";
import image4 from "../../assets/jewel4.jpg";

const HomePage = () => {
  return (
    <div className="bg-container">
      <div className="main-container">
        <TextPage />
        <IconPage />

        <div className="gallery-wrapper">
          <GalleryPage src={image1} width="389px" height="481px" />
          <GalleryPage src={image2} width="313px" height="374px" />
          <GalleryPage src={image3} width="313px" height="272px" />
          <GalleryPage src={image4} width="313px" height="416px" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
