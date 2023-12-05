import { ButtonHTMLAttributes } from "react";

interface PropsBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...rest }: PropsBtn) => {
  return <button {...rest}> {children} </button>;
};
