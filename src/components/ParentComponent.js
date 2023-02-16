import React, { Component } from "react";
import SingleComponent from "./SingleComponent";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'spider man',
        }

    }
    // a ne pas faire utiliser a la place PureComponent
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('je suis dans shouldComponentUpdate()');
    //     console.log(this.state.name);
    //     console.log(nextState);
    //     if(this.state.name !== nextState.name) {
    //         return true;
    //     }
    //         return false;
    // }

    changeBat = () =>{
        this.setState({
            name : 'Batman'
        })
    }
    render(){
        console.log('%c RENDER() COMPOSANT PARENT', 'color:red;')
        return (
            <div className="">
                <SingleComponent/>

                <button onClick={this.changeBat}> changer en batman</button>
            </div>
        )
    }
}

export default ParentComponent;