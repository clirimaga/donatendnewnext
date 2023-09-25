import CarouselHP from "@/components/carouselHp/CarouselHp";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import { redirect } from 'next/navigation'

export default function Home() {
    redirect('/en')
  return (
    <main>
        <ScrollToTopButton />
    </main>
  );
}
