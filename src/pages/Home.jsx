import React from "react";
import "../styles/home.css";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <div className="home">
      {/* HERO */}
      <HeroCarousel />
      {/* ABOUT */}
      <AboutSection />

      {/* PRODUCTS */}
      <ProductsSection />
      {/* CTA */}
      <CTASection />
    </div>
  );
};

export default Home;
