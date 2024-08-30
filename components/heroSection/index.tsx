"use client";
import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackgroudStyled } from "@/styles/slider-style";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    {
      id: 1,
      bgImage: "./images/background001.png",
      text: "Creative and Innovative Workspace",
      body: "Innovation Juction: Where Tech Ideas Coverage",
      button: "Learn More",
    },
    {
      id: 2,
      bgImage: "./images/background002.png",
      text: "Fostering Development",
      body: "Transforming Technology Byte by Byte",
      button: "Contact Us",
    },
    {
      id: 3,
      bgImage: "./images/bg3.png",
      text: "Colaborative Workspace",
      body: "A Hub For Tech Brillance, Where Minds Flourish",
      button: "Book A space",
    },
  ];

  return (
    <Slider {...settings}>
      {slides?.map((slide) => {
        return (
          <BackgroudStyled img={slide.bgImage} key={slide.id}>
            <div className={styles.slidercontent}>
              <h2>{slide.text}</h2>
              <p>{slide.body}</p>
              <button>{slide.button}</button>
            </div>
          </BackgroudStyled>
        );
      })}
    </Slider>
  );
};

export default HeroSection;
