import  React  from "react";
class About extends React.Component{
    componentDidMount(){
        console.warn("DID MOUNT")
        console.warn("PROPS", this.props.name+" NOOB")
    }
    componentDidUpdate(){
        console.warn("DID UPDATE")
        alert("REVEALED")
    }
    constructor(){
        super();
        this.state = {
        name : "AXIT",
        age : 17
    }
    }
    render(){
        return(
            <div>
                <h1>ABout Us</h1>
                <h2>Name : {this.state.name}</h2>
                <h1>Age : {this.state.age}</h1>
                <button 
                    onClick = {() => 
                        {this.setState({name : "AKSHIT"})}
                        }>Reveal</button>
            </div>
        )
    }
}
export default About;
