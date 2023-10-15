import { FC } from "react";
import styled from "styled-components";
interface HeadProps {}
const HeaderSubTiltle = styled.div`
  color: #ffffff;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  margin: 0;
  min-width: 4rem;
  height: auto;
  color: #000;
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 380px) {
    margin-top: 0rem;
    font-size: 3rem;
  }
`;

export const HeadSubTitle: FC<HeadProps> = () => {
  return (
    <HeaderSubTiltle>
      3D architecture NFT for virtual and real world.
    </HeaderSubTiltle>
  );
};
