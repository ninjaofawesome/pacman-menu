import { combineReducers } from 'redux';
import pacman from './pacman';

// at this point overkill, but thinking in the future
const todoApp = combineReducers({
  pacman
});

export default todoApp;