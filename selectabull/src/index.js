import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



const Main = () => (
    <main>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/results" component={Results} />
      </Switch>
    </main>
  );
  


ReactDOM.render(
 <BrowserRouter>  
    <App />, 
</BrowserRouter>,


document.getElementById('root'));

