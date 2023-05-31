import React from "react";
import Logo from "../../ui/logo/logo";
import Nav from "../nav/nav";
import { StyledHeader } from "./styled";
import { Container } from "../../styled/container";
import { HeaderWrapper } from "../nav/styled";


function Header() {
    return (
        <StyledHeader>
            <Container>
                <HeaderWrapper>
                    <Logo />
                    <Nav />
                </HeaderWrapper>
            </Container>
        </StyledHeader>
    );
}

export default Header;