import style from "./primaryButton.module.css";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return <button className={style.button}>{children}</button>;
};

export default PrimaryButton;
