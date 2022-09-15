import React, {Component} from "react";
import update from "./update";
import Update from "./update";


class click extends Component{
constructor(props){
    super(props)
    this.state={
        count : 0
    }
}

increnent= () =>{
    this.setState(prev =>{
        console.log(prev);
       return{count : prev.count+1}
    })

}


    render(){
        return(<div>
         <button onMouseOver={this.increnent}>{this.props.name} click {this.state.count} times</button>
        </div>)
    }
} 

export default update(click)