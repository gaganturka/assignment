import Sidebar from "./Layouts/Sidebar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import "./Assets/css/bootstrap.min.css"
import "./Assets/css/main.css"
import "./Assets/css/responsive.css";

import 'react-toastify/dist/ReactToastify.css';

import React, {useContext, useEffect} from "react";
import {AuthContext} from "./Context/AuthContext";

import afterLoginRoutes from './Routes/AfterLoginRoutes.js';
import guestRoutes from './Routes/GuestRoutes.js';
import {TailSpin} from "react-loader-spinner";

function App() {

    const {authState, authDispatch} = useContext(AuthContext);

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            authDispatch({type: "SET_USER", payload: user, isLoggedIn: true});
        }
    }, [authState.isLoggedIn]);

    return (
        <>
            <div className="custm-loader d-none" id="mainLoaderElement">
                <TailSpin color="#000" height={200} width={200} />
            </div>
            <Router>
                {
                    authState.isLoggedIn === true ? <Sidebar /> : ""
                }
                {
                    authState.isLoggedIn === true ? afterLoginRoutes : guestRoutes
                }
            </Router>
        </>
    );
}

export default App;
