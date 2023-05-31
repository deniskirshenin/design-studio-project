import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import { StyledText } from "../../ui/paragraph/styled";
import { Img } from "../../styled/image";

export const GallerySection = styled(Wrapper)`
    margin-top: 80px;
    padding-top: 80px;
    background-color: #eae7e7;
    padding-bottom: 50px;
`;

export const GalleryTitleContainer = styled(Container)`
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 40px;
`;

export const GalleryTitle = styled(Title)`
    font-size: 28px;
    line-height: 29px;
    color: #1f1f1f;
    padding: 0;
    margin: 0;
    font-weight: bold;
`;

export const GalleryTitleText = styled(StyledText)`
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    color: #2a2b2a;
    margin: 0;
    padding: 0;
    padding-top: 20px;
`;

export const GalleryContentWrapper = styled(Wrapper)`
    flex-direction: column;
    justify-content: space-between;
`;

export const GalleryBlockContainer = styled(Container)`
    padding: 0;
`;

export const GalleryBlockTextContainer = styled(Container)`
    background-color: #2a2b2a;
    height: 264px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-bottom: 30px;
`;

export const GalleryBlockTitle = styled(Title)`
    font-size: 24px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    margin: 0;
    padding-bottom: 10px;
`;

export const GalleryBlockText = styled(StyledText)`
    font-size: 17px;
    line-height: 31px;
    color: #fff;
    margin: 0;
    padding: 0;
    font-weight: 500;
`;

export const GalleryBlockImageContainer = styled(Container)`
    padding: 0;
    width: 100%;
    overflow: hidden;
    margin-bottom: 30px;
`;

export const GalleryBlockImage = styled(Img)`
    vertical-align: middle;
    border-style: none;
    transition: all 0.5s;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;