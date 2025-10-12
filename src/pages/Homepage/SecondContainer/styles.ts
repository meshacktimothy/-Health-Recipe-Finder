import styled from "@emotion/styled";
import colors from "../../../styles/colors";

export const SecondContainerDiv = styled.div`
display:flex;
height:70vh;
   justify-content: space-between;
   align-items: center;
   gap:20px;
   max-width:100%;
margin:50px 0px;
height:100vh;
`;
export const TextContainer = styled.div`

    `
export const Textheading = styled.h1`
 font-size: 48px;
    font-weight: 800;
    letter-spacing: -3px;
    color:${colors.secondary01};
    `
export const FirstParagraph = styled.p`
color:${colors.primary02};
 font-weight: 500;
    font-size: 20px;
    letter-spacing: -0.4px;
    position:relative;
`
export const BuiltRealImg = styled.img`
width:500px;
border-radius:20px;
`;
export const LogoContainer = styled.div`
background-color:${colors.secondary02};
height:15px;
border-radius:5px;
position:absolute;
width:100px;
margin:40px 0px 0px 55px;
`
