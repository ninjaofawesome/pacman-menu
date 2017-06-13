import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ConnectedRouter } from 'react-router-redux';
import pacman from './reducers/index';
import App from './pages/App/App';
import store, {history} from './store';
import registerServiceWorker from './registerServiceWorker';
import './App.css';

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
