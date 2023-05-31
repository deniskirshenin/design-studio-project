import styled from "styled-components";
import { device } from "./responsive";

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;

    @media ${device.deviceS} {
        max-width: 540px;
    }

    @media ${device.deviceM} {
        max-width: 720px;
    }

    @media ${device.deviceL} {
        max-width: 960px;
    }

    @media ${device.deviceXl} {
        max-width: 1140px;
    }
`;

export const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
`;