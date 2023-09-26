import ProductPage from "@/components/productPage/ProductPage";

export default function Awnings() {
  const images = [
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/casette-awning-introduction.jpg",
      h1: "Casette",
      alt: "Casette",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/articulated-awning-introdcution.jpg",
      h1: "Articulated",
      alt: "Articulated",
    },
    {
      src: "https://artent.com.tr/wp-content/uploads/2022/02/wintent-introduction.jpg",
      h1: "Wintent",
      alt: "Wintent",
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
    "Unsere Markisen werden aus Aluminiummaterialien hergestellt und ziehen durch ihre Flexibilität, Stärke und minimalistischen Eigenschaften in ihren bioklimatischen Pergola-Designs die Aufmerksamkeit auf sich.";
  return <ProductPage images={images} gallery={gallery} text={text} />;
}
