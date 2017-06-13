import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pacman from './reducers/index';
import App from './pages/App/App';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

let store = createStore(
  pacman,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
