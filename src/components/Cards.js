import React from "react";
import "./CSS/Cards.css";

function Cards() {
  return (
    <section className="service-container">
      <div>
        <div class="header">
          <h1 className="sub-titles">
            <span>Our</span> Services
          </h1>
        </div>
        <div class="row1-container">
          <div class="box box-down cyan">
            <h2>Web Development</h2>
            <p>Get Youself a Professional Website Developed.</p>
            <img
              className="img"
              src="https://assets.codepen.io/2301174/icon-calculator.svg"
              alt=""
            />
          </div>

          <div class="box red">
            <h2>Marketing</h2>
            <p>Earn some money with us doing marketing campaigns.</p>
            <img
              src="https://assets.codepen.io/2301174/icon-team-builder.svg"
              alt=""
            />
          </div>

          <div class="box box-down blue">
            <h2>SEO</h2>
            <p>List Your Website in top pages with an expert.</p>
            <img
              src="https://assets.codepen.io/2301174/icon-supervisor.svg"
              alt=""
            />
          </div>
        </div>
        <div class="row2-container">
          <div class="box orange">
            <h2>GST & ITR Solutions</h2>
            <p>Solve All Of Your Financial Queries With Us.</p>
            <img
              src="https://assets.codepen.io/2301174/icon-karma.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
