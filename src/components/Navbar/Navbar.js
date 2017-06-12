import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="navbar__wrapper">
          <ul className="navbar__route-list">
            <li className="navbar__route-item">
              <Link className="navbar__route-link" to="/">Home</Link>
            </li>
            <li className="navbar__route-item">
              <Link className="navbar__route-link" to="/about">About</Link>
            </li>
            <li className="navbar__route-item">
              {/*This is going to error out, its to test the 404 page */}
              <Link className="navbar__route-link" to="/pacman">Surprise Me</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;