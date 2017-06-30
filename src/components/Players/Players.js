import React, { Component } from 'react';

import AddPlayers from '../AddPlayers/AddPlayers';

class Players extends Component {
  constructor() {
    super();
    this.toggleHidden = this.toggleHidden.bind(this);
    this.state= {
      isHidden: false
    };
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render(){
    return(
      <div className="players">
        <div className={`players__wrapper ${this.state.isHidden ? 'hide-list' : 'show-list'}`}>
          <h2 className="players__title">Add Players</h2>
          <AddPlayers  />
          <button
            className="players__play-button"
            onClick={this.toggleHidden}
            >Start Game</button>
        </div>
      </div>
    );
  }

}

export default Players;