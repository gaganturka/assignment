import React, { Component } from "react";
import Child from './child'

class parentCom extends Component {

    constructor(){
        super()
        this.state = {
            parentName : 'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(child){
        alert(`hello ${this.state.parentName} from ${child }`)
    }



    render(){
        return (
            <div>
<Child greet = {this.greetParent}/>
            </div>
        )
    }

}

export default parentCom