import {
  HeroContainer,
  TextContainer,
  OurMission,
  HeadingText,
  ParagraphText,
  OurMissionImage,
} from "./styles";
import OurMissionImg from "../../../assets/images/image-about-our-mission-large.webp";

export default function index() {
  return (
    <div>
      <HeroContainer>
        <TextContainer>
          <OurMission>Our mission</OurMission>
          <HeadingText>
            Help more people cook <br /> nourishing meals, <br /> more often.
          </HeadingText>
          <ParagraphText>
            Healthy Recipe Finder was created to prove that healthy <br />
            eating can be convenient, affordable, and genuinely <br />
            delicious.
          </ParagraphText>
          <ParagraphText>
            We showcase quick, whole-food dishes that anyone can <br />
            master—no fancy equipment, no ultra-processed shortcuts <br />
            —just honest ingredients and straightforward steps.
          </ParagraphText>
        </TextContainer>
        <OurMissionImage src={OurMissionImg} />
      </HeroContainer>
    </div>
  );
}
