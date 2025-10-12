import Header from "../../components/Header";
import Hero from "./Hero";
import { Underline } from "./styles";
import { InnerContainer, MainContainer } from "../Homepage/styles";
import WhyExist from "./WhyExist";
import OurFood from "./OurFood";
import BeyondPlate from "./BeyondPlate";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <div>
      <MainContainer>
        <Header></Header>
        <InnerContainer>
          <Hero />
        </InnerContainer>
        <Underline></Underline>
        <InnerContainer>
          <WhyExist />
          <OurFood />
        </InnerContainer>
        <Underline></Underline>
        <InnerContainer>
          <BeyondPlate />
          <Footer />
        </InnerContainer>
      </MainContainer>
    </div>
  );
}
