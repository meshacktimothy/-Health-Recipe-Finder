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
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  function handleBrowse() {
    navigate("/browseRecipes");
  }
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
        <Button onClick={handleBrowse}>Browse recipes</Button>
      </HeaderContainer>
      <Line />
    </>
  );
}
