import React, { Component } from "react";

class SingleComponent extends Component {
    
    
    render() {
        console.log('%c render() composant enfant Simple', 'color: green;');
        return(
            <div className="">
                bonjour
            </div>
        )
    }
}

export default SingleComponent;