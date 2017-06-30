let playerId = 1

export const addPlayer = (name) => {
  if(playerId < 3) {
    return {
      type: 'ADD_PLAYER',
      id: playerId++,
      name
    }
  }
  return {
    type: 'LIMIT_PLAYERS'
  }
}