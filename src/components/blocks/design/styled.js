import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import { StyledText } from "../../ui/paragraph/styled";
import { StyledButton } from "../../ui/button/styled";
import { Img } from "../../styled/image";

export const DesignSection = styled(Wrapper)`
    padding-top: 80px;
`;

export const DesignTitleContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const DesignTitle = styled(Title)`
    font-size: 28px;
    line-height: 29px;
    color: #1f1f1f;
    margin: 0;
    padding-bottom: 30px;
`;

export const DesignText = styled(StyledText)`
    color: #2a2b2a;
    font-size: 17px;
    line-height: 31px;
    font-weight: 500;
    padding-bottom: 50px;
`;

export const CarouselControlContainer = styled(Wrapper)`
    justify-content: space-between;
`;

export const ControlButton = styled(StyledButton)`
    font-size: 19px;
    width: 48%;
    padding: 15px 0;
    height: 60px;
    text-align: center;
    background-color: #0d0c0c;
    color: #fff;
    border-radius: 0;

    &:hover {
        background: #16e816;
        color: #fff;
        transition: ease-in all 0.5s;
    }
`;

export const DesignImageContainer = styled(Container)`
    padding-top: 30px;
`;

export const DesignImage = styled(Img)`
    vertical-align: middle;
`;