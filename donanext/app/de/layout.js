import Header from "@/components/header/Header";

export default function DeLayout({ children }) {
  return (
    <>
      <Header
        products={"produkte"}
        contact={"kontakt"}
        aboutUs={"uber uns"}
        bioclimatic={"beschattung"}
        retractable={"pergola"}
        glass={"glas-systeme"}
        awnings={"markisen"}
        screensBlinds={"screens-jalousie"}
        lang={"de"}
      />
      {children}
    </>
  );
}
