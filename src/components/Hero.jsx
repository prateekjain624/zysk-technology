import React from "react";
import hero from "../images/hero.png";
import boltshift from "../images/boltshift.png";
import featherdev from "../images/featherdev.png";
import globalbank from "../images/globalbank.png";
import lightbox from "../images/lightbox.png";
import nietzsche from "../images/neitzche.png";
import spherule from "../images/speherule.png";

const Hero = () => {
  return (
    <section>
      <section className="hero-section">
        <div className="announcement-banner">
          <span className="new-feature">New feature</span>
          <a href="#" className="announcement-link">
            Check out the team dashboard <span className="arrow">→</span>
          </a>
        </div>
        <h1 className="headline">Beautiful analytics to grow smarter</h1>
        <p className="subtext">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="cta-buttons">
          <button className="demo-btn">Demo</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </section>

      <section className="interactive-section">
        <img
          src={hero}
          alt="Interactive Section"
          className="interactive-image"
        />
      </section>

      <section className="logo-section">
        <p className="logo-heading">Join 4,000+ companies already growing</p>
        <div className="logo-container">
          <img src={boltshift} alt="Boltshift" className="logo" />
          <img src={lightbox} alt="Lightbox" className="logo" />
          <img src={featherdev} alt="FeatherDev" className="logo" />
          <img src={spherule} alt="Spherule" className="logo" />
          <img src={globalbank} alt="GlobalBank" className="logo" />
          <img src={nietzsche} alt="Nietzsche" className="logo" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
