import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { Router, navigate } from '@reach/router';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';

function App() {
  let searchTerm = "";
  let searchId = "";
  const onSelectChange = (e) => {
    searchTerm = e.target.value;
    console.log("This is the search term " + searchTerm);
  }
  const onNumberChange = (e) => {
    searchId = e.target.value;
    console.log("This is the search id " + searchId);
  }
  const onClick = () => {
      navigate(`/${searchTerm}/${searchId}`);
    }
  return (
    <div className="App">
      <div>
        <div>
          <label htmlFor="swsearch">Search for: </label>
          <select name="swsearch" onChange={ onSelectChange }>
          <option value="">Please select a search</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
          </select>
          <label htmlFor="searchid">ID: </label>
          <input type="number" name="searchid" onChange={ onNumberChange }/>
          <button onClick={ onClick }>Search</button>
        </div>
        <Router>
          <People path="/people/:id/"/>
          <Planets path="/planets/:id/"/>
          <Error path="/error"/>
        </Router>
      </div>
    </div>
  );
}

export default App;
