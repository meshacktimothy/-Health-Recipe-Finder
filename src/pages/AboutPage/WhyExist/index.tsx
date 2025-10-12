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
        <HeadingText>Why we exist</HeadingText>
        <MainResoul>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>
                Cut through the noise.
              </ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                The internet is bursting with recipes, yet most busy cooks still
                default to take-
                <br />
                away or packaged foods. We curate a tight collection of
                fool-proof dishes so you <br /> can skip the scrolling and start
                cooking.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>
                Empower home kitchens.
              </ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                When you control what goes into your meals, you control how you
                feel. Every <br /> recipe is built around unrefined ingredients
                and ready in about half an hour of <br /> active prep.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
          <ThroughtheNoiseContanier>
            <ThroughtheNoiseImgDiv>
              <ThroughtheNoiseImg />
            </ThroughtheNoiseImgDiv>
            <ThroughtheNoiseText>
              <ThroughtheNoiseHeading>
                Make healthy look good.
              </ThroughtheNoiseHeading>
              <ThroughtheNoiseParagraph>
                High-resolution imagery shows you exactly what success looks
                like—because <br /> we eat with our eyes first, and confidence
                matters.
              </ThroughtheNoiseParagraph>
            </ThroughtheNoiseText>
          </ThroughtheNoiseContanier>
        </MainResoul>
      </WhyweExistContainer>
    </div>
  );
}
