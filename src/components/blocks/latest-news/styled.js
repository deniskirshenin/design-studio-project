import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import { Img } from "../../styled/image";
import { StyledText } from "../../ui/paragraph/styled";
import { StyledButton } from "../../ui/button/styled";

export const LatestNewsSection = styled(Wrapper)`
    padding: 80px 0 50px 0;
`;

export const LatestNewsTitleContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 0 30px 0;
`;

export const LatestNewsTitle = styled(Title)`
    font-size: 28px;
    line-height: 29px;
    color: #1f1f1f;
    margin: 0;
`;

export const NewsBoxContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
`;

export const NewsBoxImageContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
`;

export const NewsImage = styled(Img)`
    vertical-align: middle;
`;

export const NewsBoxContent = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
`;

export const NewsBoxTitle = styled(Title)`
    color: #252525;
    font-size: 17px;
    line-height: 20px;
    font-weight: bold;
    padding-bottom: 10px;
    padding-top: 15px;
`;

export const NewsBoxText = styled(StyledText)`
    font-size: 16px;
    line-height: 21px;
    font-weight: 400;
    color: #1b1b1b;
`;

export const LatestNewsReadMoreContainer = styled(Container)`
    display: flex;
    justify-content: center;
    padding: 0;
    width: 100%;
    max-width: 100%;
`;

export const LatestNewsButton = styled(StyledButton)`
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