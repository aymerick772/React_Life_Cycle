import React , {Component} from  'react';

class ChildComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        console.log(`Je suis dans le consctructor() enfant !`);
    }
    componentDidMount(){
        console.log(`: je suis dans le componentDidMount() Enfant`);
    }

    render(){
        
        console.log(`je suis dans le render() Enfant`)
        return(
            <div className="">
                {console.log(`MAJ DOM ENFANT`)}
                <p>Hello worldd</p>
            </div>
        )
    }
}

export default ChildComponent;