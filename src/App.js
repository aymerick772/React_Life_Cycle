import React, { Component} from "react"
import './App.css';


import LifeCycle  from './components/LifeCycle';

class App extends Component{

  render() {
    return (
      <div className="App">
        <LifeCycle name= "toto2"></LifeCycle>
      </div>
    );
  }
}

export default App;
