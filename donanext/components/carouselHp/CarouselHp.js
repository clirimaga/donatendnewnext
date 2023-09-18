'use client'
import React, { useEffect, useState } from "react";
import "./CarouselHp.css";
// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/navigation";
import Carousel from "../UI/Carousel";
import Button from "../UI/Button";
// import { useSelector } from "react-redux";
import data from '../../app/json/carousel.json'

export default function CarouselHP() {
  const [slide, setSlide] = useState(0);
  const handleNavigate = useRouter();
//   const lang = useSelector(state=> state.lang.lang);
const images = data.images;
  
  return (
    <Carousel images={images} slide={slide} setSlide={setSlide}>
      {images.map((el, i) => (
        <img
          src={el.src}
          alt={el.alt}
          key={i}
          className={slide === i ? "slide" : "slide hidden"}
        />
      ))}
      {images.map((el, i) => {
        return (
          <div className={slide === i ? "text" : "text hidden"} key={i}>
             <h1>{el.h1}</h1>
             <p>{el.texten}</p>
            <Button onClick={() => handleNavigate(`${el.navigate}`)}>
              See More!
            </Button>
          </div>
        );
      })}
    </Carousel>
  );
}
