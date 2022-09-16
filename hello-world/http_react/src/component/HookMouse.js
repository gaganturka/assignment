import React,{useState, useEffect} from "react";

function Mouse(){
    const[X,setX]= useState(0)
    const[Y,setY] = useState(0)

    const mouseMove = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=> {

        console.log('change');
        window.addEventListener('mousemove' , mouseMove)
    }, [])


    return(<div>
        x position - {X}, y position - {Y}
    </div>)
}

export default Mouse