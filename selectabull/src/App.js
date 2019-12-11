
import React, { Component } from 'react';
import './App.css';
import Results from './Components/Results';
import Dropdown from './Components/Dropdown';
const axios = require('axios');


class App extends Component {
  constructor () {
    super()

    this.state = {
      pairing: {
        heiferId: null,
        bullId: null
      },
      traits: {
        heiferMilkProduction: 0,
        bullMilkProduction: 0
      }
    } 

    this.handleClick = this.handleClick.bind(this);
    this.fetchTraits = this.fetchTraits.bind(this);
  }

  handleClick () {
    this.fetchTraits();
  }

  fetchTraits() {
    const url = 'http://localhost:8000/traits/5defc2b5b9283d6de054e0f0/5defc49cb9283d6de054e0f6';

    axios
      .get(url)
      .then(response => {
        this.setState({traits: response.data})
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Selectabull!</h1>

        <Dropdown />
        {/* <button onClick={this.handleClick}>submit</button> */}
        <Results traits={this.state.traits}/>
        
      </div>
    )
  }
  
}


export default App;