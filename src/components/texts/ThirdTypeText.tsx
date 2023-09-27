import style from "./thirdTypeText.module.css";

const ThirdTypeText = ({
  children,
  grayText,
}: {
  children: React.ReactNode;
  grayText?: boolean;
}) => {
  return (
    <h5 className={`${style.thirdTypeText} ${grayText && style.grayText}`}>
      {children}
    </h5>
  );
};

export default ThirdTypeText;
