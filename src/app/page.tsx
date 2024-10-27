import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Hero from "../components/main/Hero";
import Map from "../components/main/Map";
import CalculateBanner from "../components/main/CalculateBanner";
import CalculateForm from "@/components/main/CalculateForm";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Map />
      <CalculateBanner />
      <CalculateForm />
      <Footer />
    </>
  );
}
