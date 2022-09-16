import React, { Component } from "react";

import axios from "axios";
class insertData extends Component{

    constructor(){
        super()
        this.state ={
            userId : '',
            title : '',
            body : ''
        }
    }

    chane= e =>{
        this.setState({[e.target.name] : e.target.value})
    }

    submitF = e =>{
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(Response => {
            console.log(Response);
        })
        .catch(err => {
            console.log(err);
        })

    }

    render(){

        const {userId,title,body} = this.state

        return(<div>

            <form onSubmit={this.submitF}>
                <div>
                    <input type="text" name="userId" value={userId} onChange={this.chane} />
                </div>
                <div>
                    <input type="text" name='title' value={title} onChange={this.chane}/>
                </div>
                <div>
                <input type="text" name="body" value={body} onChange={this.chane}/>
                </div>
                <button type="submit">submit</button>
               
            </form>
            
        </div>)
    }
}

export default insertData