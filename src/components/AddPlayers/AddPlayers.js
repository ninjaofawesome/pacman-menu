import React from 'react';
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/pacman_actions';

let AddPlayers = ({ dispatch, pacman }) => {
  let input;

  return(
    <div className="players-form">
      <form
        className="players-form__input-form"
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
          className="players-form__input"
          ref={node => {
            input = node
          }}
        />
        <button
          type="submit"
          className="players-form__input-button">
          Add Player
        </button>
      </form>
      <ul className="players-form__player-list">
        {pacman.map((player) => {
          return(
            <li
            className="players-form__player"
            key={player.id}
            >Player {player.id}: {player.name}</li>
          );
        })}
      </ul>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pacman: state.pacman || {}
  }
}

AddPlayers.propTypes = {
  pacman: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number
  }))
}

AddPlayers = connect(mapStateToProps)(AddPlayers)

export default AddPlayers;