import { FC } from "react";
import styled from "styled-components";

const MintingBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 1200px;
  height: 100%;
  max-height: 700px;
  border: 1px solid white;
  color: white;
`;
const MintingBoxChildContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 80%;
  max-height: 528px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 106px;
`;
const TitleText = styled.span`
  font-size: 40px;
`;
const MintingBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MetaverseBox = styled.div``;
const MultiBox = styled.div``;
const MintTitleText = styled.span`
  font-size: 23px;
  border-bottom: 1px solid white;
`;
const SupplyBox = styled.div``;
const SupplyText = styled.span`
  font-size: 50px;
`;
const MintingFee = styled.span`
  font-size: 23px;
`;

const Btn = styled.button`
  background-color: #0350f0;
  border-radius: 45px;
  width: 16rem;
  height: 3rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

const WhenDateBox = styled.div``;
const WhenDateTitle = styled.span`
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
              <Btn>Mint for Metaverse 버튼</Btn>
            </SupplyBox>
          </MetaverseBox>
          <MultiBox>
            <MintTitleText>For Multi-purpose (.SKP)</MintTitleText>
            <SupplyBox>
              <SupplyText>15 / 50</SupplyText>
              <SupplyText>0.5ETH + Gas</SupplyText>
              <Btn>Mint for Multi-purpose 버튼</Btn>
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
