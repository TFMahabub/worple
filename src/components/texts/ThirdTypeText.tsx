import style from "./thirdTypeText.module.css";

const ThirdTypeText = ({ children }: { children: React.ReactNode }) => {
  return <h5 className={style.thirdTypeText}>{children}</h5>;
};

export default ThirdTypeText;
