import { FC } from "react";
import styled from "styled-components";

const MintingBoxContainer = styled.div`
  display: flex;
  background-color: black;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  max-height: 659px;
  border: 1px solid white;
  color: white;
  margin-top: 5%;
`;
const MintingBoxChildContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 80%;
  max-height: 528px;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 106px;
  margin-top: 6%;
`;
const TitleText = styled.span`
  font-size: 40px;
`;
const MintingBox = styled.div`
  margin-top: 6%;
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MetaverseBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MultiBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const MintTitleText = styled.span`
  padding: 10px 20px;
  font-size: 23px;
  border-bottom: 1px solid white;
`;
const SupplyBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  line-height: 1.5;
`;
const SupplyText = styled.span`
  font-size: 50px;
  line-height: 1.5;
`;
const MintingFee = styled.span`
  font-size: 23px;
  height: 30%;
  padding-bottom: 20px;
`;

const Btn = styled.button`
  margin-top: 5%;
  background-color: #0350f0;
  border-radius: 45px;
  width: 16rem;
  height: 3rem;
  color: #fff;
  font-size: 1.2rem;
  font-family: "Inter", sans-serif;
  font-style: normal;
  cursor: pointer;
`;

const WhenDateBox = styled.div`
  padding: 30px;
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WhenDateTitle = styled.span`
  margin-top: 5%;
  font-size: 23px;
`;

export const MintBtn: FC = () => {
  return (
    <MintingBoxContainer>
      <MintingBoxChildContainer>
        <TitleBox>
          <TitleText>Please select what you want!</TitleText>
        </TitleBox>
        <MintingBox>
          <MetaverseBox>
            <MintTitleText>For Metaverse (.GLTF)</MintTitleText>
            <SupplyBox>
              <SupplyText>3 / 50</SupplyText>
              <MintingFee>0.02ETH + Gas</MintingFee>
              <Btn>Mint for Metaverse</Btn>
            </SupplyBox>
          </MetaverseBox>
          <MultiBox>
            <MintTitleText>For Multi-purpose (.SKP)</MintTitleText>
            <SupplyBox>
              <SupplyText>15 / 50</SupplyText>
              <MintingFee>0.5ETH + Gas</MintingFee>
              <Btn>Mint for Multi-purpose</Btn>
            </SupplyBox>
          </MultiBox>
        </MintingBox>
        <WhenDateBox>
          <WhenDateTitle>
            Donut Gagye door will be opened to public until 21 Oct, 2022
          </WhenDateTitle>
        </WhenDateBox>
      </MintingBoxChildContainer>
    </MintingBoxContainer>
  );
};
