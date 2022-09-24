import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #000000;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    height: 20%;
  }
  @media screen and (max-width: 650px) {
    margin-top: 5%;
  }
  @media screen and (max-width: 500px) {
    margin-top: 10%;
  }
  @media screen and (max-width: 400px) {
    margin-top: 13%;
  }
`;

const Properties = styled.div`
  width: 1250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin-left: 0.2%;
  margin-right: 0.2%;
`;
const PropertiesText = styled.span`
  padding-top: 10%;
  color: #ffff;
  font-size: 20px;
`;

export const PropertiesContent: FC = () => {
  return (
    <Container>
      <Properties>
        <Img
          src="/Property1.png"
          width={236}
          height={120}
          alt="Column"
          layout="intrinsic"
        />
        <PropertiesText>Column</PropertiesText>
      </Properties>
      <Properties>
        <Img
          src="/Property2.png"
          width={236}
          height={120}
          alt="Wall"
          layout="intrinsic"
        />
        <PropertiesText>Wall</PropertiesText>
      </Properties>
      <Properties>
        <Img
          src="/Property3.png"
          width={236}
          height={120}
          alt="Roof Design"
          layout="intrinsic"
        />
        <PropertiesText>Roof Design</PropertiesText>
      </Properties>
      <Properties>
        <Img
          src="/Property4.png"
          width={236}
          height={120}
          alt="Sunshade"
          layout="intrinsic"
        />
        <PropertiesText>Sunshade</PropertiesText>
      </Properties>
      <Properties>
        <Img
          src="/Property5.png"
          width={236}
          height={120}
          alt="Doughnut"
          layout="intrinsic"
        />
        <PropertiesText>Doughnut</PropertiesText>
      </Properties>
    </Container>
  );
};
//Properties 이미지 5개 Text 5개 들어감
