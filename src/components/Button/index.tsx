import { ButtonContainer, ViewRecipe } from "./style";
// import { ReactNode } from "react";

interface ButtonProps {
  children: String;
}

export default function Button({ children }: ButtonProps) {
  return <ButtonContainer type="button">{children}</ButtonContainer>;
  return <ViewRecipe type="button">{children}</ViewRecipe>;
}
