import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
interface HeadProps {}

const HeaderLogo = styled.div`
  border: none;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    font-weight: 600;
    opacity: 1;
  }
`;

export const HeadLogo: FC<HeadProps> = () => {
  return <HeaderLogo>Syntegrate</HeaderLogo>;
};
