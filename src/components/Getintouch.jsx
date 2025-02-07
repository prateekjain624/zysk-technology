import React from "react";

const Getintouch = () => {
  return (
    <section className="support-container">
      <div className="avatar-group">
        <img
          src="https://randomuser.me/api/portraits/women/1.jpg"
          alt="User 1"
        />
        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="User 2" />
        <img
          src="https://randomuser.me/api/portraits/women/3.jpg"
          alt="User 3"
        />
      </div>
      <div className="support-title">Still have questions?</div>
      <div className="support-text">
        Can't find the answer you're looking for? Please chat to our friendly
        team.
      </div>
      <button className="contact-btn">Get in touch</button>
    </section>
  );
};

export default Getintouch;
