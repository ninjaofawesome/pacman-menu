import React, { Component } from 'react';
import Players from '../../components/Players/Players';

class Home extends Component {
  render() {
    return(
      <div className="about">
        <h1>I am home!</h1>
        <Players />
      </div>
    );
  }
}

export default Home;