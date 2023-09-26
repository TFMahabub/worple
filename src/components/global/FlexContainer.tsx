import style from "./flexContainer.module.css";

const FlexContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.flexContainer}>{children}</div>;
};

export default FlexContainer;
