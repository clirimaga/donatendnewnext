"use client";
import React, { Fragment, useState } from "react";
import { useRouter } from "next/navigation";
import ProductPage from "@/components/productPage/ProductPage";

export default function RetractablePergola() {
  const handleNavigate = useRouter();
  const [slide, setSlide] = useState(0);

  const images = [
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/Glass-solutions-products.jpg",
      h1: "Skyfix",
      alt: "Skyfix",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/skymove-introduction.jpg",
      h1: "Skymove",
      alt: "Skymove",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/guillotine-glass-introduction.jpg",
      h1: "Guillotine",
      alt: "Guillotine",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/sliding-glass-introduction.jpg",
      h1: "Sliding Glass",
      alt: "Sliding Glass",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/fix-glass-facade-introduction.jpg",
      h1: "Fix Glass",
      alt: "Fix Glass",
    },
  ];

  const gallery = [
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
      alt: "Retractable Pergola",
    },
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
      alt: "Retractable Pergola",
    },
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
      alt: "Retractable Pergola",
    },
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
      alt: "Retractable Pergola",
    },
  ];

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };
  const text =
    "Our Glass Systems are produced with aluminum materials draws attention with its flexibility, strong and minimal features in its bioclimatic pergola designs.";
  return (
    <ProductPage images={images} gallery={gallery} text={text} />
    
  );
}
