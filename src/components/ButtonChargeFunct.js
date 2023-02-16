import React from "react";
//EXO
function ButtonChargeFunct(props){
    console.log('%c button avec class PureComponent ::' , "color:black; background-color: white;");
    return(
        <div className="">
             <button onClick={props.funct}>Button avec function</button>
        </div>
    )

}

export default React.memo(ButtonChargeFunct)