import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import LanguageButton from "@/components/languageButton/LangButton";

import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

export default function EnLayout({ children }) {
    return <>
        <Header
        products={"products"}
        contact={"contact"}
        aboutUs={"about-us"}
        bioclimatic={"bioclimatic-pergola"}
        retractable={"retractable-pergola"}
        glass={"glass-systems"}
        awnings={"awnings"}
        screensBlinds={"screens-blinds"}
        lang={"en"}
      />  
      {children}
      <LanguageButton />
      <ScrollToTopButton />
      <Footer
        products={"products"}
        contact={"contact"}
        aboutUs={"about-us"}
        bioclimatic={"bioclimatic-pergola"}
        retractable={"retractable-pergola"}
        glass={"glass-systems"}
        awnings={"awnings"}
        screensBlinds={"screens-blinds"}
        donaPerde={"dona-perde"}
        rights={"All rights reserved."}
        lang={"en"}
      />
      </>
  }