import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './components/Landing/index.jsx';
import Home from './components/Home/index.jsx';
import AddCharacter from './components/AddCharacter/index.js';
import Details from './components/Details/index.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Landing}></Route>
        <Route exact path='/characters' component={Home}></Route>
        <Route exact path='/character' component={AddCharacter}></Route>
        <Route exact path='/details/:id' component={Details}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
