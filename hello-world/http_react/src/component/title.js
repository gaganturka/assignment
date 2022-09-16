import React,{useState, useEffect} from "react";

function Title(){
    const[count, setCount] = useState(0)
    const[name, setName] = useState('')

    useEffect( () =>{
        console.log('update');
        document.title = `you clicked ${count}`
    },[count])


    return(<div>
<input type="test" value={name} onChange={e=> setName(e.target.value)} />
        <button onClick={() => setCount(count+1)}>total {count}</button>

    </div>)

}

export default Title