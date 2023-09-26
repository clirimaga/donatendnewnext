import ProductPage from "@/components/productPage/ProductPage";

export default function ScreensBlinds() {
  const images = [
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/zip-screens-products.jpg",
      h1: "Zip Screen",
      alt: "Zip Screen",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/articulated-awning-introdcution.jpg",
      h1: "Crystal Zip",
      alt: "Crystal Zip",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/roof-zip-introduction.jpg",
      h1: "Roof Zip",
      alt: "Roof Zip",
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

  const text =
    "Our Screens and blinds are produced with aluminum materials draws attention with its flexibility, strong and minimal features in its bioclimatic pergola designs.";
  return <ProductPage images={images} gallery={gallery} text={text} />;
}
