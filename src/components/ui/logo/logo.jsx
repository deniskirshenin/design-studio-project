import React from "react";
import logo from "/Users/fish/design-studio-project/src/assets/images/logo.png";
import { StyledLogo } from "./styled.js";
import { Img } from "../../styled/image.js";

function Logo() {
    return (
        <StyledLogo>
            <a href="/">
                <Img src={logo} alt="logo"/>
            </a>
        </StyledLogo>
        
    );
};

export default Logo;