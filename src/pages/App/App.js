import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from '../Home/Home';
import About from '../About/About';
import NotFound from '../NotFound/NotFound';
import Navbar from '../../components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div class="body-content">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </div>
      </div>
    );
  }
}

export default App;
