'use client'
import React,{ Fragment , useState} from 'react';
import Carousel from '../UI/Carousel';
import Gallery from '../UI/Gallery';
import { useRouter } from 'next/navigation';

export default function ProductPage({images,gallery,text}) {  
  const handleNavigate = useRouter();
  const [slide, setSlide] = useState(0);
  
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };
  return (
    <Fragment>
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
            <p>{el.text}</p>
          </div>
        );
      })}
        </Carousel>
    <Gallery gallery={gallery} text={text}/>
    </Fragment>
  )
}