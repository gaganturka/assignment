import React, { Component } from "react";

class event extends Component {

    constructor() {
        super()
        this.state = {
            message: 'hi'
        }
    }

    change(){
        this.setState({
            message : 'bye'
        })
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.change.bind(this)}>event</button>

            </div>)

    }
}

export default event