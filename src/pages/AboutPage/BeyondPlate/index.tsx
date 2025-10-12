import {
  BeyondPlateContainer,
  BeyondPlateTextContainer,
  HeadingText,
  BeyondPlateParagraph,
  ListItme,
  ListItmeContainer,
  BeyondPlateImage,
} from "./styles";
import BeyondPlateImg from "../../../assets/images/image-about-beyond-the-plate-large.webp";

export default function index() {
  return (
    <div>
      <BeyondPlateContainer>
        <BeyondPlateTextContainer>
          <HeadingText>Beyond the plate</HeadingText>
          <BeyondPlateParagraph>
            We believe food is a catalyst for <br /> community and well-being.
            By sharing <br /> approachable recipes, we hope to:
          </BeyondPlateParagraph>
          <ListItmeContainer>
            <ListItme>
              Encourage family dinners and social <br /> cooking.
            </ListItme>
            <ListItme>
              Reduce reliance on single-use <br /> packaging and delivery waste.
            </ListItme>
            <ListItme>
              Spark curiosity about seasonal produce <br /> and local
              agriculture.
            </ListItme>
          </ListItmeContainer>
        </BeyondPlateTextContainer>
        <BeyondPlateImage src={BeyondPlateImg} />
        {/* <BeyondPlateImg /> */}
      </BeyondPlateContainer>
    </div>
  );
}
