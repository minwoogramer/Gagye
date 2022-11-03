import { FC } from "react";
import styled from "styled-components";
interface HeadProps {}

const HeaderLogo = styled.div`
  color: #ffffff;
  font-size: 4rem;
  margin-bottom: 1rem;
  margin: 0;
  min-width: 4rem;
  height: auto;
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 500px) {
    margin-top: 0rem;
    font-size: 3rem;
  }
`;

export const HeadLogo: FC<HeadProps> = () => {
  return <HeaderLogo>Donut Gagye</HeaderLogo>;
};
