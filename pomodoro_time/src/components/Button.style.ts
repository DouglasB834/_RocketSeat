import styled from "styled-components";

export type ButtonVariantColor = "primary" | "secundary" | "success";

interface IButtonProps {
  variant: ButtonVariantColor;
}
const ButtonVariantColor = {
  primary: "purple",
  secundary: "orange",
  success: "green",
};

export const ButtonContainer = styled.button<IButtonProps>`
  padding: 1rem 2rem;
  border-radius: 10px;
  + button {
    margin-left: 10px;
  }

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};

  /* ${(props) => {
    return `background-color: ${ButtonVariantColor[props.variant]}`;
  }} */
  /* background-color: ${(props) => ButtonVariantColor[props.variant]}; */
`;
