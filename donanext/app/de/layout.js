import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LanguageButton from "@/components/languageButton/LangButton";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

export default function DeLayout({ children }) {
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
    products: "produkte",
    contact: "kontakt",
    aboutUs: "uber-uns",
    bioclimatic: "beschattung",
    retractable: "pergola",
    glass: "glas-systeme",
    awnings: "markisen",
    screensBlinds: "screens-jalousie",
  };
  return (
    <>
      <Header linkNames={linkNames} linkPaths={linkPaths} lang={"de"} />
      {children}
      <LanguageButton />
      <ScrollToTopButton />
      <Footer
        linkPaths={linkPaths}
        linkNames={linkNames}
        rights={"Alle rechte vobehalten."}
        donaPerde={"dona-perde"}
        lang={"de"}
      />
    </>
  );
}
