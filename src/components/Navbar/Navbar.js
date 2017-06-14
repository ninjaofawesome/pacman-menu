import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  constructor() {
    super();
    this.toggleHidden = this.toggleHidden.bind(this);
    this.state= {
      isHidden: true
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render() {
    return(
      <div className="navbar">
        <div className="navbar__container">
          <button
            className="navbar__menu-button"
            onClick={this.toggleHidden}
          >menu</button>
          <h1 className="navbar__navbar-logo">PacMan</h1>
        </div>
        <ul className={`navbar__route-list ${this.state.isHidden ? 'hide-list' : 'show-list'}`}>
          <li className="navbar__route-item">
            <Link className="navbar__route-link" to="/">Home</Link>
          </li>
          <li className="navbar__route-item">
            <Link className="navbar__route-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;