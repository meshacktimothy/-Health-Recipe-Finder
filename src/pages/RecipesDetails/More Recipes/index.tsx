import { ViewRecipe } from "../../../components/Button/style";
import {
  CookContainer,
  HeadingText,
  MediterraneanChickpeaDiv,
  MediterraneanImage,
  MediterraneanParagrah,
  MediterraneanTextDiv,
  MediterraneanTextImgDiv,
  MediterraneContainer,
  PrepAndServingDiv,
  Servings2ImgDiv,
  Servings2Text,
} from "../../Recipes/Food/styles";
import { ServingsContainer } from "../Hero/styles";
import { MoreRecipesContainer, HeadingTextOne } from "./style";
import AvocadoImg from "../../../assets/images/avocado-tomato-wholegrain-toast-large.webp";
import OnePan from "../../../assets/images/salmon-asparagus-large.webp";
import Quinoa from "../../../assets/images/quinoa-veggie-bowl-large.webp";
import Servings2Img from "../../../assets/images/icon-servings.svg";
import PrepTime from "../../../assets/images/icon-prep-time.svg";
import Cook from "../../../assets/images/icon-cook-time.svg";
import {
  SecondFooterContainer,
  SecondImgContainer,
  SecondParagraph,
  Underline,
} from "../../Recipes/styles";
import Intergram from "../../../assets/images/icon-instagram.svg";
import Bluesky from "../../../assets/images/icon-bluesky.svg";
import Tiktok from "../../../assets/images/icon-tiktok.svg";

export default function index() {
  return (
    <>
      <MoreRecipesContainer>
        <HeadingTextOne>More recipes</HeadingTextOne>

        <MediterraneContainer>
          <MediterraneanChickpeaDiv>
            <MediterraneanImage src={AvocadoImg}></MediterraneanImage>
            <MediterraneanTextDiv>
              <HeadingText> Avocado & Tomato Wholegrain Toastd</HeadingText>
              <MediterraneanParagrah>
                Creamy avocado spread over toasted wholegrain <br /> bread,
                topped with juicy tomatoes.
                <MediterraneanTextImgDiv>
                  <PrepAndServingDiv>
                    <ServingsContainer>
                      <Servings2ImgDiv>
                        <Servings2Img />
                      </Servings2ImgDiv>
                      <Servings2Text>Servings: 1</Servings2Text>
                    </ServingsContainer>
                    <ServingsContainer>
                      <Servings2ImgDiv>
                        <PrepTime />
                      </Servings2ImgDiv>
                      <Servings2Text>Prep: 5 mins</Servings2Text>
                    </ServingsContainer>
                  </PrepAndServingDiv>
                  <CookContainer>
                    <Servings2ImgDiv>
                      <Cook />
                    </Servings2ImgDiv>
                    <Servings2Text>Cook: 5 min</Servings2Text>
                  </CookContainer>
                </MediterraneanTextImgDiv>
              </MediterraneanParagrah>{" "}
              <ViewRecipe>View Recipe</ViewRecipe>
            </MediterraneanTextDiv>
          </MediterraneanChickpeaDiv>

          <MediterraneanChickpeaDiv>
            <MediterraneanImage src={OnePan}></MediterraneanImage>
            <MediterraneanTextDiv>
              <HeadingText>
                One-Pan Lemon Garlic Salmon with Asparagus
              </HeadingText>
              <MediterraneanParagrah>
                A 15-minute weeknight dinner of flaky salmon <br /> and tender
                asparagus.
                <MediterraneanTextImgDiv>
                  <PrepAndServingDiv>
                    <ServingsContainer>
                      <Servings2ImgDiv>
                        <Servings2Img />
                      </Servings2ImgDiv>
                      <Servings2Text>Servings: 2</Servings2Text>
                    </ServingsContainer>
                    <ServingsContainer>
                      <Servings2ImgDiv>
                        <PrepTime />
                      </Servings2ImgDiv>
                      <Servings2Text>Prep: 5 mins</Servings2Text>
                    </ServingsContainer>
                  </PrepAndServingDiv>
                  <CookContainer>
                    <Servings2ImgDiv>
                      <Cook />
                    </Servings2ImgDiv>
                    <Servings2Text>Cook: 12 min</Servings2Text>
                  </CookContainer>
                </MediterraneanTextImgDiv>
              </MediterraneanParagrah>{" "}
              <ViewRecipe>View Recipe</ViewRecipe>
            </MediterraneanTextDiv>
          </MediterraneanChickpeaDiv>

          <MediterraneanChickpeaDiv>
            <MediterraneanImage src={Quinoa}></MediterraneanImage>
            <MediterraneanTextDiv>
              <HeadingText>Quinoa Veggie Power Bowl</HeadingText>
              <MediterraneanParagrah>
                A balanced bowl of fluffy quinoa, roasted veggies <br /> and
                healthy fats.
                <MediterraneanTextImgDiv>
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
                  </PrepAndServingDiv>
                  <CookContainer>
                    <Servings2ImgDiv>
                      <Cook />
                    </Servings2ImgDiv>
                    <Servings2Text>Cook: 15 min</Servings2Text>
                  </CookContainer>
                </MediterraneanTextImgDiv>
              </MediterraneanParagrah>
              <ViewRecipe>View Recipe</ViewRecipe>
            </MediterraneanTextDiv>
          </MediterraneanChickpeaDiv>
        </MediterraneContainer>
        <Underline></Underline>
        <SecondFooterContainer>
          <SecondParagraph> Made with ❤️ and 🥑</SecondParagraph>
          <SecondImgContainer>
            <Intergram />
            <Bluesky />
            <Tiktok />
          </SecondImgContainer>
        </SecondFooterContainer>
      </MoreRecipesContainer>
    </>
  );
}
