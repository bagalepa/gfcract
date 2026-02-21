import React, { useState } from "react";
import "../styles/heroCarousel.css";
import slide1 from "../assets/slide-1.png";
import slide2 from "../assets/slide-2.png";
import slide3 from "../assets/slide-3.png";
import slide4 from "../assets/slide-4.png";

const slides = [
  {
    title: "Heavy Duty Polymer Buckets",
    image: slide1,
  },
  {
    title: "Food Grade Safe Containers",
    image: slide2,
  },
  {
    title: "Industrial Drums & Barrels",
    image: slide3,
  },
  {
    title: "Bulk Packaging Solutions",
    image: slide4,
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + slides.length) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="hero-carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`hero-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay-slider">
            <h1>{slide.title}</h1>
            <button>Get Quote</button>
          </div>
        </div>
      ))}

      <button className="nav left" onClick={prev}>
        ❮
      </button>
      <button className="nav right" onClick={next}>
        ❯
      </button>
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
