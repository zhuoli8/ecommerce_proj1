import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
    return (
        <>
            <div>
                <h1>Root</h1>
                <Link to={"home"}>home</Link>
                <br />
                <Link to={"about"}>about</Link>
                <br />
                <Link to={"login"}>login</Link>
                <br />
                <Link to={"prod"}>prod</Link>
                <br />
            </div>
            {/* Outlet is where child routes are rendered */}
            <Outlet />
        </>
    );
};

export default Root;
