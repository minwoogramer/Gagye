import { NextPage } from "next";
import styled from "styled-components";
import { Header } from "../Layouts/Header";
import { BodyMinting } from "./../Layouts/BodyMinting";

const MintingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Minting: NextPage = () => {
  return (
    <MintingContainer>
      <BodyMinting />
    </MintingContainer>
  );
};
export default Minting;
