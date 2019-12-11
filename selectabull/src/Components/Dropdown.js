
import React, { Component} from 'react';
import axios from 'axios';  


class Dropdown extends Component {
    constructor (props) {
      super(props) 
  
      this.state = {
        bullId: '',
        heiferId: ''
      };

      this.handleInputChange = this.handleInputChange.bind(this); 
     }


      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        target.clicked = target.value;
        const name = target.name;
        console.log(target.name)
;
        this.setState({
          [name]: value
        });
        console.log(this.state);
      }
       
      
   handleChange = (event) => {
    var bull = event.target.value
    var heifer = event.target.value
    console.log(heifer)
    console.log(bull)
    };

// this.state.bullId(submit)
 

render() {
    return (
    <div>
    <img src="https://4al52k24l8r51wpym5i46ltd-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2019/06/cowsa-1480x833.jpg" className="App-logo" alt="logo" />

      <h3>Choose a heifer and a bull to see their offspring's range of traits</h3>
      <form>
        <label>Bulls
          <select
          name={"bullId"}
          value ={this.state.bullId} 
          onChange= {this.handleInputChange}> 
          
            <option value="5defc2b5b9283d6de054e0f0">Buddy</option>
            <option value="5defc2b5b9283d6de054e0f1">Cooper</option>
            <option value="5defc2b5b9283d6de054e0f2">Maxwell</option>
            <option value="5defc2b5b9283d6de054e0f3">Gus</option>
            <option value="5defc2b5b9283d6de054e0f4">Paul</option>
            <option value="5defc2b5b9283d6de054e0f5">Phil</option>
            </select>
          </label>
        
        <br />

       
        <label>Heifers
          <select
            name={"heiferId"}
            value={this.state.heiferId}
            onChange= {this.handleInputChange}>

            <option value="5defc49cb9283d6de054e0f6">Sally</option>
            <option value="5defc49cb9283d6de054e0f7">Patches</option>
            <option value="5defc49cb9283d6de054e0f8">Maxine</option>
            <option value="5defc49cb9283d6de054e0f9">Peach</option>
            <option value="5defc49cb9283d6de054e0fa">Paula</option>
            <option value="5defc49cb9283d6de054e0fb">Flower</option>
          </select>
          </label>
       </form>
      <button onClick={this.handleChange}>submit</button>
    </div>
    )}
}



export default Dropdown;


