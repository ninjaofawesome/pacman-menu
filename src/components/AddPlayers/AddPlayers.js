import React from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/pacman_actions';

let Players = ({ dispatch }) => {
  let input

  return(
    <div className="players">
      <form
        className="players__input-form"
        onSubmit={e => {
          e.preventDefault()
          if(!input.value.trim()) {
            return
          }

          dispatch(addPlayer(input.value))
          input.value=''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button
          type="submit"
          className="players__input-button">
          Add Player
        </button>
      </form>
    </div>
  );
}

Players = connect()(Players)

export default Players;