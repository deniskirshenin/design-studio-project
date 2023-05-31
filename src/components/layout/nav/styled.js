import styled from "styled-components";
import menuicon from "/Users/fish/design-studio-project/src/assets/images/menu_icon.png";
import { Wrapper } from "../../styled/container";

export const ToggleButton = styled.button`
    @media (max-width: 575px) {
        display: block;
        padding: 4px 12px;
        border: none;
        background-color: #fff;
    };
`;

export const MenuIcon = styled.span`
    @media (max-width: 575px) {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-image: url(${menuicon});
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export const NavMenu = styled.div`
    @media (max-width: 575px) {
        display: none;
    }
`;

export const HeaderWrapper = styled(Wrapper)`
    justify-content: space-between;
    align-items: center;
`;