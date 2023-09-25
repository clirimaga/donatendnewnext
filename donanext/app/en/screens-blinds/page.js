'use client'
import React,{ Fragment , useState} from 'react';
import ProductPage from "@/components/productPage/ProductPage";
import { useRouter } from 'next/navigation';


export default function RetractablePergola() {  
  const handleNavigate = useRouter();
  const [slide, setSlide] = useState(0);
  
  const images = [
    {
      "src": "https://artent.com.tr/wp-content/uploads/2022/02/zip-screens-products.jpg",
      "h1": "Zip Screen",
      "alt": "Zip Screen"
    },
    {
      "src": "https://artent.com.tr/wp-content/uploads/2022/02/articulated-awning-introdcution.jpg",
      "h1": "Crystal Zip",
      "alt": "Crystal Zip"
    },{
      "src": "https://artent.com.tr/wp-content/uploads/2022/02/roof-zip-introduction.jpg",
      "h1": "Roof Zip",
      "alt": "Roof Zip"
    }
  ]
    const gallery = [
        {
          "src": "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
          "alt": "Retractable Pergola"
        },{
          "src": "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
          "alt": "Retractable Pergola"
        },{
          "src": "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
          "alt": "Retractable Pergola"
        },{
          "src": "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688819597/donatend/Whafd_2023-07-04_um_15.48.27_eo4djm.jpg",
          "alt": "Retractable Pergola"
        }
      ]
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };
const text = "Our Zips are produced with aluminum materials draws attention with its flexibility, strong and minimal features in its bioclimatic pergola designs.";
  return (
    <ProductPage images={images} gallery={gallery} text={text}/>
  )
}