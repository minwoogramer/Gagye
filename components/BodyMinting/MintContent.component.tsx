import { FC, useEffect } from "react";
import styled from "styled-components";
import { MintingStart } from "../../utils/Minting/GLTFMinting";
import { useRecoilValue } from "recoil";
import { WalletInfo } from "../../utils/Atoms/atoms";
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
  margin-top: 50px;
`;
const MintingBoxChildContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: 90%;
  max-height: 550px;
  margin: 0 auto;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  padding-top: 50px;
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
const MintTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  border-bottom: 1px solid white;
`;
const MintTitleText = styled.span`
  font-size: 23px;
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
  border: none;
  cursor: pointer;
  :hover {
    transition: 0.2s;
    opacity: 0.8;
  }
`;

const WhenDateBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WhenDateTitle = styled.span`
  margin: 5%;
  font-size: 23px;
`;

export const MintContent: FC = () => {
  const address: any = useRecoilValue(WalletInfo);
  return (
    <MintingBoxContainer>
      <MintingBoxChildContainer>
        <TitleBox>
          <TitleText>Please select what you want!</TitleText>
        </TitleBox>
        <MintingBox>
          <MetaverseBox>
            <MintTitleBox>
              <MintTitleText>For Metaverse (.GLTF)</MintTitleText>
            </MintTitleBox>
            <SupplyBox>
              <SupplyText>50 / 50</SupplyText>
              <MintingFee>0.02ETH + Gas</MintingFee>
              <Btn
              // onClick={async () => {
              //   await MintingStart(address);
              // }}
              >
                Mint for Metaverse
              </Btn>
            </SupplyBox>
          </MetaverseBox>
          <MultiBox>
            <MintTitleBox>
              <MintTitleText>For Multi-purpose (.SKP)</MintTitleText>
            </MintTitleBox>
            <SupplyBox>
              <SupplyText>50 / 50</SupplyText>
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
