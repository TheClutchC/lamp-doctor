import React, { useState } from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const [slideIndex, setSlideIndex] = useState(1);

    // Next/previous controls
    const plusSlides = (n) => {
      let newIndex = slideIndex + n;
      // Wraps the index around if it exceeds the number of slides
      if (newIndex > 6) {
        newIndex = 1;
      } else if (newIndex < 1) {
        newIndex = 6;
      }
      setSlideIndex(newIndex);
    };

  // Thumbnail image controls
  const currentSlide = (n) => {
    setSlideIndex(n);
  }

  return (
    <div className="page-container">
      {/* Container for the image gallery */}
      <div className="container">
        {/* Full-width images with number text */}
        <div className={slideIndex === 1 ? "mySlides" : "mySlides hidden"}>
          <div className="numbertext">1 / 6</div>
          <img src={require("../../images/LD-1.jpg")} alt="First" />
        </div>
        <div className={slideIndex === 2 ? "mySlides" : "mySlides hidden"}>
          <div className="numbertext">2 / 6</div>
          <img src={require("../../images/LD-2.jpg")} alt="Second" />
        </div>
        <div className={slideIndex === 3 ? "mySlides" : "mySlides hidden"}>
          <div className="numbertext">3 / 6</div>
          <img src={require("../../images/LD-4.jpg")} alt="Third" />
        </div>
        <div className={slideIndex === 4 ? "mySlides" : "mySlides hidden"}>
          <div className="numbertext">4 / 6</div>
          <img src={require("../../images/LD-5.jpg")} alt="Fourth" />
        </div>
        <div className={slideIndex === 5 ? "mySlides" : "mySlides hidden"}>
          <div className="numbertext">5 / 6</div>
          <img src={require("../../images/LD-6.jpg")} alt="Fifth" />
        </div>
        <div className={slideIndex === 6 ? "mySlides" : "mySlides hidden"}>
          <div className="numbertext">6 / 6</div>
          <img src={require("../../images/LD-7.jpg")} alt="Sixth" />
        </div>
        {/* Add other slides similarly */}

        {/* Next and previous buttons */}
        <button className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </button>

        {/* Image text */}
        <div className="caption-container">
          <p id="caption">Past Lamp Doctor Patients</p>
        </div>

        {/* Thumbnail images */}
        <div className="row">
          <div className="column">
            <img
              className={slideIndex === 1 ? "demo cursor active" : "demo cursor"}
              src={require("../../images/LD-1.jpg")}
              onClick={() => currentSlide(1)}
              alt="First"
            />
          </div>
          <div className="column">
            <img
              className={slideIndex === 2 ? "demo cursor active" : "demo cursor"}
              src={require("../../images/LD-2.jpg")}
              onClick={() => currentSlide(2)}
              alt="Second"
            />
          </div>
          <div className="column">
            <img
              className={slideIndex === 3 ? "demo cursor active" : "demo cursor"}
              src={require("../../images/LD-4.jpg")}
              onClick={() => currentSlide(3)}
              alt="Third"
            />
          </div>
          <div className="column">
            <img
              className={slideIndex === 4 ? "demo cursor active" : "demo cursor"}
              src={require("../../images/LD-5.jpg")}
              onClick={() => currentSlide(4)}
              alt="Fourth"
            />
          </div>
          <div className="column">
            <img
              className={slideIndex === 5 ? "demo cursor active" : "demo cursor"}
              src={require("../../images/LD-6.jpg")}
              onClick={() => currentSlide(5)}
              alt="Fifth"
            />
          </div>
          <div className="column">
            <img
              className={slideIndex === 6 ? "demo cursor active" : "demo cursor"}
              src={require("../../images/LD-7.jpg")}
              onClick={() => currentSlide(6)}
              alt="Sixth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;