import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import { StyledText } from "../../ui/paragraph/styled";
import { StyledButton } from "../../ui/button/styled";
import aboutPseudo from "/Users/fish/design-studio-project/src/assets/images/vg.png";
import { Img } from "../../styled/image";

export const AboutSection = styled(Wrapper)`
    background-color: #fff;
    padding-top: 95px;
`;

export const TextContainer = styled(Container)`
    padding: 0;
    padding-bottom: 35px;
`;

export const AboutTitle = styled(Title)`
    font-size: 28px;
    line-height: 29px;
    font-weight: 700;
    color: #1f1f1f;
    margin: 0 0 35px 0;
`;

export const AboutParagraph = styled(StyledText)`
    line-height: 31px;
    font-weight: 300;
    padding-bottom: 35px;
    color: #2e2d2d;
`;

export const AboutButton = styled(StyledButton)`
    padding: 12px 0;
    background-color: #252525;
    color: #fff;
    max-width: 230px;
    height: auto;
    border-radius: 0;

    &:hover {
    background: #16e816;
    color: #fff;
    transition: ease-in all 0.5s;
    }
`;

export const AboutImageContainer = styled(Container)`
    position: relative;
    padding: 40px 30px 45px 30px;

    &::before {
        position: absolute;
        content: "";
        background-image: url(${aboutPseudo});
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        left: 0;
        border-radius: 5px;
        box-sizing: border-box;
    }
`;

export const AboutImage = styled(Img)`
    position: relative;
    display: block;
    z-index: 10;
`;