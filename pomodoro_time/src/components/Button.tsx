import { ButtonContainer, ButtonVariantColor } from "./Button.style";

interface IButtonProps {
  variant?: ButtonVariantColor;
}

export const Button = ({ variant = "primary" }: IButtonProps) => {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
};
