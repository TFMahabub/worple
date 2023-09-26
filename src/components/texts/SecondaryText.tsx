import style from "./secondaryText.module.css";

const SecondaryText = ({
  children,
  blueText,
}: {
  children: React.ReactNode;
  blueText?: boolean;
}) => {
  return (
    <h4
      className={`${style.secondaryText} ${
        blueText ? style.blueText : style.darkText
      }`}
    >
      {children}
    </h4>
  );
};

export default SecondaryText;
