import React from "react";
import { CarouselControlContainer, ControlButton, DesignImage, DesignImageContainer, DesignSection, DesignText, DesignTitle, DesignTitleContainer } from "./styled";
import { Container } from "../../styled/container";
import { GreenText } from "../../ui/title/styled";
import DesignImg from "/Users/fish/design-studio-project/src/assets/images/desi.jpg";

function Design() {
    return (
        <DesignSection>
            <Container>
                <DesignTitleContainer>
                    <DesignTitle as="h2">New Ideas <GreenText>Design</GreenText></DesignTitle>
                    <DesignText>There are many variations of passages of Lorem Ipsum available, but theThere are many variations of passages of Lorem Ipsum available, but the</DesignText>
                </DesignTitleContainer>
                <CarouselControlContainer>
                    <ControlButton>Prev</ControlButton>
                    <ControlButton>Next</ControlButton>
                </CarouselControlContainer>
                <DesignImageContainer>
                    <DesignImage src={DesignImg} alt="Design" />
                </DesignImageContainer>
            </Container>
        </DesignSection>
    );
};

export default Design;