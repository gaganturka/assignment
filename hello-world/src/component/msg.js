import React , {Component} from "react";

class msg extends Component {
constructor(){
    super()
    this.state = {
        message : 'welcome visiors!'
    }
}

change()  {
    this.setState({
        message : 'thankyou'
    })
}



    render(){
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.change() }>suscribe</button>
            </div>)
    }
}

export default msg