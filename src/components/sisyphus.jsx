import React from "react";
import logo from "../images/Logomark.png";
const Sisyphus = () => {
  return (
    <section className="sisyphus-section">
      <div className="testimonial-container">
        <div className="logo">
          <img src={logo} alt="Sisyphus Logo" />
          <span>Sisyphus</span>
        </div>
        <p className="testimonial">
          We've been using Untitled to kick start every new project and can't
          imagine working without it.
        </p>
        <div className="author">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Author Image"
          />
          <div className="author-info">
            <span className="author-name">John Doe</span>
            <br />
            <span className="author-title">Product Manager, Sisyphus</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sisyphus;
