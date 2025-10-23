import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const Underline = styled.hr`
  border: 1px solid ${colors.secondary03};
  margin: 80px 0px 10px 0px;
`;

export const SecondFooterContainer = styled.div`
  height: 80px;
  width: 100%;
  justify-content: space-between;
  display: flex;
  text-align: center;
`;

export const SecondParagraph = styled.p`
  font-weight: 500;
  font-size: 16px;
  letter-spacing: -0.3px;
  color: ${colors.primary01};
  margin: 35px 0px;
`;
export const SecondImgContainer = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  margin: 30px 0px;
`;
