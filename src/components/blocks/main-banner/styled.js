import styled from "styled-components";
import { Wrapper } from "../../styled/container";
import banner from '/Users/fish/design-studio-project/src/assets/images/banner1.jpg'
import { StyledText } from "../../ui/paragraph/styled";

export const StyledMainBanner = styled(Wrapper)`
    background-image: url(${banner});
    min-height: 550px;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 17%;
`;

export const BannerText = styled(StyledText)`
    color: #fff;
`;