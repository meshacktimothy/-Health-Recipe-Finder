import {
  HeaderContainer,
  HeaderLinkDiv,
  HeaderLink,
  AnotherList,
  ListItem,
  Line,
} from "./style";
import Logo from "../../assets/images/logo.svg";
import Button from "../Button";

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo></Logo>
        <HeaderLinkDiv>
          <AnotherList>
            <ListItem>
              <HeaderLink to={"/"}>Home</HeaderLink>
              <HeaderLink to={"/AboutPage"}>About</HeaderLink>
              <HeaderLink to={"/Recipes"}>Recipes</HeaderLink>
            </ListItem>
          </AnotherList>
        </HeaderLinkDiv>
        <Button>Browse recipes</Button>
      </HeaderContainer>
      <Line />
    </>
  );
}
