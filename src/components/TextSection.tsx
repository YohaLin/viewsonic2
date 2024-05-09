import React from "react";
import Wrapper from "../layouts/Wrapper";
import clsx from "clsx";

const TextSection = ({children, style}) => {
  return (
    <Wrapper style={clsx("flex flex-col gap-9", style)}>
      {children}
    </Wrapper>
  );
};

export default TextSection;
