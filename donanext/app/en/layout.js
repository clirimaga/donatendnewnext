import Header from "@/components/header/Header";

export default function EnLayout({ children }) {
    return <>
        <Header
        products={"products"}
        contact={"contact"}
        aboutUs={"about Us"}
        bioclimatic={"bioclimatic-pergola"}
        retractable={"retractable-pergola"}
        glass={"glass-systems"}
        awnings={"awnings"}
        screensBlinds={"screens-blinds"}
        lang={"en"}
      />  
      {children}</>
  }