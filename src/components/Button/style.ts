import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const ButtonContainer = styled.button`
  font-weight: bold;
  letter-spacing: -0.5px;
  font-size: 20px;
  line-height: 140%;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.secondary01};
  cursor: pointer;
  width: 180px;
  height: 50px;
  border-radius: 10px;
  opacity: 100%;
  border: none;
`;
export const ViewRecipe = styled.button`
  font-weight: bold;
  letter-spacing: -0.3px;
  font-size: 16px;
  line-height: 140%;
  align-items: center;
  color: ${colors.white};
  background-color: ${colors.secondary01};
  cursor: pointer;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin: 0px;
`;
