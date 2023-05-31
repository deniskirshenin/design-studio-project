import React from "react";
import Retina from "/Users/fish/design-studio-project/src/assets/images/service1.png";
import Creative from "/Users/fish/design-studio-project/src/assets/images/service2.png";
import EasyToUse from "/Users/fish/design-studio-project/src/assets/images/service3.png";
import EasyImport from "/Users/fish/design-studio-project/src/assets/images/service4.png";

import { ServiceBoxContainer, ServiceBoxImage, ServiceBoxText, ServiceBoxTitle, ServiceButton, ServiceElementsContainer, ServiceReadMoreContainer, ServiceSection, ServiceTitle, ServiceTitleContainer } from "./styled";
import { Container } from "../../styled/container";
import { GreenText } from "../../ui/title/styled";

function Service() {
    return (
        <ServiceSection>
            <Container>
                <ServiceTitleContainer>
                    <ServiceTitle as="h2">Our <GreenText>Services</GreenText></ServiceTitle>
                </ServiceTitleContainer>
                <ServiceElementsContainer>
                    <ServiceBoxContainer>
                        <ServiceBoxImage src={Retina} alt="Retina display" />
                        <ServiceBoxTitle as="h3">Retina Ready</ServiceBoxTitle>
                        <ServiceBoxText>many variations of passages <br/> of Lorem Ipsum available</ServiceBoxText>
                    </ServiceBoxContainer>
                    <ServiceBoxContainer>
                        <ServiceBoxImage src={Creative} alt="Creative Elements" />
                        <ServiceBoxTitle as="h3">Creative Elements</ServiceBoxTitle>
                        <ServiceBoxText>many variations of passages <br/> of Lorem Ipsum available</ServiceBoxText>
                    </ServiceBoxContainer>
                    <ServiceBoxContainer>
                        <ServiceBoxImage src={EasyToUse} alt="Easy-to-Use" />
                        <ServiceBoxTitle as="h3">Easy-to-Use</ServiceBoxTitle>
                        <ServiceBoxText>many variations of passages <br/> of Lorem Ipsum available</ServiceBoxText>
                    </ServiceBoxContainer>
                    <ServiceBoxContainer>
                        <ServiceBoxImage src={EasyImport} alt="Easy Import" />
                        <ServiceBoxTitle as="h3">Easy Import</ServiceBoxTitle>
                        <ServiceBoxText>many variations of passages <br/> of Lorem Ipsum available</ServiceBoxText>
                    </ServiceBoxContainer>
                </ServiceElementsContainer>
                <ServiceReadMoreContainer>
                    <ServiceButton>Read More</ServiceButton>
                </ServiceReadMoreContainer>
            </Container>
        </ServiceSection>
    );
};

export default Service;