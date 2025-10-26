import { ButtonContainer, ViewRecipe } from "./style";
// import { ReactNode } from "react";

interface ButtonProps {
  children: String;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      {children}
    </ButtonContainer>
  );
  return <ViewRecipe type="button">{children}</ViewRecipe>;
}
