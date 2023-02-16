import React, { Component, PureComponent } from "react";
import SingleComponent from "./SingleComponent";
import PureComp from "./PureComp";
import FunctComp from "./FunctComp";

//Import des deux bouttons 
import ButtonCharge from "./ButtonCharge";
import ButtonChargeFunct from "./ButtonChargeFunct";

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'spider man',
        }

    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('je suis dans shouldComponentUpdate()');
        // a ne pas faire utiliser a la place PureComponent
    //     console.log(this.state.name);
    //     console.log(nextState);
    //     if(this.state.name !== nextState.name) {
    //         return true;
    //     }
    //         return false;

        return true;
    }

    changeBat = () =>{
        
        this.setState({
            name : 'Batman'
        })
    }

    render(){
        console.log('%c RENDER() COMPOSANT PARENT', 'color:red;')
        return (
            <div className="">
                <p>
                    <span className="red">Parent Component </span>
                    {this.state.name}
                </p>
                <SingleComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <FunctComp name={this.state.name}/>
                {/* <button onClick={this.changeBat}> changer en batman</button> */}
                <ButtonCharge funct={this.changeBat}/>
                <ButtonChargeFunct funct={this.changeBat}/>
            </div>
        )
    }
}

export default ParentComponent;