import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Navbar from '../../components/Navbar/Navbar';

// todo:  Come up with a 404 route better than a redirect
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="body-content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </div>
      </div>
    );
  }
}

export default App;
