let playerId = 1

export const addPlayer = (name) => {
  return {
    type: 'ADD_PLAYER',
    id: playerId++,
    name
  }
}