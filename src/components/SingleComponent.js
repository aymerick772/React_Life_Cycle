import React, { Component } from "react";

class SingleComponent extends Component {
    
    
    render() {
        console.log('%c render() composant enfant Simple', 'color: green;');
        return(
            <div className="">
                <p>
                    <span className="blue">Single Component : </span>
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default SingleComponent;