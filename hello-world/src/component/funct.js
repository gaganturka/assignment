import  React from 'react'

const functCom = (props) => {
    console.log(props);
    
return (<div> <h1>hi {props.name} {props.age}</h1>
{props.children}
</div>
)
}

export default functCom