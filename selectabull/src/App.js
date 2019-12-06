import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Home';
import Results from './Results';
// import Graph from


import './App.css';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </div>
  </BrowserRouter>
  );
}
export default App;