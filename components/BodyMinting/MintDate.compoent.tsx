import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const MintingDateContainer = styled.div`
  display: flex;
  background-color: black;
  width: 80%;
  max-width: 1200px;
  height: 50%;
  max-height: 100px;
  color: white;
  margin: 0 auto;
  background-color: #000000;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    margin-top: 20px;
    height: 200px;
  }
`;
export const MintDate: FC = () => {
  return <MintingDateContainer>Date</MintingDateContainer>;
};
