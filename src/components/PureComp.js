import React, {PureComponent} from 'react';


class PureComp extends PureComponent {
    
    constructor(props){
        super(props)
        this.state={
            // name: 'name',
        }
    }
    render(){
        console.log('%c render() du composant enfant PureComponent', 'color:yellow; background-color: blue;')
        return(
            <div>
                <p>
                    <span  className='green'> PureComponent :</span>
                    {this.props.name}
                </p>
            </div>
        )
    }
}
export default PureComp;