import Header from "../../components/Header";
import Hero from "./Hero";
import Food from "./Food";
import {
  Underline,
  SecondFooterContainer,
  SecondImgContainer,
  SecondParagraph,
} from "./styles";
import { InnerContainer, MainContainer } from "../Homepage/styles";

import Intergram from "../../assets/images/icon-instagram.svg";
import Bluesky from "../../assets/images/icon-bluesky.svg";
import Tiktok from "../../assets/images/icon-tiktok.svg";
import Dropdown from "./Dropdown";
export default function index() {
  return (
    <div>
      <MainContainer>
        <Header />
        <InnerContainer>
          <Hero />
          <Dropdown />
          <Food />
        </InnerContainer>
        <Underline></Underline>
        <InnerContainer>
          <SecondFooterContainer>
            <SecondParagraph>Made with ❤️ and 🥑</SecondParagraph>
            <SecondImgContainer>
              <Intergram />
              <Bluesky />
              <Tiktok />
            </SecondImgContainer>
          </SecondFooterContainer>
        </InnerContainer>
      </MainContainer>
    </div>
  );
}
