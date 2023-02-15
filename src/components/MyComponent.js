import React,{Component}  from "react";

class MyComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "spider man",
        }
    }


    static getDerivedStateFromProps(props, state){
        console.log(`%c getDerivedStateFromProps lancée !`, 'color: red; background: yellow; font-size: 15px');
        console.log(props)
        console.log(state)
        return null;
    }   
    forceChangement = () =>{
        this.forceUpdate(() =>{
            console.log('%c je force le changement', 'color: blue; background:green; font-size: 15px;')
        })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Je suis dans le shouldComponentUpdate()');
        return true;
    }

    render(){
        console.log('je suis dans le render()')
        return (
            <div className="">
                <h1>hello world</h1>

                <p>Nom : {this.state.name}</p>
                <p>Age : {this.props.age}</p>
                <button onClick={this.forceChangement}>Forcer </button>
            </div>
        )
    }

}

export default MyComponent;