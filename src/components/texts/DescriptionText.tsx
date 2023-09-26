import style from "./description.module.css";

const DescriptionText = ({ children }: { children: React.ReactNode }) => {
  return <p className={style.descriptionText}>{children}</p>;
};

export default DescriptionText;
