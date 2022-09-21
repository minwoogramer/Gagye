import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 35px;
  background-color: #000000;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: inherit;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 2.5rem;
  padding: 20px;
`;
const InfoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #000000;
  color: white;
  margin: 50px;
  @media screen and (max-width: 1370px) {
    flex-direction: column;
    justify-content: center;
    display: flex;
    padding: 20px;
  }
`;

const MintingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3;
  margin-right: 50px;
  margin-left: 50px;
  padding-bottom: 45px;

  @media screen and (max-width: 1370px) {
    flex-direction: row;
    align-items: center;
    display: flex;
    margin: 0 auto;
    line-height: 1;
  }
`;
const MintingInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const MintingInfoParentBox = styled.div`
  display: flex;
  flex-direction: column;
`;
//For Metaverse,  For Multi-purpose ,Price, 들어가는 컨테이너
const MintingInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;
`;
//For Metaverse,  For Multi-purpose ,Price, 들어가는 컨테이너2
const InfoText = styled.span`
  display: flex;
  justify-content: center;
  width: 230px;
  font-size: 23px;
  color: #fff;
`;
//For Metaverse,  For Multi-purpose ,Price, 텍스트
const InfoMintingTime = styled.span`
  height: 100%;
  font-size: 23px;
  color: #fff;
`;

const CollectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin-top: 5%;
  }
`;
const SupplyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid white;
  border-radius: 30px;
  width: 524px;
  height: 191px;
`;
const SupplyInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const SupplyInfoBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const SupplyInfoVolume = styled.span`
  display: inline-flex;
  justify-content: center;
  font-size: 80px;
  height: 100px;
  width: 176px;
`;

const SupplyInfoName = styled.span`
  display: flex;
  justify-content: center;
  font-size: 23px;
  height: 70px;
  width: 176px;
`;
const SupplyBox = styled.div`
  display: flex;
  justify-content: center;
  font-size: 23px;
  height: 70px;
  width: 176px;
  flex-direction: column;
`;
const SupplyText = styled.span`
  margin-top: 10px;
  font-size: 23px;
  color: #fff;
`;
export const MintInfoContent: FC = () => {
  return (
    <Container>
      <Title>
        Donut Gagye is an architecture NFT for utilization of not only personal
        collection but also metaverse and real world.
      </Title>
      <InfoBox>
        <MintingInfo>
          <MintingInfoContainer>
            <MintingInfoParentBox>
              <InfoText>For Metaverse</InfoText>
              <MintingInfoBox>
                <InfoText>.GLTF</InfoText>
                <InfoText>Price : 0.02ETH</InfoText>
              </MintingInfoBox>
            </MintingInfoParentBox>
            <MintingInfoParentBox>
              <InfoText>For Multi-purpose</InfoText>
              <MintingInfoBox>
                <InfoText>.SKP</InfoText>
                <InfoText>Price : 0.5ETH</InfoText>
              </MintingInfoBox>
            </MintingInfoParentBox>
          </MintingInfoContainer>
        </MintingInfo>
        <CollectionInfo>
          <SupplyInfo>
            <SupplyInfoBox>
              <SupplyInfoVolume>50</SupplyInfoVolume>
              <SupplyInfoVolume>1</SupplyInfoVolume>
              <SupplyInfoVolume>1</SupplyInfoVolume>
            </SupplyInfoBox>
            <SupplyInfoBox2>
              <SupplyInfoName>Collection</SupplyInfoName>
              <SupplyInfoName>Supply</SupplyInfoName>
              <SupplyBox>
                <SupplyInfoName>Supply per</SupplyInfoName>
                <SupplyInfoName>individual</SupplyInfoName>
              </SupplyBox>
            </SupplyInfoBox2>
          </SupplyInfo>
          <SupplyText>50 Collection for each version </SupplyText>
        </CollectionInfo>
      </InfoBox>
      <InfoMintingTime>
        Donut Gagye door will be opened to public the mid of Oct., 2022.
      </InfoMintingTime>
    </Container>
  );
};
