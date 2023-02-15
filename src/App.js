import React, { Component} from "react"
import './App.css';

import ParentComponent from "./components/ParentComponent";

class App extends Component{
  
  state = {
    
  }



  render() {
    return (
      <div className="App">
        <ParentComponent/>
      </div>
    );
  }
}

export default App;
