import ProductPage from "@/components/productPage/ProductPage";

export default function RetractablePergola() {
  const images = [
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/viva-introduction.jpg",
      alt: "Viva Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/Iconintroduction.jpg",
      alt: "Icon Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/Crown-introduction.jpg",
      alt: "Crown Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/imperial-introduction.jpg",
      alt: "Imperial Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/alba-introduction.jpg",
      alt: "Alba Pergola",
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
    "Our Retractable pergolas are produced with aluminum materials draws attention with its flexibility, strong and minimal features in its bioclimatic pergola designs.";
  return <ProductPage images={images} gallery={gallery} text={text} />;
}
