import style from "./PrimaryText.module.css";

const PrimaryText = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={style.text}>{children}</h2>;
};

export default PrimaryText;
