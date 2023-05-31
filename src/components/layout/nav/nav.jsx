import React from "react";
import { MenuIcon, NavMenu, ToggleButton } from "./styled";

function Nav() {
    return (
        <nav>
            <ToggleButton>
                <MenuIcon />
            </ToggleButton>
            <NavMenu>
                <a href="/" style={{padding: 20}}>Home</a>
                <a href="/" style={{padding: 20}}>About</a>
                <a href="/" style={{padding: 20}}>Services</a>
                <a href="/" style={{padding: 20}}>Gallery</a>
                <a href="/" style={{padding: 20}}>Testimonial</a>
                <a href="/" style={{padding: 20}}>Contact Us</a>
            </NavMenu>
        </nav>
    );
};

export default Nav;