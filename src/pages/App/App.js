import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
// import NotFound from '../NotFound/NotFound';
import Navbar from '../../components/Navbar/Navbar';

// todo:  Come up with a 404 route
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="body-content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

export default App;
