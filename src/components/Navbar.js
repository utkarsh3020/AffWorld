import React, { Component } from "react";
import "./CSS/Navbar.css";

import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav className="navbar-nav">
          <a className="logo" href="/">
            <span>A</span>ff<span>W</span>orld
          </a>
          <div className="menu-links">
            <ul
              id="nav-lists"
              className={
                this.state.clicked ? "#nav-lists active" : "#nav-lists"
              }
            >
              <li className="list-items">
                <Link to="/" className="links active">
                  Home
                </Link>
              </li>
              <li className="list-items">
                <Link className="links" to="/about">
                  About
                </Link>
              </li>
              <li className="list-items">
                <Link className="links" to="/services">
                  Services
                </Link>
              </li>
              <li className="list-items">
                <Link className="links" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="list-items">
                <Link className="links" to="joinus">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          <div id="humburger" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
