import React, { useEffect, useState } from "react";
import "../styles/heroCarousel.css";
import slide1 from "../assets/slide-1.png";
import slide2 from "../assets/slide-2.png";
import slide3 from "../assets/slide-3.png";
import slide4 from "../assets/slide-4.png";

const slides = [
  {
    title: "Industrial Polymer Buckets Built to Last",
    subtitle: "Strong • Leak-Proof • Bulk Supply",
    image: slide1,
  },
  {
    title: "Food Grade Safe Plastic Containers",
    subtitle: "Certified • Hygienic • Long Life",
    image: slide2,
  },
  {
    title: "High Strength Industrial Storage Drums",
    subtitle: "Oil • Chemicals • Paint • Water",
    image: slide3,
  },
  {
    title: "Custom Container Solutions for Industry",
    subtitle: "Any Size • Bulk Orders • Fast Delivery",
    image: slide4,
  },
];
const HeroCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!window.heroPaused) {
      window.heroTimer = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(window.heroTimer);
  }, [index]);

  return (
    <div
      className="hero-carousel"
      onMouseEnter={() => clearInterval(window.heroTimer)}
      onMouseLeave={() => {
        window.heroTimer = setInterval(() => {
          setIndex((prev) => (prev + 1) % slides.length);
        }, 3000);
      }}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay-slider">
            <h1>{slide.title}</h1>
            <p className="hero-sub">{slide.subtitle}</p>
            <a href="/contact" className="button">
              Get Quote
            </a>
          </div>
        </div>
      ))}

      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
