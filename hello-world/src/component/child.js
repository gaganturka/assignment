import React from "react";

function childComponent(props){
    return(
       <div>
        <button onClick= {() => props.greet('child')} >greet </button>
       </div>
    )
}

export default childComponent