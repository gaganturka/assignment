import React,{useState} from "react";

function HookC() {
    const[count, setCount] = useState(0)

    return(
        <div>
            <button onClick={() => {setCount(count +1)}}>click {count}</button>
        </div>
    )
}

export default HookC