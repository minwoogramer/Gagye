import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
interface FooterProps {}

const FooterContentContainer = styled.div`
  color: #ffffff;
  width: 80%;
`;
const FooterContentBox = styled.div`
  font-size: 15px;
  display: flex;
  flex-direction: column;
`;
const FooterContentBox2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin: 0;
`;
const FooterContentText = styled.span`
  margin: 0;
`;
export const FooterContent: FC<FooterProps> = () => {
  return (
    <FooterContentContainer>
      <Img
        src="/Images/Wyzrs.png"
        width={136}
        height={38.91}
        alt="logo"
        layout="intrinsic"
      ></Img>
      <FooterContentBox>
        <FooterContentBox2>
          <FooterContentText>labs@wyzrs.com</FooterContentText>
          <FooterContentText>www.wyzrs.com</FooterContentText>
        </FooterContentBox2>
        <FooterContentBox2>
          <FooterContentText>
            Wyzrs is an idea factory to make a positive impact on the building
            industry by leveraging new and beneficial technologies.
          </FooterContentText>
          <FooterContentText>
            We do not hesitate to experiment and introduce new things.
          </FooterContentText>
        </FooterContentBox2>
        <FooterContentBox2>
          <FooterContentText>
            ⓒ 2022. Wyzrs Co., Ltd. All rights reserved.
          </FooterContentText>
        </FooterContentBox2>
      </FooterContentBox>
    </FooterContentContainer>
  );
};
