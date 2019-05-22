import React, { Component } from 'react';
import './App.css';

import Introduction from './containers/intro/Introduction';
import Calculator from './containers/Calculator';
import Navigation from './components/Navigation';

class App extends Component {

  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }

  trackScrolling = () => {
    const introEl = document.querySelector('#intro');
    const navIcon = document.querySelector('#nav .icon i');
    if(introEl.getBoundingClientRect().bottom < 100){
      navIcon.classList.add('rotate')
    } else {
      navIcon.classList.remove('rotate')

    }
  }

  animateScrollArrow = event => {
    console.log('animate')
  }

  render() {
    return (
      <div className="App">
        < Introduction 
          renderQuotes={this.quoteAnimation} 
        />
        < Navigation 
          animateScrollArrow={this.animateScrollArrow} 
        />
        < Calculator />
      </div>
    );
  }
}

export default App;
