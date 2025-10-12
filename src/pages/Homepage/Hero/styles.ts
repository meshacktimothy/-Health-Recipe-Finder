import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const HealthyText = styled.h1`
  text-align: center;
  // position: absolute;
  margin-top: 0px;
  line-height: 110%;
  font-size: 72px;
  letter-spacing: -2px;
  font-weight: 800;
  margin-bottom: 0px;
  color: ${colors.secondary01};
  z-index: 2px;
`;
export const MainContainer = styled.div`
  margin: 50px 0px;
  height: auto;
  text-align: center;
`;
export const HealthyParagraph = styled.p`
  color: ${colors.primary01};
`;
export const HealthyTextImage = styled.div`
  width: 175px;
  height: 40px;
  margin-top: 100px;
  background: ${colors.secondary02};
  position: relative;
`;
export const ImageContainer = styled.div`
  width: 100%;
  padding: 10px;
  max-width: 1104px;
  border-radius: 10px;
  margin-top: 50px;
  background: ${colors.white};
`;
export const HeroPic = styled.img`
  width: 100%;
  border-radius: 10px;
`;
export const HealthyTextContainer = styled.div`
  margin-bottom: 0px;
  background-color: ${colors.secondary02};
  height: 40px;
  border-radius: 5px;
  position: absolute;
  width: 270px;
  margin: 40px 0px 0px 165px;
  opacity: 40%;
`;
export const MainText = styled.div`
  position: relative;
`;
