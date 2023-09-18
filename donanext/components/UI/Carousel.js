'use client'

import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export default function Carousel(props) {
  const { images, slide, setSlide } = props;

  useEffect(() => {
    const changeSlide = () => {
      setSlide(s => (s === images.length - 1 ? 0 : s + 1));
    };
    const interval = setInterval(changeSlide, 7000);
    return () => clearInterval(interval);
  }, [images.length, setSlide]);

  const nextSlide = () => {
    setSlide(s => (s === images.length - 1 ? 0 : s + 1));
  };

  const prevSlide = () => {
    setSlide(s => (s === 0 ? images.length - 1 : s - 1));
  };

  return (
    <section className='carousel'>
      <AiOutlineArrowLeft className='arrow arrow-left' onClick={prevSlide} />
      {props.children}
      <span className='indicators'>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={slide === i ? 'indicator' : 'indicator indicator-inactive'}
          ></button>
        ))}
      </span>
      <AiOutlineArrowRight className='arrow arrow-right' onClick={nextSlide} />
    </section>
  );
}