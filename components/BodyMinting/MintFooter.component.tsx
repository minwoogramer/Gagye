import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const MintingBoxContainer = styled.div`
  display: flex;
  background-color: black;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 230px;
  color: white;
  margin: 0 auto;
  line-height: 5;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    margin-top: 20px;
    height: 100%;
  }
`;
const FooterContentText = styled.span`
  margin: 0;
`;
export const MintFooter: FC = () => {
  return (
    <MintingBoxContainer>
      <Img
        src="/Images/Wyzrs.png"
        width={136}
        height={38.91}
        alt="logo"
        layout="intrinsic"
      ></Img>
      <FooterContentText>
        ⓒ 2022. Wyzrs Co., Ltd. All rights reserved.
      </FooterContentText>
    </MintingBoxContainer>
  );
};
