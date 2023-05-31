import React from "react";
import { StyledText } from "./styled";

function Paragraph({props, children}) {
    return <StyledText>{children}</StyledText>;
};

export default Paragraph;