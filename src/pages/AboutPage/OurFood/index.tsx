import {
  WhyweExistContainer,
  HeadingText,
  MainResoul,
  ThroughtheNoiseContanier,
  ThroughtheNoiseText,
  ThroughtheNoiseHeading,
  ThroughtheNoiseParagraph,
  ThroughtheNoiseImgDiv,
} from "./styles";
import ThroughtheNoiseImg from "../../../assets/images/icon-bullet-point.svg";

export default function index() {
  return (
    <div>
      <WhyweExistContainer>
        <HeadingText>Our food philosophy</HeadingText>
        <MainResoul>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>
                Whole ingredients first.
              </ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                Fresh produce, grains, legumes, herbs, and quality fats form the
                backbone of <br /> every recipe.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>
                Flavor without compromise.
              </ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                Spices, citrus, and natural sweetness replace excess salt,
                sugar, and additives.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>Respect for time.</ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                Weeknight meals should slot into real schedules; weekend cooking
                can be <br /> leisurely but never wasteful.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>
                Sustainable choices.
              </ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                Short ingredient lists cut down on food waste and carbon
                footprint, while plant- <br />
                forward dishes keep things planet-friendly.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
        </MainResoul>
      </WhyweExistContainer>
    </div>
  );
}
