import Header from "../../components/Header";
import { Underline } from "../AboutPage/styles";
import { InnerContainer, MainContainer } from "../Homepage/styles";
import Hero from "./Hero";
import MoreRecipes from "./More Recipes";

export default function index() {
  return (
    <div>
      <MainContainer>
        <Header />
        <InnerContainer>
          <Hero />
        </InnerContainer>
        <Underline />
        <InnerContainer>
          <MoreRecipes />
        </InnerContainer>
      </MainContainer>
    </div>
  );
}
