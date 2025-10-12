import { MainContainer, InnerContainer } from "./styles";
import Header from "../../components/Header";
import Hero from "./Hero";
import FirstContainer from "./FirstContainer";
import SecondContainer from "./SecondContainer";
import Footer from "../../components/Footer";

export default function index() {
  return (
    <div>
      <MainContainer>
        <Header />
        <InnerContainer>
          <Hero />
          <FirstContainer />
          <SecondContainer />
          <Footer></Footer>
        </InnerContainer>
      </MainContainer>
    </div>
  );
}
