import clsx from "clsx";
import React from "react";

const Wrapper = ({ children, style }) => {
  return <div className={clsx("h-fit w-full py-20", style)}>{children}</div>;
};

export default Wrapper;
