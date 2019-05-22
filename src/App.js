import React from 'react';
import './App.css';

import Introduction from './containers/intro/Introduction';
import Calculator from './containers/Calculator';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      < Introduction />
      < Navigation />
      < Calculator />
    </div>
  );
}

export default App;
