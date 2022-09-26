import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
interface HeadProps {}

const HeaderLogo = styled.div`
  color: #ffffff;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 0rem;
  @media screen and (max-width: 800px) {
    margin-top: 1rem;
    font-size: 3.5rem;
  }
`;

export const HeadLogo: FC<HeadProps> = () => {
  return <HeaderLogo>Donut Gagye</HeaderLogo>;
};
