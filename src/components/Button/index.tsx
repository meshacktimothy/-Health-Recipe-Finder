import { ButtonContainer } from "./style";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return <ButtonContainer type="button">{children}</ButtonContainer>;
}
