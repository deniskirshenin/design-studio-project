import React from "react";
import { StyledButton } from "./styled";

function Button({children}) {
    return <StyledButton>{children}</StyledButton>;
};

export default Button;