import ProductPage from "@/components/productPage/ProductPage";

export default function BioclimaticPergola() {
  const images = [
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-8.jpg",
      alt: "Bioclimatic Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-6.jpg",
      alt: "Bioclimatic Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-1.jpg",
      alt: "Bioclimatic Pergola",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-4.jpg",
      alt: "Bioclimatic Pergola",
    },
  ];
  const gallery = [
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688823726/donatend/bio2_x1psuv.jpg",
      alt: "Bioclimatic Pergola",
    },
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688823728/donatend/bio3_lzgat2.jpg",
      alt: "Bioclimatic Pergola",
    },
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688823731/donatend/bio4_gtg5dt.jpg",
      alt: "Bioclimatic Pergola",
    },
    {
      src: "https://res.cloudinary.com/dffxhlnzz/image/upload/v1688823726/donatend/bio2_x1psuv.jpg",
      alt: "Bioclimatic Pergola",
    },
  ];
  const text =
    "Our bioclimatic pergolas are produced with aluminum materials draws attention with its flexibility, strong and minimal features in its bioclimatic pergola designs.";
  return <ProductPage images={images} gallery={gallery} text={text} />;
}
