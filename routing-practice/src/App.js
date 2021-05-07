import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import NumberWord from './components/NumberWord';
import Combined from './components/Combined';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <NumberWord path="/:numberorword"/>
        <Combined path="/:numberorword/:textcolor/:backgroundcolor"/>
      </Router>
    </div>
  );
}

export default App;
