import React from "react";
import style from "./container.module.css";

const Container = ({
  children,
  column,
  flex,
  padding,
}: {
  children: React.ReactNode;
  column?: boolean;
  flex?: boolean;
  padding?: string;
}) => {
  return (
    <div
      className={`${style.container_wrapper} ${column && style.gap} ${
        flex && style.flex
      }`}
      style={{ padding: padding }}
    >
      {children}
    </div>
  );
};

export default Container;
