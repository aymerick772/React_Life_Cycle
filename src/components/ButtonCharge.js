import React, {PureComponent} from "react";
//EXO
class ButtonCharge extends PureComponent {

    render() {
        console.log('%c button avec class PureComponent ::' , "color:white; background-color: black;");
        return(
        <div className="">
            <button onClick={this.props.funct}>Button avec class</button>
        </div>
        )
    }
}

export default ButtonCharge;