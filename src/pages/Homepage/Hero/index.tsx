import {
  HealthyText,
  MainContainer,
  HealthyParagraph,
  HealthyTextContainer,
  // HealthyTextImage,
  ImageContainer,
  HeroPic,
  MainText,
} from "./styles";
import Button from "../../../components/Button";
import HeroImage from "../../../assets/images/image-home-hero-large.webp";

export default function index() {
  return (
    <div>
      <MainContainer>
        <HealthyTextContainer />
        <MainText>
          <HealthyText>Healthy meals, zero fuss</HealthyText>
          <HealthyParagraph>
            Discover eight quick, whole-food recipes that you can cook tonight
            <br /> —no processed junk, no guesswork.
          </HealthyParagraph>
          <Button>Start exploring</Button>
        </MainText>
        <ImageContainer>
          <HeroPic src={HeroImage} />
        </ImageContainer>
      </MainContainer>
    </div>
  );
}
