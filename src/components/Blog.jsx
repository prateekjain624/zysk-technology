import React from "react";
import image1 from "../images/blogimages/design.png";
import image2 from "../images/blogimages/product.png";
import image3 from "../images/blogimages/software.png";

const Blog = () => {
  return (
    <section className="blog-container">
      <div className="blogs">
        <div className="blog-top">
          <div className="blog-title">
            <h2>Our blog</h2>
            <p>Latest blog posts</p>
            <span>
              Tool and strategies modern teams need to help their companies
              grow.
            </span>
          </div>
          <div className="blog-btn viewall-Btn-hide ">
            <button className="btn">view all posts</button>
          </div>
        </div>
      </div>
      <div className="blog-bottom">
        <div className="card-container">
          <div className="card">
            <img src={image1} alt="Design" />
            <div className="card-content">
              <div className="category design">Design</div>
              <a href="#" className="card-title">
                UX review presentations <span>↗</span>
              </a>
              <p className="description">
                How do you create compelling presentations that wow your
                colleagues and impress your managers?
              </p>
              <div className="author">
                <img
                  src="https://randomuser.me/api/portraits/women/10.jpg"
                  alt="Olivia"
                />
                <span>
                  Olivia Rhye <br /> <small>20 Jan 2024</small>
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={image2} alt="Product" />
            <div className="card-content">
              <div className="category product">Product</div>
              <a href="#" className="card-title">
                Migrating to Linear 101 <span>↗</span>
              </a>
              <p className="description">
                Linear helps streamline software projects, sprints, tasks, and
                bug tracking. Here’s how to get started.
              </p>
              <div className="author">
                <img
                  src="https://randomuser.me/api/portraits/men/20.jpg"
                  alt="Phoenix"
                />
                <span>
                  Phoenix Baker <br /> <small>19 Jan 2024</small>
                </span>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={image3} alt="Engineering" />
            <div className="card-content">
              <div className="category engineering">Software Engineering</div>
              <a href="#" className="card-title">
                Building your API stack <span>↗</span>
              </a>
              <p className="description">
                The rise of RESTful APIs has been met by a rise in tools for
                creating, testing, and managing them.
              </p>
              <div className="author">
                <img
                  src="https://randomuser.me/api/portraits/women/30.jpg"
                  alt="Lana"
                />
                <span>
                  Lana Steiner <br /> <small>18 Jan 2024</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-btn-full-width viewall-Btn-show ">
          <span className="view-all-btn">view all posts</span>
        </div>
      </div>
    </section>
  );
};

export default Blog;
