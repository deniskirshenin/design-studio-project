import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import ContactImage from "/Users/fish/design-studio-project/src/assets/images/conatct.jpg";
import { StyledButton } from "../../ui/button/styled";

export const ContactSection = styled(Wrapper)`
    background-image: url(${ContactImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 90px;
    padding: 80px 0;
`;

export const ContactContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0 auto;
`;

export const ContactTitle = styled(Title)`
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 28px;
    line-height: 29px;
    text-align: left;
    margin: 0;
    padding-bottom: 40px;
`;

export const ContactInput = styled.form`
    align-content: center;
    border: #fff solid 1px;
    padding: 10px 15px;
    margin-bottom: 25px;
    width: auto;
    height: 54px;
    background: #fff;
    color: #989696;
    font-size: 18px;
    font-weight: normal;
    border-radius: 5px;
    box-sizing: border-box;
`;

export const ContactButton = styled(StyledButton)`
    font-size: 22px;
    transition: ease-in all 0.5s;
    background-color: transparent;
    border: #fff solid 3px;
    text-transform: uppercase;
    color: #fff;
    padding: 7px 0px;
    max-width: 150px;
    width: 100%;
    display: block;
    font-weight: 500;
    border-radius: 0;

    &:hover {
        background-color: #2a2b2a;
        transition: ease-in all 0.5s;
        color: #fff;
    }
`;