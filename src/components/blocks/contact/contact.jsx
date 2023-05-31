import React from "react";
import { ContactButton, ContactContainer, ContactInput, ContactSection, ContactTitle } from "./styled";

function Contact() {
    return (
        <ContactSection>
            <ContactContainer>
                <ContactTitle as="h2">Contact Us</ContactTitle>
                <ContactInput>Name</ContactInput>
                <ContactInput>E-mail</ContactInput>
                <ContactInput>Phone Number</ContactInput>
                <ContactInput>Message</ContactInput>
                <ContactButton>Send</ContactButton>
            </ContactContainer>
        </ContactSection>
    );
};

export default Contact;