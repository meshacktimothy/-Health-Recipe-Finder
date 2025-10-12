import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainFooterContainer = styled.div`
width:100%;
height:70vh;

`;
export const FirstFooterContainer = styled.div`
background-color:${colors.secondary05};
border-radius:10px;
height:80%;
width:100%;
overflow: hidden;
position:relative;

`;
export const KnifeImg = styled.div`
margin-left:53rem;
position:absolute;

`;
export const ForkImg = styled.div`
position:absolute;
margin-left:-4rem;
transform: rotate(11deg);

`;
export const HeadingText = styled.h1`
font-weight:800;
font-size:48px;
letter-spacing:-3px;
color:${colors.secondary01};
`;
export const ParagraphText = styled.p`
font-weight:500;
font-size:20px;
letter-spacing:-0.4px;
color:${colors.primary02};
`;
export const TextContainer = styled.div`
position:absolute;
text-align:center;
margin:50px 0%;
width:100%;
`;
export const SecondFooterContainer = styled.div`
height:80px;
width:100%;
justify-content: space-between;
display: flex;
text-align: center;
`;


export const SecondParagraph = styled.p`
font-weight:500;
font-size:16px;
letter-spacing:-0.3px;
color:${colors.primary01};
margin:35px 0px;

`;
export const SecondImgContainer = styled.div`
display:flex;
gap:20px;
cursor:pointer;
margin:30px 0px;

`;