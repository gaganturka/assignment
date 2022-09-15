import React from "react";
import './style.css'

const obj = {
    color : 'black'
}

function styleSheet(){
    return(
        <div>
            <h1 style={obj}>hi</h1>
        </div> 
    )
}

export default styleSheet