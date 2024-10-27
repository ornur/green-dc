import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Hero from "../components/main/Hero";
import Map from "../components/main/Map";
import CalculateBanner from "../components/main/CalculateBanner";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Map />
      <CalculateBanner/>
      <Footer />
    </>
  );
}
