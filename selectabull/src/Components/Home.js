
import React, { Component} from 'react';
import axios from 'axios';


class Home extends Component {
    constructor () {
      super()
  
      this.state = {
        bull: '',
        heifer: ''
      }
  
      this.handleClick = this.handleClick.bind(this);
    }

//populate bulls dropdown from backend
componentDidMount() {
    axios.get('http://localhost:8000/bulls')
    .then(response => {
        this.setState({bulls: response.data.Name})
    console.log({bulls: response.data.Name})
    })
    .catch((error) =>{
        console.log(error)
    })
}

//populate heifers dropdown from backend
componentDidMount() {
    axios.get('http://localhost:8000/heifers')
    .then(response => {
        this.setState({heifers: response.data.Name})
        console.log({heifers: response.data.Name})
    })
    .catch((error) =>{
        console.log(error)
    })
}



handleClick () {
    const pairing = {
        bull: this.state.bull,
        heifer: this.state.heifer
    }
    this.props.addPairing(pairing);
}

render() {
    return (
    <div>
    <img src="https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa-1480x833.jpg" className="App-logo" alt="logo" />

      <h3>Choose a heifer and a bull to see their offspring's range of traits</h3>
      <form>

        <div className="form-group"> 
          <input
          className= 'form-control'
          label= "Bulls"
          value={this.state.bulls}
          onChange={event => this.setState({user: event.target.value})}
          
          <select>
            <option Id ="b1">Buddy</option>
            <option Id="b2">Cooper</option>
            <option Id="b3">Maxwell</option>
            <option Id="b4">Gus</option>
            <option Id="b5">Paul</option>
            <option Id="b6">Phil</option>
          </select>
          />
        </div>

        <br/>

        <div className="form-group"> 
          <input
          className= 'form-control'
          label= "Heifers"
          value={this.state.heifers}
          onChange={event => this.setState({user: event.target.value})}
          <select>
                <option Id="h1">Sally</option>
                <option Id="h2">Patches</option>
                <option Id="h3">Maxine</option>
                <option Id="h4">Peach</option>
                <option Id="h5">Paula</option>
                <option Id="h6">Flower</option>
          </select>
        </div>



        <div className="form-group">
          <input type="button" value="Submit" onClick={this.handleClick} />
        {/* on submit, change the state to the chosen pairing */}
        </div>
      </form>
    </div>
    )
  }


export default Home;


// import React from 'react';




// const submitChoice = () => {
//  console.log("You clicked the button")
// }


// const Home = () => {
//     return (
//         <header className="App-header">
//             <p>Welcome to Selecta-bull!</p>
//             <img src="https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa-1480x833.jpg" className="App-logo" alt="logo" />
//             <br></br>

//             <p2>Choose a heifer and a bull to see their potential offspring's traits</p2>
//             <div class="dropdown">
//                 <button class="dropbtn">Hiefers</button>
//                 <div class="dropdown-heifers">
//                     <a href ="h1">Sally</a>
//                     <a href="h2">Patches</a>
//                     <a href="h3">Maxine</a>
//                     <a href="h4">Peach</a>
//                     <a href="h5">Paula</a>
//                     <a href="h6">Flower</a>
//                 </div>
//                 <div class="dropdown">
//                     <button class="dropbtn">Bulls</button>
//                     <div class="dropdown-bulls">
//                         <a href="b1">Buddy</a>
//                         <a href="b2">Cooper</a>
//                         <a href="b3">Maxwell</a>
//                         <a href="b4">Gus</a>
//                         <a href="b5">Paul</a>
//                         <a href="b6">Phil</a>
//                     </div>
//                 </div>
//             </div>
//             <button onClick={submitChoice}>Submit</button>
//         </header>
//     )
// };
// export default Home;