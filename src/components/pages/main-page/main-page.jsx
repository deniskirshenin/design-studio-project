import React from "react";
import About from "../../blocks/about/about";
import MainBanner from "../../blocks/main-banner/main-banner";
import Service from "../../blocks/service/service";
import Gallery from "../../blocks/gallery/gallery";
import Design from "../../blocks/design/design";
import LatestNews from "../../blocks/latest-news/latest-news";
import Testimonial from "../../blocks/testimonial/testimonial";
import Contact from "../../blocks/contact/contact";

function MainPage() {
    return (
        <>
            <MainBanner />
            <About />
            <Service />
            <Gallery />
            <Design />
            <LatestNews />
            <Testimonial />
            <Contact />
        </>
    );
};

export default MainPage;