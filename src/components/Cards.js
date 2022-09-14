import React from "react";
import "./CSS/Cards.css";

import { Link } from "react-router-dom";

function Cards() {
  return (
    <section className="service-container">
      <div>
        <div className="header">
          <h1 className="sub-titles">
            <span>Our</span> Services
          </h1>
        </div>
        <div className="row1-container">
          <div className="box box-down cyan">
            <Link to="/web">
              <div>
                <h2>Web Development</h2>
                <p>Get Youself a Professional Website Developed.</p>
                <img
                  className="img"
                  src="https://assets.codepen.io/2301174/icon-calculator.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div class="box red">
            <Link to="/marketing">
              <div>
                <h2>Marketing</h2>
                <p>Earn some money with us doing marketing campaigns.</p>
                <img
                  src="https://assets.codepen.io/2301174/icon-team-builder.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>

          <div class="box box-down blue">
            <Link to="/seo">
              <div>
                <h2>SEO</h2>
                <p>List Your Website in top pages with an expert.</p>
                <img
                  src="https://assets.codepen.io/2301174/icon-supervisor.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
        <div class="row2-container">
          <div class="box orange">
            <Link to="/gst">
              <div>
                <h2>GST & ITR Solutions</h2>
                <p>Solve All Of Your Financial Queries With Us.</p>
                <img
                  src="https://assets.codepen.io/2301174/icon-karma.svg"
                  alt=""
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
