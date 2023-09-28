import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LanguageButton from "@/components/languageButton/LangButton";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

export default function EnLayout({ children }) {
  const linkPaths = {
    aboutUs: "about-us",
    contact: "contact",
    bioclimatic: "bioclimatic-pergola",
    retractable: "retractable-pergola",
    glass: "glass-systems",
    awnings: "awnings",
    screensBlinds: "screens-blinds",
  };

  const linkNames = {
    products: "products",
    contact: "contact",
    aboutUs: "about-us",
    bioclimatic: "bioclimatic-pergola",
    retractable: "retractable-pergola",
    glass: "glass-systems",
    awnings: "awnings",
    screensBlinds: "screens-blinds",
  };

  return (
    <>
      <Header linkNames={linkNames} linkPaths={linkPaths} lang={"en"} />
      {children}
      <LanguageButton />
      <ScrollToTopButton />
      <Footer
        linkPaths={linkPaths}
        linkNames={linkNames}
        donaPerde={"dona-perde"}
        rights={"All rights reserved."}
        lang={"en"}
      />
    </>
  );
}
