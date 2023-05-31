import React from "react";
import { Container } from "../../styled/container";
import { BannerText, StyledMainBanner } from "./styled";
import Title from "../../ui/title/title";
import Button from "../../ui/button/button";

function MainBanner({props}) {
    return (
        <StyledMainBanner>
            <Container>
                <Title>Design <br /> Of Furniture</Title>
                <BannerText as="p">There are many variations of passages of Lorem Ipsum available</BannerText>
                <Button href="#">Read More</Button>
            </Container>
        </StyledMainBanner>
    );
};

export default MainBanner;