
import React, { Component} from 'react';
import axios from 'axios';



//I want centralized piece to handle state changes=
//bull and heifer choice

export default class Home extends Component {
    constructor(props) {
        super(props);

    // this.onChangeId = this.onChangeId.bind(this);
   
            this.state = {
            heifers: [],
            bulls: []
        }
    }


//this loads by default before others
componentDidMount () {
    this.setState({
        Id:"test cow",
        

    })
};

//grabbing value from choice of bull and heifer name and changing state
onchangeId(e) {
    this.setState({
        Id: e.target.value
    });
}


onsubmit = (e) => {
//  e.preventDefault();
//  const pairing = {
//      bull. this.state.bull,
 }

 
//   console.log(bull);
//  axios.post('http://localhost:8000/calculate', bull)
//  .then(res => console.log(res.data));
 


render() {
    return (
    <div>
    <img src="https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa-1480x833.jpg" className="App-logo" alt="logo" />

      <h3>Choose a heifer and a bull to see their offspring's range of traits</h3>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Bulls </label>
          <select>
            <option Id ="b1">Buddy</option>
            <option Id="b2">Cooper</option>
            <option Id="b3">Maxwell</option>
            <option Id="b4">Gus</option>
            <option Id="b5">Paul</option>
            <option Id="b6">Phil</option>
          </select>
        </div>

        <div className="form-group"> 
          <label>Heifers</label>
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
          <input type="submit" value="Submit" className="button" />
        </div>
      </form>
    </div>
    )
  }
}




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