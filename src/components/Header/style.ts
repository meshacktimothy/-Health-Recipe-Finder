import styled from "@emotion/styled";
import colors from "../../styles/colors";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
// width:100%;
height:100px;
opacity:100%;
background:${colors.secondary04};
padding:0px 50px;
display:flex;
  justify-content: space-between;
  align-items: center;
`;
export const LogoImage = styled.img``
export const HeaderLinkDiv = styled.div`
`;
export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary01};
  font-size: 18px;
  letter-spacing: -0.3px;
  line-height: 150%;
  opacity: 1;
  font-weight: 600;
  position: relative;

  &::before {
    content: "";
    background: ${colors.secondary02};
    height: 2px;
    width: 0;
    position: absolute;
    top: 22px;
    right: 0;
    border-radius:5px;
}
    &:hover::before{
  width:100%;
  transition:0.5s;
  }
`;


export const AnotherList = styled.ul`
  `;
export const ListItem = styled.li`
  display:flex;
  gap:50px;
  list-type:none;

`;
export const Line = styled.hr`
border:1px solid ${colors.secondary03};
margin-top:0px;
`

