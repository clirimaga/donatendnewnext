"use client";
import React, { useEffect, useState } from "react";
import "./CarouselHp.css";
import { useRouter } from "next/navigation";
import Carousel from "../UI/Carousel";
import Button from "../UI/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
const images = [
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-1.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-6.jpg",
    alt: "Bioclimatic Pergola",
    h1: "Bioclimatic Pergola",
    h2: "Beschattung",
    texten: "Anatolia, Rolling Bioclimatic models from Dona Tend!",
    textde: "Anatolia, Rolladen modelle von Dona Tend!",
    navigate: "/bioclimatic-pergola",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/Crown-introduction.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/armada-introduction.jpg",
    alt: "Retractable Pergola",
    h1: "Retractable Pergola",
    h2: "Pergola",
    texten:
      "Icon, Viva, Crown, Imperial, Alba and other models from Dona Tend!",
    textde:
      "Icon, Viva, Crown, Imperial, Alba und andere modelle von Dona Tend!",
    navigate: "/retractable-pergola",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/Glass-solutions-products.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/skymove-introduction.jpg",
    alt: "Glass Systems",
    h1: "Glass Systems",
    h2: "Wintergärten",
    texten:
      "Skyfix, Skymove, Guillotine, Sliding, Folding and other models from Dona Tend!",
    textde:
      "Skyfix, Skymove, Guillotine, Sliding, Folding und andere modelle von Dona Tend!",
    navigate: "/glass-systems",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/articulated-awning-introdcution.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/casette-awning-introduction.jpg",
    alt: "Awnings",
    h1: "Awnings",
    h2: "Markisen",
    texten: "Casette, Articulated, Wintent and other models from Dona Tend!",
    textde: "Casette, Articulated, Wintent und andere modelle von Dona Tend!",
    navigate: "/awnings",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/zip-screens-products.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/crystal-zip-introduction.jpeg",
    alt: "Screens and Blinds",
    h1: "Screens and Blinds",
    h2: "Screen und Jalousie fenster",
    texten: "Zip screen, Crystal and Roof models from Dona Tend!",
    textde: "Zip screen, Kristal und Dachmodelle von  Dona Tend!",
    navigate: "/screens-blinds",
  },
];

export default function CarouselHP() {
  const [slide, setSlide] = useState(0);
  const router = useRouter();
  const handleNavigate = (url) => {
    router.push(`/${url}`);
  };

  const path = usePathname();
  console.log(path);
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
            {path === "/en" && <h1>{el.h1}</h1>}
            {path === "/de" && <h1>{el.h2}</h1>}
            {path === "/en" && <p>{el.texten}</p>}
            {path === "/de" && <p>{el.textde}</p>}

            <Button onClick={() => router.push(`${path}${el.navigate}`)}>
              {path === "/en" ? "See More!" : "Mehr Infos!"}
            </Button>
          </div>
        );
      })}
    </Carousel>
  );
}
