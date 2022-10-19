import react, { useState } from "react";
// import axios from 'axios'

import { Await } from 'react-router-dom'

export const context = react.createContext();

export const Nprovider = (props) => {
    const [isloged, setIsloged] = useState('')

    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')


    return (
        <context.Provider
            value={{ isloged, setIsloged }}
        >{props.children}</context.Provider>
    )

}
