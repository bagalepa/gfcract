import React from "react";
import "../styles/about.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>

          <p>
            The foundation for <strong>GFC – Genuine Forever Container</strong>{" "}
            was laid in 2023 in the form of Genuine Forever Containers Plastics,
            a company committed to the innovation, production, and promotion of
            injection molded plastic goods.
          </p>

          <p>
            We are a Manufacturer, Supplier & Exporter of Lubricant Buckets,
            Paint Buckets, Agricultural Buckets & Additives, and Food Grade
            Buckets. Our manufacturing unit operates from Ahmedabad — the
            commercial capital of India.
          </p>

          <p>
            The company commenced production of consumables while establishing a
            strong supply chain and building respectable channel partners
            nationwide.
          </p>
        </div>

        <div className="about-highlight">
          <h3>Top Quality Lubricant Bucket Services</h3>
        </div>
      </div>

      <div className="about-bottom">
        <p>
          With growing market demand and future-focused efficiency, Genuine
          Forever Containers established a new plant in Ahmedabad — the upcoming
          hub of India’s plastic industry. This expansion led to the formation
          of industrial goods, material handling, and packaging divisions, from
          which India’s first plastic container for the paint industry was
          introduced.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
