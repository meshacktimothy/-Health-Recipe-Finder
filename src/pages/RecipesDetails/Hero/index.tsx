import {
  HeroContainer,
  RecipesOrMediterranean,
  RecipesText,
  Or,
  MediterraneanText,
  MediterraneanContainer,
  MediterraneanTextContainer,
  MediterraneanImg,
  HeadingText,
  ParagraphText,
  TimesContainer,
  ServingsContainer,
  IngredientsContainer,
  IngredientsHeading,
  IngredientsImage,
  IngredientsImageTextContainer,
  IngredientsText,
  InstructionsContainer,
  InstructionsHeading,
  IngredientsTextOne,
} from "./styles";
import MediterraneanImage from "../../../assets/images/mediterranean-chickpea-salad-large.webp";
import {
  PrepAndServingDiv,
  Servings2ImgDiv,
  Servings2Text,
} from "../../Recipes/Food/styles";
import Servings2Img from "../../../assets/images/icon-servings.svg";
import PrepTime from "../../../assets/images/icon-prep-time.svg";
import Cook from "../../../assets/images/icon-cook-time.svg";
import IngredientsImg from "../../../assets/images/icon-bullet-point.svg";

export default function () {
  return (
    <>
      <HeroContainer>
        <RecipesOrMediterranean>
          <RecipesText>Recipes</RecipesText>
          <Or>/</Or>
          <MediterraneanText>Mediterranean Chickpea Salad</MediterraneanText>
        </RecipesOrMediterranean>
        <MediterraneanContainer>
          <MediterraneanImg src={MediterraneanImage} />
          <MediterraneanTextContainer>
            <HeadingText>
              Mediterranean Chickpea <br /> Salad
            </HeadingText>
            <ParagraphText>
              A refreshing, protein-packed salad tossed in a lemon-olive oil{" "}
              <br />
              dressing.
            </ParagraphText>
            <TimesContainer>
              <PrepAndServingDiv>
                <ServingsContainer>
                  <Servings2ImgDiv>
                    <Servings2Img />
                  </Servings2ImgDiv>
                  <Servings2Text> Servings: 2</Servings2Text>
                </ServingsContainer>
                <ServingsContainer>
                  <Servings2ImgDiv>
                    <PrepTime />
                  </Servings2ImgDiv>
                  <Servings2Text>Prep: 10 mins</Servings2Text>
                </ServingsContainer>
                <ServingsContainer>
                  <Servings2ImgDiv>
                    <Cook />
                  </Servings2ImgDiv>
                  <Servings2Text>Cook: 12 mins</Servings2Text>
                </ServingsContainer>
              </PrepAndServingDiv>
            </TimesContainer>

            <IngredientsContainer>
              <IngredientsHeading>Ingredients:</IngredientsHeading>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>
                  1 can (400 g) chickpeas, drained & rinsed
                </IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>1 small cucumber, diced</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>1 cup cherry tomatoes, halved</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>1/2 red bell pepper, diced</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>1/4 red onion, finely chopped</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>2 Tbsp fresh parsley, chopped</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>2 Tbsp extra-virgin olive oil</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>1 Tbsp fresh lemon juice</IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>
                  Sea salt & black pepper to taste
                </IngredientsText>
              </IngredientsImageTextContainer>
            </IngredientsContainer>

            <InstructionsContainer>
              <InstructionsHeading>Instructions:</InstructionsHeading>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsTextOne>
                  In a large bowl combine chickpeas, cucumber, tomatoes, bell
                  <br /> pepper, red onion and parsley.
                </IngredientsTextOne>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>
                  Drizzle with olive oil and lemon juice.
                </IngredientsText>
              </IngredientsImageTextContainer>{" "}
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>
                  Season with salt and pepper; toss to coat.{" "}
                </IngredientsText>
              </IngredientsImageTextContainer>
              <IngredientsImageTextContainer>
                <IngredientsImage>
                  <IngredientsImg />
                </IngredientsImage>
                <IngredientsText>
                  Serve immediately or chill up to 2 days.{" "}
                </IngredientsText>
              </IngredientsImageTextContainer>
            </InstructionsContainer>
          </MediterraneanTextContainer>
        </MediterraneanContainer>
      </HeroContainer>
    </>
  );
}
