import React, { useReducer, useState } from "react";
import { authReducer, initialAuthState } from "../Services/Reducers/AuthReducer";

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {

    const [updateEntry, setUpdateEntery] = useState({})


    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider
            value={{
                authState,
                authDispatch,
                updateEntry,
                setUpdateEntery
            }}>

            {props.children}
        </AuthContext.Provider>
    );
};
