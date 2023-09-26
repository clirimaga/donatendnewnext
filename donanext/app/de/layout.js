import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LanguageButton from "@/components/languageButton/LangButton";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

export default function DeLayout({ children }) {
  return (
    <>
      <Header
        products={"produkte"}
        contact={"kontakt"}
        aboutUs={"uber-uns"}
        bioclimatic={"beschattung"}
        retractable={"pergola"}
        glass={"glas-systeme"}
        awnings={"markisen"}
        screensBlinds={"screens-jalousie"}
        lang={"de"}
      />
      {children}
      <LanguageButton />
      <ScrollToTopButton />
      <Footer
        products={"produkte"}
        contact={"kontakt"}
        aboutUs={"uber-uns"}
        bioclimatic={"beschattung"}
        retractable={"pergola"}
        glass={"glas-systeme"}
        awnings={"markisen"}
        screensBlinds={"screens-jalousie"}
        rights={"Alle rechte vobehalten."}
        donaPerde={"dona-perde"}
        lang={"de"}
      />
    </>
  );
}
