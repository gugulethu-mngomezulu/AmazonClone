import React from "react";
import NavbarBuild from "./NavbarBuild/navbarBuild";
import NavbarBanner from "./NavbarBanner/navbarBanner";

const Navbar = () => {
    return (
        <div className="navbar">
             <NavbarBuild />
             <NavbarBanner/> 
        </div>
    )
}

export default Navbar;