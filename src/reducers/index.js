import { combineReducers } from 'redux';
import pacman from './pacman';
import { routerReducer } from 'react-router-redux';

// at this point overkill, but thinking in the future
const todoApp = combineReducers({
  routing: routerReducer,
  pacman
});

export default todoApp;