import React,{Component} from 'react'

class counter extends Component{

constructor(){
    super()
    this.state = {
        count : 0
    }
}
increment(){
    // this.setState({
    //     count : this.state.count + 1
    // })
    // console.log(this.state.count);

    this.setState((prev) => ({
        count : prev.count +1

    }))
}
    inc(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }
    render(){
        return (<div>
        <h1>count - {this.state.count}</h1>
        <button onClick={()=> this.inc()}>increment</button>

        </div>)
    }

}

export default counter