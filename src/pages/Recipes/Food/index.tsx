import { useNavigate } from "react-router-dom";
import {
  FoodContainer,
  MediterraneanChickpeaDiv,
  MediterraneanImage,
  MediterraneanTextDiv,
  HeadingText,
  MediterraneanParagrah,
  MediterraneanTextImgDiv,
  ServingsContainer,
  Servings2ImgDiv,
  Servings2Text,
  PrepAndServingDiv,
  CookContainer,
  MediterraneanChickpea,
  MediterraneContainer,
} from "./styles";
import Servings2Img from "../../../assets/images/icon-servings.svg";
import PrepTime from "../../../assets/images/icon-prep-time.svg";
import Cook from "../../../assets/images/icon-cook-time.svg";
import MediterraneanImg from "../../../assets/images/mediterranean-chickpea-salad-large.webp";
import AvocadoImg from "../../../assets/images/avocado-tomato-wholegrain-toast-large.webp";
import OnePan from "../../../assets/images/salmon-asparagus-large.webp";
import QuinoaImg from "../../../assets/images/quinoa-veggie-bowl-large.webp";
import SweetImg from "../../../assets/images/sweet-potato-tacos-large.webp";
import GreekImg from "../../../assets/images/greek-yogurt-large.webp";
import LentilImg from "../../../assets/images/lentil-soup-large.webp";
import BananaImg from "../../../assets/images/banana-pancakes-large.webp";
import { ViewRecipe } from "../../../components/Button/style";

export default function FoodCode() {
  const navigate = useNavigate();
  function handleView() {
    navigate("/view");
  }
  return (
    <FoodContainer>
      <MediterraneContainer>
        <MediterraneanChickpeaDiv>
          <MediterraneanImage src={MediterraneanImg}></MediterraneanImage>
          <MediterraneanTextDiv>
            <HeadingText>Mediterranean Chickpea Salad</HeadingText>
            <MediterraneanParagrah>
              A refreshing, protein-packed salad tossed in a <br /> lemon-olive
              oil dressing.
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
                    <Servings2Text>Prep: 10 mins</Servings2Text>
                  </ServingsContainer>
                </PrepAndServingDiv>
                <CookContainer>
                  <Servings2ImgDiv>
                    <Cook />
                  </Servings2ImgDiv>
                  <Servings2Text>Cook: 0 min</Servings2Text>
                </CookContainer>
              </MediterraneanTextImgDiv>
            </MediterraneanParagrah>
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpeaDiv>

        <MediterraneanChickpeaDiv>
          <MediterraneanImage src={AvocadoImg}></MediterraneanImage>
          <MediterraneanTextDiv>
            <HeadingText>Avocado & Tomato Wholegrain Toastd</HeadingText>
            <MediterraneanParagrah>
              Creamy avocado spread over toasted wholegrain <br /> bread, topped
              with juicy tomatoes.
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
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
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
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpeaDiv>
      </MediterraneContainer>

      <MediterraneContainer>
        <MediterraneanChickpeaDiv>
          <MediterraneanImage src={QuinoaImg}></MediterraneanImage>
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
                    <Servings2Text>Servings: 2</Servings2Text>
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
            </MediterraneanParagrah>{" "}
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpeaDiv>

        <MediterraneanChickpeaDiv>
          <MediterraneanImage src={SweetImg}></MediterraneanImage>
          <MediterraneanTextDiv>
            <HeadingText>Sweet Potato Black Bean Tacos</HeadingText>
            <MediterraneanParagrah>
              Smoky roasted sweet potatoes and black beans <br /> tucked into
              warm tortillas.
              <MediterraneanTextImgDiv>
                <PrepAndServingDiv>
                  <ServingsContainer>
                    <Servings2ImgDiv>
                      <Servings2Img />
                    </Servings2ImgDiv>
                    <Servings2Text>Servings: 3</Servings2Text>
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
            </MediterraneanParagrah>{" "}
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpeaDiv>

        <MediterraneanChickpeaDiv>
          <MediterraneanImage src={GreekImg}></MediterraneanImage>
          <MediterraneanTextDiv>
            <HeadingText>Greek Yogurt Berry Parfait </HeadingText>
            <MediterraneanParagrah>
              Layers of creamy yogurt, fresh berries and <br /> crunchy oats for
              a high-protein snack.
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
                  <Servings2Text>Cook: 0 min</Servings2Text>
                </CookContainer>
              </MediterraneanTextImgDiv>
            </MediterraneanParagrah>{" "}
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpeaDiv>
      </MediterraneContainer>

      <MediterraneContainer>
        <MediterraneanChickpea>
          <MediterraneanImage src={LentilImg}></MediterraneanImage>
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
                    <Servings2Text>Servings: 2</Servings2Text>
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
                  <Servings2Text>Cook: 20 min</Servings2Text>
                </CookContainer>
              </MediterraneanTextImgDiv>
            </MediterraneanParagrah>{" "}
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpea>
        <MediterraneanChickpea>
          <MediterraneanImage src={BananaImg}></MediterraneanImage>
          <MediterraneanTextDiv>
            <HeadingText>Sweet Potato Black Bean Tacos</HeadingText>
            <MediterraneanParagrah>
              Smoky roasted sweet potatoes and black beans <br /> tucked into
              warm tortillas.
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
                  <Servings2Text>Cook: 10 min</Servings2Text>
                </CookContainer>
              </MediterraneanTextImgDiv>
            </MediterraneanParagrah>{" "}
            <ViewRecipe onClick={handleView}>View Recipe</ViewRecipe>
          </MediterraneanTextDiv>
        </MediterraneanChickpea>
      </MediterraneContainer>
    </FoodContainer>
  );
}
