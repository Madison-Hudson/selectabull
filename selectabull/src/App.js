import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home';
import Results from './Components/Results';
import './App.css';


class App extends Component {
  constructor () {
    super()

    this.state = {
      pairing: [
       { Heifer: ''},
       { Bull: ''}
       ],
      
     }

    this.addPairing = this.addPairing.bind(this);
    
  }


  addPairing (post) {
    this.setState({ posts: this.state.posts.concat([post]) });
  }

//send axios request with pairing state to calculate route
  axios.post('http://localhost:8000/calculate', {
    
  }

      if (p.text === post.text) {
        return Object.assign(post, p, {upvotes})
      } else {
        return p;
      }
    });

    this.setState({ posts: postsWithUpvotes })
  }

  handleClick () {
    this.setState({ showPosts: !this.state.showPosts });
  }

  render() {
    const showPosts = () => {
      if (this.state.showPosts) {
        return <PostsList upvotePost={this.upvotePost} posts={this.state.posts} />
      }
    }

    const renderText = () => {
      if (this.state.showPosts) {
        return 'Hide Posts';
      } else {
        return 'Show Posts'
      }
    }


    return (
//       
          component={Home}
//         
//       
    );
  }
}

export default App;













// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/results" component={Results} />
//         </Switch>
//       </div>
//   </BrowserRouter>
//   );
// }
// export default App;