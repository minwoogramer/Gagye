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
  flex-direction: col;
  justify-content: space-between;
  background-color: #000000;
  color: white;
`;

const MintingInfo = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 100px;
  margin-right: 300px;
`;

const InfoText = styled.span`
  font-size: 23px;
  margin: 5px;
  color: #fff;
`;
const CollectionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SupplyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid white;
  border-radius: 30px;
`;
const SupplyInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
`;
const SupplyInfoBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 45px;
  margin-right: 45px;
  border: 1px solid white;
`;
const SupplyInfoVolume = styled.span`
  display: inline-flex;
  justify-content: center;
  font-size: 80px;
  height: 100px;
  width: 100px;
  border: 1px solid white;
`;

const SupplyInfoName = styled.span`
  display: inline-flex;
  justify-content: space-around;

  font-size: 23px;
  margin-bottom: 15px;
  border: 1px solid white;
`;
const SupplyInfoName2 = styled.span`
  display: flex;
  font-size: 23px;
  border: 1px solid white;
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
          <InfoText>For Metaverse</InfoText>
          <InfoText>.GLTF</InfoText>
          <InfoText>Price : 0.02ETH</InfoText>
          <InfoText>For Multi-purpose</InfoText>
          <InfoText>.SKP</InfoText>
          <InfoText>Price : 0.5ETH</InfoText>
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
              <SupplyInfoName2>Supply per individual</SupplyInfoName2>
            </SupplyInfoBox2>
          </SupplyInfo>
          <InfoText>50 Collection for each version </InfoText>
        </CollectionInfo>
      </InfoBox>
      <InfoText>
        Donut Gagye door will be opened to public the mid of Oct., 2022.
      </InfoText>
    </Container>
  );
};
