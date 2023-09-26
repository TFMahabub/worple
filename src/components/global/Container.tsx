import React from "react";
import style from "./container.module.css";

const Container = ({
  children,
  column,
}: {
  children: React.ReactNode;
  column?: boolean;
}) => {
  return (
    <div className={`${style.container_wrapper} ${column && style.gap}`}>
      {children}
    </div>
  );
};

export default Container;
