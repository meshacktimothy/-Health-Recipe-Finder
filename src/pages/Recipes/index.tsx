import Header from "../../components/Header";
import Hero from "./Hero";
import Food from "./Food";
import { InnerContainer, MainContainer } from "../Homepage/styles";

export default function index() {
  return (
    <div>
      <MainContainer>
        <Header />
        <InnerContainer>
          <Hero />
          <Food />
        </InnerContainer>
      </MainContainer>
    </div>
  );
}
