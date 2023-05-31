import React from "react";
import { LatestNewsButton, LatestNewsReadMoreContainer, LatestNewsSection, LatestNewsTitle, LatestNewsTitleContainer, NewsBoxContainer, NewsBoxContent, NewsBoxImageContainer, NewsBoxText, NewsBoxTitle, NewsImage } from "./styled";
import { Container } from "../../styled/container";
import { GreenText } from "../../ui/title/styled";
import newsImage1 from "/Users/fish/design-studio-project/src/assets/images/blog1.jpg";

function LatestNews() {
    return (
        <LatestNewsSection>
            <Container>
                <LatestNewsTitleContainer>
                    <LatestNewsTitle as="h2">Read Our <GreenText>Latest News</GreenText></LatestNewsTitle>
                </LatestNewsTitleContainer>
                <NewsBoxContainer>
                    <NewsBoxImageContainer>
                        <NewsImage src={newsImage1} alt="news image" />
                    </NewsBoxImageContainer>
                    <NewsBoxContent>
                        <NewsBoxTitle as="h3">Interior Design</NewsBoxTitle>
                        <NewsBoxText>It is a long established fact that a reader will be distracted by the readable content</NewsBoxText>
                    </NewsBoxContent>
                </NewsBoxContainer>
                <NewsBoxContainer>
                    <NewsBoxImageContainer>
                        <NewsImage src={newsImage1} alt="news image" />
                    </NewsBoxImageContainer>
                    <NewsBoxContent>
                        <NewsBoxTitle as="h3">Architecture</NewsBoxTitle>
                        <NewsBoxText>It is a long established fact that a reader will be distracted by the readable content</NewsBoxText>
                    </NewsBoxContent>
                </NewsBoxContainer>
                <LatestNewsReadMoreContainer>
                    <LatestNewsButton>Read More</LatestNewsButton>
                </LatestNewsReadMoreContainer>
            </Container>
        </LatestNewsSection>
    );
};

export default LatestNews;