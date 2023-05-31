import React from "react";
import { TestimonailAvatar, TestimonialContainer, TestimonialSection, TestimonialText, TestimonialTextContainer, TestimonialTitle } from "./styled";
import Avatar1 from '/Users/fish/design-studio-project/src/assets/images/tett1.png';
import Avatar2 from '/Users/fish/design-studio-project/src/assets/images/tett2.png';

function Testimonial() {
    return (
        <TestimonialSection>
            <TestimonialContainer>
                <TestimonialTextContainer>
                    <TestimonailAvatar src={Avatar1} alt="avatar"/>
                    <TestimonialTitle as="h4">HumouThere</TestimonialTitle>
                    <TestimonialText>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</TestimonialText>
                </TestimonialTextContainer>
                <TestimonialTextContainer>
                    <TestimonailAvatar src={Avatar2} alt="avatar"/>
                    <TestimonialTitle as="h4">HumouThere</TestimonialTitle>
                    <TestimonialText>T suffered alteration in some form, by injected humouThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humou</TestimonialText>
                </TestimonialTextContainer>
            </TestimonialContainer>
        </TestimonialSection>
    );
};

export default Testimonial;