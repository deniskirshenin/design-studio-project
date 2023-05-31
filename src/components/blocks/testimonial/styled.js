import styled from "styled-components";
import { Container, Wrapper } from "../../styled/container";
import Title from "../../ui/title/title";
import { StyledText } from "../../ui/paragraph/styled";
import { Img } from "../../styled/image";

export const TestimonialSection = styled(Wrapper)`
    background-color: #fff;
    padding-top: 80px;
`;

export const TestimonialContainer = styled(Container)`
    padding: 60px 15px;
    background-color: #343434;
`;

export const TestimonialTextContainer = styled(Container)`
    position: relative;
    display: flex;
    flex-direction: column;
    border: #16d316 solid 1px;
    border-radius: 5px;
    margin: 80px 15px;
    width: auto;
    min-height: 1px;
    padding: 80px 20px 40px 20px;
`;

export const TestimonialTitle = styled(Title)`
    color: #fff;
    padding-top: 20px;
    padding-bottom: 20px;
    margin: 0;
    font-size: 17px;
    line-height: 31px;
    font-weight: bold;
    display: block;
`;

export const TestimonialText = styled(StyledText)`
    color: #fff;
    font-weight: 400;
    font-size: 17px;
    line-height: 31px;
    padding-bottom: 0;
`;

export const TestimonailAvatar = styled(Img)`
    position: absolute;
    box-sizing: content-box;
    width: 124px;
    height: 124px;
    border-radius: 50%;
    border: #16d316 solid 1px;
    bottom: 85%;
`;