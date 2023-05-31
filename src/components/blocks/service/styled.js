import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import { Img } from "../../styled/image";
import { StyledText } from "../../ui/paragraph/styled";
import { StyledButton } from "../../ui/button/styled";

export const ServiceSection = styled(Wrapper)`
    background-color: #fff;
    padding-top: 80px;
`;

export const ServiceTitleContainer = styled(Container)`
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 0;
    padding-bottom: 40px;
`;

export const ServiceTitle = styled(Title)`
    font-size: 28px;
    line-height: 29px;
    font-weight: 700;
    color: #1f1f1f;
    margin: 0;
`;

export const ServiceElementsContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-bottom: 60px;
`;

export const ServiceBoxContainer = styled(Container)`
    margin-bottom: 30px;
`;

export const ServiceBoxImage = styled(Img)`
    width: auto;
    border-style: none;
    vertical-align: middle;
`;

export const ServiceBoxTitle = styled(Title)`
    font-size: 25px;
    color: #252525;
    text-align: left;
    padding-bottom: 5px;
    margin: 0;
    margin-top: 15px;
`;

export const ServiceBoxText = styled(StyledText)`
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    color: #181818;
    padding: 0;
`;

export const ServiceReadMoreContainer = styled(Container)`
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 100%;
`;

export const ServiceButton = styled(StyledButton)`
    padding: 12px 0;
    background-color: #252525;
    color: #fff;
    max-width: 210px;
    height: auto;
    border-radius: 0;

    &:hover {
        background: #16e816;
        color: #fff;
        transition: ease-in all 0.5s;
    }
`;