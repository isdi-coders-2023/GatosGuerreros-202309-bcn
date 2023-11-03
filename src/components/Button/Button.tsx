import ButtonStyled from "./ButtonStyled";
interface ButtonProps {
  className: string;
  text: string;
  actionOnClick: () => void;
}

const Button = ({
  className,
  text,
  actionOnClick,
}: ButtonProps): React.ReactElement => {
  return (
    <ButtonStyled className={className} onClick={actionOnClick}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
