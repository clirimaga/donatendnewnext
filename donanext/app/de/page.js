import AccomplishedProjects from "@/components/accomplishedProjects/AccomplishedProjects";
import CardSection from "@/components/cardSection/CardSection";
import CarouselHP from "@/components/carouselHp/CarouselHp";
import ProductCards from "@/components/productCards/ProductCards";

const images = [
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-1.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/bioclimatic-pergolas-anatolia-6.jpg",
    alt: "Bioclimatic Pergola",
    h1: "Bioclimatic Pergola",
    h2: "Beschattung",
    texten: "Anatolia, Rolling Bioclimatic models from Dona Tend!",
    textde: "Anatolia, Rolladen modelle von Dona Tend!",
    navigate: "/bioclimatic-pergola",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/Crown-introduction.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/armada-introduction.jpg",
    alt: "Retractable Pergola",
    h1: "Retractable Pergola",
    h2: "Pergola",
    texten:
      "Icon, Viva, Crown, Imperial, Alba and other models from Dona Tend!",
    textde:
      "Icon, Viva, Crown, Imperial, Alba und andere modelle von Dona Tend!",
    navigate: "/retractable-pergola",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/Glass-solutions-products.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/skymove-introduction.jpg",
    alt: "Glass Systems",
    h1: "Glass Systems",
    h2: "Wintergärten",
    texten:
      "Skyfix, Skymove, Guillotine, Sliding, Folding and other models from Dona Tend!",
    textde:
      "Skyfix, Skymove, Guillotine, Sliding, Folding und andere modelle von Dona Tend!",
    navigate: "/glass-systems",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/articulated-awning-introdcution.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/casette-awning-introduction.jpg",
    alt: "Awnings",
    h1: "Awnings",
    h2: "Markisen",
    texten: "Casette, Articulated, Wintent and other models from Dona Tend!",
    textde: "Casette, Articulated, Wintent und andere modelle von Dona Tend!",
    navigate: "/awnings",
  },
  {
    src: "https://artent.com.tr/wp-content/uploads/2022/02/zip-screens-products.jpg",
    src1: "https://artent.com.tr/wp-content/uploads/2022/02/crystal-zip-introduction.jpeg",
    alt: "Screens and Blinds",
    h1: "Screens and Blinds",
    h2: "Screen und Jalousie fenster",
    texten: "Zip screen, Crystal and Roof models from Dona Tend!",
    textde: "Zip screen, Kristal und Dachmodelle von  Dona Tend!",
    navigate: "/screens-blinds",
  },
];

export default function HomepageDe() {
  return (
    <main>
      <CarouselHP images={images} />
      <ProductCards
        images={images}
        title={"Erleben Sie gleichzeitig Indoor- und Outdoor-Vergnügen"}
        info1={
          "Entwickelt, um auch unter härtesten klimatischen Bedingungen zu funktionieren."
        }
        info2={
          "Nutzen Sie Ihren Außenbereich beruhigt, unabhängig von  Jahreszeit und Wetter"
        }
      />
      <CardSection
        title={"Schnelle Ruckmeldung"}
        response={"Wir antworten normalerweise in 24std."}
        weeks={" Wochen"}
        realization={
          "Die Projektrealisierung erfolgt 6-8 Wochen nach Auftragsbearbeitung und Eingang der ersten Zahlung"
        }
        warranty={"Garantie"}
        paragraph={"1 Jahr Garantie auf alle Motoren und das Produkt selbst!"}
      />
      <AccomplishedProjects text="Über 150 Projekte in der DACH-Region abgeschlossen, Tendenz steigend..." />
    </main>
  );
}
