import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./slider.css";

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    
      const slides = [
        {
          id: 1,
          bgImage: "url1.jpg",
          text: "Creative and Innovative Workspace",
          body: "Innovation Juction: Where Tech Ideas Coverage",
          button: "Learn More",
        },
        {
          id: 2,
          bgImage: "url2.jpg",
          text: "Fostering Development",
          body: "Transforming Technology Byte by Byte",
          button: "Contact Us",
        },
        {
          id: 3,
          bgImage: "url3.jpg",
          text: "Colaborative Workspace",
          body: "A Hub For Tech Brillance, Where Minds Flourish",
          button: "Book A space",
        },
      ];
    
  return (
    <Slider {...settings}>
    {slides.map((slide) => (
      <>
        <div key={slide.id} className={`${styles.slide} ${styles[`slide-${slide.id}`]}`}>
          <div className={styles.slidercontent}>
            <h2>{slide.text}</h2>
            <p>{slide.body}</p>
            <button>
              <p>{slide.button}</p>
            </button>
          </div>
        </div>
      </>
    ))}
  </Slider>
  );
};

export default HeroSection;
