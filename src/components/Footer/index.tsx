import {
  MainFooterContainer,
  FirstFooterContainer,
  SecondFooterContainer,
  KnifeImg,
  ForkImg,
  HeadingText,
  TextContainer,
  ParagraphText,
  SecondParagraph,
  SecondImgContainer,
} from "./style";
import Fork from "../../assets/images/pattern-fork.svg";
import Knife from "../../assets/images/pattern-knife.svg";
import Button from "../Button";
import Intergram from "../../assets/images/icon-instagram.svg";
import Bluesky from "../../assets/images/icon-bluesky.svg";
import Tiktok from "../../assets/images/icon-tiktok.svg";

export default function index() {
  return (
    <div>
      <MainFooterContainer>
        <FirstFooterContainer>
          <KnifeImg>
            <Knife></Knife>
          </KnifeImg>
          <ForkImg>
            <Fork></Fork>
          </ForkImg>
          <TextContainer>
            <HeadingText>Ready to cook smarter?</HeadingText>
            <ParagraphText>
              Hit the button, pick a recipe, and get dinner on the table—fast.
            </ParagraphText>
            <Button>Browse recipes</Button>
          </TextContainer>
        </FirstFooterContainer>
        <SecondFooterContainer>
          <SecondParagraph>Made with ❤️ and 🥑</SecondParagraph>
          <SecondImgContainer>
            <Intergram />
            <Bluesky />
            <Tiktok />
          </SecondImgContainer>
        </SecondFooterContainer>
      </MainFooterContainer>
    </div>
  );
}
