import React, { Component } from 'react';
import Players from '../../components/Players/Players';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <h2 className="home__title">Welcome to PacMan</h2>
        <Players />
      </div>
    );
  }
}

export default Home;