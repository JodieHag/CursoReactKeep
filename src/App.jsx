import React from 'react';
import logo from './static/img/logo.svg';
import Card from './components/card/Card';
import ListadoContainer from './components/listado/ListadoContainer';

import './App.css';

import Data from './data.json';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <div className="row">
      <ListadoContainer />
    </div>
  </div>
);

export default App;
