import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";

import { PageWrapperMain } from "./styled.js";

export default function PageWrapper() {
    return (
        <>
            <Header />
                <PageWrapperMain>
                    <MainPage />
                </PageWrapperMain>
            <Footer />
        </>
    );
};