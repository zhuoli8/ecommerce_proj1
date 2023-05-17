import React from "react";
import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const Root = () => {
    return (
        <>
            {/* <div>
                <h1>Root</h1>
                <Link to={"home"}>home</Link>
                <br />
                <Link to={"about"}>about</Link>
                <br />
                <Link to={"login"}>login</Link>
                <br />
                <Link to={"prod"}>prod</Link>
                <br />
            </div> */}
            <ResponsiveAppBar />
            {/* Outlet is where child routes are rendered */}
            {/* pulls content down from behind navbar*/}
            <div style={{ marginTop: "64px" }}>
                <Outlet />
            </div>
        </>
    );
};

export default Root;
