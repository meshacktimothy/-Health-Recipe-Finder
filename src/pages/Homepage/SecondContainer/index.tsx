import {
  SecondContainerDiv,
  TextContainer,
  Textheading,
  FirstParagraph,
  BuiltRealImg,
  LogoContainer,
} from "./styles";
import RealBuilt from "../../../assets/images/image-home-real-life-large.webp";

export default function SecondContainer() {
  return (
    <SecondContainerDiv>
      <LogoContainer />
      <TextContainer>
        <Textheading>Built for real life</Textheading>
        <FirstParagraph>
          Cooking shouldn’t be complicated. These recipes come in <br /> under
          30 minutes of active time, fit busy schedules, and <br /> taste good
          enough to repeat.
        </FirstParagraph>
        <FirstParagraph>
          Whether you’re new to the kitchen or just need fresh <br /> ideas,
          we’ve got you covered.
        </FirstParagraph>
      </TextContainer>

      <BuiltRealImg src={RealBuilt} alt="Real life cooking" />
    </SecondContainerDiv>
  );
}
