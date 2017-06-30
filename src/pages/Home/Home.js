import React, { Component } from 'react';
import Players from '../../components/Players/Players';

class Home extends Component {
  render() {
    return(
      <div className="home">
        <Players />
      </div>
    );
  }
}

export default Home;