import React, { Component } from 'react';
import './App.css';

import Introduction from './containers/intro/Introduction';
import Calculator from './containers/Calculator';
import Navigation from './components/Navigation';

class App extends Component {

  render() {
    return (
      <div className="App">
        < Introduction renderQuotes={this.quoteAnimation} />
        < Navigation />
        < Calculator />
      </div>
    );
  }
}

export default App;
