"use client";
import React from "react";
import styles from "./styles.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BackgroudStyled } from "@/styles/slider-style";
import Link from "next/link";

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
      btnLink: "/about",
    },
    {
      id: 2,
      bgImage: "./images/background002.png",
      text: "Fostering Development",
      body: "Transforming Technology Byte by Byte",
      button: "Contact Us",
      btnLink: "/contact",
    },
    {
      id: 3,
      bgImage: "./images/bg3.png",
      text: "Colaborative Workspace",
      body: "A Hub For Tech Brillance, Where Minds Flourish",
      button: "Book A space",
      btnLink: "/pricing",
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
              <Link href={slide.btnLink} className={styles.btnLink}>
                <button>{slide.button}</button>
              </Link>
            </div>
          </BackgroudStyled>
        );
      })}
    </Slider>
  );
};

export default HeroSection;
