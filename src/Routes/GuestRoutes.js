import React from 'react';
import { Router, Route } from 'react-router';
import Login from "../Pages/Login";
import PageNotFound from "../Pages/PageNotFound";
import {Routes} from "react-router-dom";

const afterLoginRoutes = (
    <Routes>
            <Route exact path="/" key="login" element={<Login/>}/>
            <Route path="*" element={<PageNotFound/>}/>
    </Routes>
);

export default afterLoginRoutes;
