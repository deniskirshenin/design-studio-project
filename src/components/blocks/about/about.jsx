import React from "react";
import about from "/Users/fish/design-studio-project/src/assets/images/about.png";
import { AboutButton, AboutImage, AboutImageContainer, AboutParagraph, AboutSection, AboutTitle, TextContainer } from "./styled";
import { Container } from "../../styled/container";
import { GreenText } from "../../ui/title/styled";

function About({props}) {
    return (
        <AboutSection>
            <Container>
                <TextContainer>
                    <AboutTitle as="h2">About <GreenText>Us</GreenText></AboutTitle>
                    <AboutParagraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humourThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</AboutParagraph>
                    <AboutButton href="/">Read More</AboutButton>
                </TextContainer>
                <AboutImageContainer>
                    <AboutImage src={about} alt="about"/>
                </AboutImageContainer>
            </Container>
        </AboutSection>
    );
};

export default About;