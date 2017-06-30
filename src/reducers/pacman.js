const pacman = (state =[], action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    case 'LIMIT_PLAYERS':
      return state;
    default:
      return state;
  }
}

export default pacman;