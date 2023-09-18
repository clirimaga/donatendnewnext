import CarouselHP from "@/components/carouselHp/CarouselHp";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main>
      <Header
        products={"products"}
        contact={"contact"}
        aboutUs={"about Us"}
        bioclimatic={"bioclimatic-pergola"}
        retractable={"retractable-pergola"}
        glass={"glass-systems"}
        awnings={"awnings"}
        screensBlinds={"screens-blinds"}
      />
      <CarouselHP />
    </main>
  );
}
