import styled from "styled-components";

export const StyledButton = styled.a`
    display: inline-block;
    box-sizing: border-box;
    border: none;
    height: 66px;
    max-width: 243px;
    width: 100%;
    padding: 17px 0;
    background-color: #fff;
    color: #000;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 50px;
    transition: ease-in all 0.5s;
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 0;

    &:hover {
        background-color: #0d0c0c;
        color: #fff;
        transition: ease-in all 0.5s;
    }
`;