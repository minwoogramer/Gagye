import { NextPage } from "next";
import styled from "styled-components";
import { NFTCard } from "../components/BodyMinting/NFTCard.component";
import { Header } from "./../Layouts/Header";

const MintingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

const MintingPage: NextPage = () => {
  return (
    <MintingContainer>
      <Header />
      <NFTCard />
    </MintingContainer>
  );
};
export default MintingPage;
