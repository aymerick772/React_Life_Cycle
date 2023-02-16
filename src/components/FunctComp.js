import React from "react";

const FunctComp = (props) =>{
    console.log('%c render function component : ', 'color: purple; background-color: black;')
    return(
        <div>
            <p>
                <span className="purple">FunctComp : </span>
                {props.name}
            </p>
        </div>
    )
}

//Pour ajouter le comportement du PureComponent il faut ajouter React.memo(maFunction)
export default React.memo(FunctComp);