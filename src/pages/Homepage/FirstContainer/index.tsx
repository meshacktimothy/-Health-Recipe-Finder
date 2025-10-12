import {
  FirstContainers,
  Heading,
  WhatiGetContainer,
  WholeFoodRecipesImg,
  WholeFoodRecipesHeading,
  WholeFoodRecipesParagraph,
  WholeFoodRecipesImgDiv,
  SearchSecondsImg,
  MainDiv,
  MinimumFussImg,
} from "./styles";
import WholeFoodRecipes from "../../../assets/images/icon-whole-food-recipes.svg";
import MinimumFuss from "../../../assets/images/icon-minimum-fuss.svg";
import SearchSeconds from "../../../assets/images/icon-search-in-seconds.svg";

export default function FirstContainer() {
  return (
    <FirstContainers>
      <Heading>What you’ll get</Heading>
      <MainDiv>
        <WhatiGetContainer>
          <WholeFoodRecipesImgDiv>
            <WholeFoodRecipesImg>
              <WholeFoodRecipes />
            </WholeFoodRecipesImg>
          </WholeFoodRecipesImgDiv>
          <WholeFoodRecipesHeading>Whole-food recipes</WholeFoodRecipesHeading>
          <WholeFoodRecipesParagraph>
            Each dish uses everyday, unprocessed <br /> ingredients.
          </WholeFoodRecipesParagraph>
        </WhatiGetContainer>
        <WhatiGetContainer>
          <WholeFoodRecipesImgDiv>
            <MinimumFussImg>
              <MinimumFuss />
            </MinimumFussImg>
          </WholeFoodRecipesImgDiv>
          <WholeFoodRecipesHeading>Minimum fuss</WholeFoodRecipesHeading>
          <WholeFoodRecipesParagraph>
            All recipes are designed to make eating <br /> healthy quick and
            easy.
          </WholeFoodRecipesParagraph>
        </WhatiGetContainer>
        <WhatiGetContainer>
          <WholeFoodRecipesImgDiv>
            <SearchSecondsImg>
              <SearchSeconds />
            </SearchSecondsImg>
          </WholeFoodRecipesImgDiv>
          <WholeFoodRecipesHeading>Search in seconds</WholeFoodRecipesHeading>
          <WholeFoodRecipesParagraph>
            Filter by name or ingredient and jump <br /> straight to the recipe
            you need.
          </WholeFoodRecipesParagraph>
        </WhatiGetContainer>
      </MainDiv>
    </FirstContainers>
  );
}
