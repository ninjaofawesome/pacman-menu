import React, { Component } from 'react';
import AddPlayers from '../../components/AddPlayers/AddPlayers';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <h2 className="home__title">Welcome to PacMan</h2>
        <AddPlayers />
      </div>
    );
  }
}

export default Home;