import React, {Component} from "react";

import ChildComponent from "./ChildComponent";

class LifeCycle extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: "toto",
            step: 1,
        }
        console.log(`Etape ${this.state.step} : je suis dans le constructor()`)


    }

    componentDidMount(){
        console.log(`Etape ${this.state.step} : je suis dans le componentDidMount()`);
        this.setState({
            name: this.props.name,
            step: this.state.step + 1,
        })
        
        console.log(`Etape ${this.state.step} :setState()a changé dans le componentDidMount je suis dans le componentDidMount()`);
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`Etape ${this.state.step} : je suis dans le componentDidUpdate`)
        console.log(prevState);
        console.log(this.state);
    }

    render(){
        console.log(`Etape ${this.state.step} : je suis dans le render()`)
        return(
            <div className="">
                {console.log(`Etape ${this.state.step} : je suis dans le return() <= maj DOM`)}
                <p>chargement : {this.state.step}</p>
                <p>nom : {this.state.name}</p>

                {/* <ChildComponent /> */}
            </div>
        )
    }
}

export default LifeCycle;