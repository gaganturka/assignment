import React, {useReducer} from "react";
import {authReducer, initialAuthState} from "../Services/Reducers/AuthReducer";

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {

    const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

    return (
        <AuthContext.Provider value={{authState, authDispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
};
