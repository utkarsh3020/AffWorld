import React, { Component } from "react";
import "./CSS/Navbar.css";

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
                <a className="links active" href="/">
                  Home
                </a>
              </li>
              <li className="list-items">
                <a className="links" href="/">
                  About
                </a>
              </li>
              <li className="list-items">
                <a className="links" href="/">
                  Services
                </a>
              </li>
              <li className="list-items">
                <a className="links" href="/">
                  Contact
                </a>
              </li>
              <li className="list-items">
                <a className="links" href="/">
                  Join Us
                </a>
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
