

import Features from "@/Components/Features";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import NavBar from "@/Components/NavBar";
import NewCollection from "@/Components/NewCollection";
import OfferSection from "@/Components/OfferSection";
import SaleSection from "@/Components/SaleSection";
import TrendingProducts from "@/Components/TrendingSection";

export default function Home() {
  return <>


    <Hero />

    {/* <TrendingProducts /> */}
    <NewCollection />
    <OfferSection />
    {/* <SaleSection /> */}
    <Features />


  </>
}
