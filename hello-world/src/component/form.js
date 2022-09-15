import React, { Component } from "react";

class forms extends Component{

constructor(){
    super()
    this.state ={
        username : '',
        gender : 'male'
    }
}

handelUserName = (events)=> {
    this.setState({
        username : events.target.value
    })
   
}

handle = (events) => {
    alert('from submit sucessfully')
    events.preventDefault()
}

handelGender = (events) => {
    this.setState({
        gender : events.target.gender
    })
}

    render(){
        return(
        <form onSubmit={this.handle}>
            <div>
                <label>username</label>
                <input type={'text'} value={this.state.username} onChange={this.handelUserName}/>
            </div>

            <div>
                <label>gender</label>
                <select value={this.state.gender} onChange={this.handelGender}>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <button type="submit">submit</button>
        </form>
        )
 
    }
}

export default forms