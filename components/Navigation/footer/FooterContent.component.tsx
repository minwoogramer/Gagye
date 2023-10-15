import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface FooterProps {}

const FooterContentContainer = styled.div`
  display: flex;
  color: #ffffff;
  width: 100%;
`;
const FooterContentBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  font-size: 15px;
  margin: 0;
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
const LogoContentUl = styled.ul`
  display: flex;
  width: 40%;
`;
const LogoContentLi = styled.li`
  color: #ffff;
  list-style: none;
  font-size: 30px;
`;
export const FooterContent: FC<FooterProps> = () => {
  return (
    <FooterContentContainer>
      <FooterContentBox>
        <FooterContentBox2>
          <FooterContentText>
            © 2023 Wyzrs. All rights reserved.
          </FooterContentText>
          <FooterContentText>
            Terms and Conditions · License Terms · Privacy Policy
          </FooterContentText>
        </FooterContentBox2>
      </FooterContentBox>
      <LogoContentUl>
        <LogoContentLi>
          <FontAwesomeIcon icon={faDiscord} />
        </LogoContentLi>
        <LogoContentLi>
          <FontAwesomeIcon icon={faInstagram} />
        </LogoContentLi>
        <LogoContentLi>
          <FontAwesomeIcon icon={faTwitter} />
        </LogoContentLi>
        <LogoContentLi>
          <FontAwesomeIcon icon={faLinkedin} />
        </LogoContentLi>
      </LogoContentUl>
    </FooterContentContainer>
  );
};
