import React from "react";
import { Outlet, Link } from "react-router-dom";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

const Root = () => {
    return (
        <>
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
