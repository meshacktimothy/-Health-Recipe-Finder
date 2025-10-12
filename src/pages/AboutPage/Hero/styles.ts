import colors from "../../../styles/colors";
import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 70px 0px;
`;
export const TextContainer = styled.div`
  // background:yellow;
  margin: 50px 0px;
`;
export const OurMission = styled.p`
  font-weight: bold;
  font-size: 20px;
  letter-spacing: -0.5px;
  color: ${colors.primary01};
  background: ${colors.secondary02};
  width: 120px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const HeadingText = styled.h1`
  font-weight: 800;
  font-size: 48px;
  letter-spacing: -2px;
  color: ${colors.primary01};
`;
export const ParagraphText = styled.p`
  font-weight: 500;
  letter-spacing: -0.4px;
  font-size: 20px;
  color: ${colors.primary02};
  margin-top: 0px;
`;
export const OurMissionImage = styled.img`
  width: 50%;
  border-radius: 10px;
`;
// export const HeroContainer = styled.div``;
