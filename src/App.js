import React, { Component} from "react"
import './App.css';


import LifeCycle  from './components/LifeCycle';

class App extends Component{

  state = {
    display: true,
  }
  cacherOuAfficher = () =>{
    //equivalent a faire un if
    this.setState({display: !this.state.display});
  }
  render() {
    const showComponent = this.state.display ? (<LifeCycle name= "toto2"></LifeCycle>) : (<div></div>);
    return (
      <div className="App">
        
        { showComponent }

        <button onClick={this.cacherOuAfficher}>Clique ici!!</button>
      </div>
    );
  }
}

export default App;
