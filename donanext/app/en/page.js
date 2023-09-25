import CarouselHP from "@/components/carouselHp/CarouselHp";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

export default function HomeEn() {
  return (
    <main>
      <CarouselHP />
      <Footer
        products={"products"}
        contact={"contact"}
        aboutUs={"about Us"}
        bioclimatic={"bioclimatic-pergola"}
        retractable={"retractable-pergola"}
        glass={"glass-systems"}
        awnings={"awnings"}
        screensBlinds={"screens-blinds"}
        rights={"All rights reserved."}
      />
    </main>
  );
}
