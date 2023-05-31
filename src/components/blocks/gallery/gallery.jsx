import React from "react";
import "./style.css";
import Gallery1 from "/Users/fish/design-studio-project/src/assets/images/gallery1.jpg";
import Gallery2 from "/Users/fish/design-studio-project/src/assets/images/gallery2.jpg";
import Gallery3 from "/Users/fish/design-studio-project/src/assets/images/gallery3.jpg";
import Gallery4 from "/Users/fish/design-studio-project/src/assets/images/gallery4.jpg";
import Gallery5 from "/Users/fish/design-studio-project/src/assets/images/gallery5.jpg";
import Gallery6 from "/Users/fish/design-studio-project/src/assets/images/gallery6.jpg";
import { GalleryBlockContainer, GalleryBlockImage, GalleryBlockImageContainer, GalleryBlockText, GalleryBlockTextContainer, GalleryBlockTitle, GalleryContentWrapper, GallerySection, GalleryTitle, GalleryTitleContainer, GalleryTitleText } from "./styled";
import { Container } from "../../styled/container";
import { GreenText } from "../../ui/title/styled";

function Gallery() {
    return (
        <GallerySection>
            <Container>
                <GalleryTitleContainer>
                    <GalleryTitle as="h2">Our <GreenText>Gallery</GreenText></GalleryTitle>
                    <GalleryTitleText>here are many variations of passages of Lorem Ipsum available, but the majority have suffer</GalleryTitleText>
                </GalleryTitleContainer>
                <GalleryContentWrapper>
                    <GalleryBlockContainer>
                        <GalleryBlockTextContainer>
                            <GalleryBlockTitle as="h3">Interior Design</GalleryBlockTitle>
                            <GalleryBlockText>of passages of Lorem <br/> Ipsum available <br/>, but the majority <br/> have suffer</GalleryBlockText>
                        </GalleryBlockTextContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockImageContainer>
                            <GalleryBlockImage src={Gallery1} alt="#"/>
                        </GalleryBlockImageContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockImageContainer>
                            <GalleryBlockImage src={Gallery2} alt="#"/>
                        </GalleryBlockImageContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockImageContainer>
                            <GalleryBlockImage src={Gallery3} alt="#"/>
                        </GalleryBlockImageContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockImageContainer>
                            <GalleryBlockImage src={Gallery4} alt="#"/>
                        </GalleryBlockImageContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockTextContainer>
                            <GalleryBlockTitle as="h3">Interior Design</GalleryBlockTitle>
                            <GalleryBlockText>of passages of Lorem <br/> Ipsum available <br/>, but the majority <br/> have suffer</GalleryBlockText>
                        </GalleryBlockTextContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockTextContainer>
                            <GalleryBlockTitle as="h3">Interior Design</GalleryBlockTitle>
                            <GalleryBlockText>of passages of Lorem <br/> Ipsum available <br/>, but the majority <br/> have suffer</GalleryBlockText>
                        </GalleryBlockTextContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockImageContainer>
                            <GalleryBlockImage src={Gallery5} alt="#"/>
                        </GalleryBlockImageContainer>
                    </GalleryBlockContainer>
                    <GalleryBlockContainer>
                        <GalleryBlockImageContainer>
                            <GalleryBlockImage src={Gallery6} alt="#"/>
                        </GalleryBlockImageContainer>
                    </GalleryBlockContainer>
                </GalleryContentWrapper>
            </Container>
        </GallerySection>
    );
};

export default Gallery;