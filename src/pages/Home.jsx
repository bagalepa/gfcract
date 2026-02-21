import React from "react";
import "../styles/home.css";
import HeroCarousel from "../components/HeroCarousel";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";

const Home = () => {
  return (
    <div className="home">
      {/* HERO */}
      <HeroCarousel />
      {/* ABOUT */}
      <AboutSection />

      {/* PRODUCTS */}
      <ProductsSection />
      {/* INDUSTRIES */}
      <section className="industries">
        <h2>Industries We Serve</h2>
        <div className="industry-list">
          <span>Food Processing</span>
          <span>Chemicals</span>
          <span>Oil & Lubricants</span>
          <span>Agriculture</span>
          <span>Paint & Coatings</span>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Need Bulk Orders or Custom Sizes?</h2>
        <button className="btn-primary">Request a Quote</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Polymer Containers Manufacturing</p>
        <p>Phone | WhatsApp | Email</p>
      </footer>
    </div>
  );
};

export default Home;
