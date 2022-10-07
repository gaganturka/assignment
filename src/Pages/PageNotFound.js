import {React, useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PageNotFound = () => {

    return (
        <>
            <section className="page-not-found">
                <h3>404</h3>
                <p>Requested page not found.</p>
                <Link to="/" className="btn black-fill">Go Back</Link>
            </section>
        </>
    );
};

export default PageNotFound;
