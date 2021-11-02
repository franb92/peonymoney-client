import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/LogIn">Log In</Link>
        <Link to="createprojectpage"> Create New Project</Link>
        </nav>
        );
    }
    export default Nav;