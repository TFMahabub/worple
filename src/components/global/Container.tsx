import React from "react";
import style from "./container.module.css";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.container_wrapper}>{children}</div>;
};

export default Container;
