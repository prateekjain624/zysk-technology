import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import icon5 from "../images/icon5.png";
import icon6 from "../images/icon6.png";

const Features = () => {
  return (
    <section className="features-section">
      <div className="feature-heading">Features</div>
      <div className="feature-headline">
        <h1 className="feature-headline1">
          Analytics that feels like it’s from the future
        </h1>
        <p className="feature-subtext">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="feature-grid row">
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="row ">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div className="row mt-80">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img src={icon1} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left1">
                  <div className="features-subheading">Share team inboxes</div>
                  <div className="features-text">
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img src={icon2} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left1">
                  <div className="features-subheading">
                    Deliver instant answers
                  </div>
                  <div className="features-text">
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img src={icon3} alt="icon4" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left1">
                  <div className="features-subheading">
                    Manage your team with reports
                  </div>
                  <div className="features-text">
                    Measure what matters with Untitled’s easy-to-use reports.
                    You can filter, export, and drilldown on the data in a
                    couple clicks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img src={icon4} alt="icon4" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left1">
                  <div className="features-subheading">
                    Connect with customers
                  </div>
                  <div className="features-text">
                    Solve a problem or close a sale in real-time with chat. If
                    no one is available, customers are seamlessly routed to
                    email without confusion.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img src={icon5} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left1">
                  <div className="features-subheading">
                    Connect the tools you already use
                  </div>
                  <div className="features-text">
                    Explore 100+ integrations that make your day-to-day workflow
                    more efficient and familiar. Plus, our extensive developer
                    tools.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                  <img src={icon6} alt="" />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-left1">
                  <div className="features-subheading">
                    Our people make the difference
                  </div>
                  <div className="features-text">
                    We’re an extension of your customer service team, and all of
                    our resources are free. Chat to our friendly team 24/7 when
                    you need help.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
