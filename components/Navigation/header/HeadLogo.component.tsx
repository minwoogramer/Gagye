import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
interface HeadProps {}

const HeaderLogo = styled.div`
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  margin: 0;
  padding-right: 0.5rem;
  height: auto;
  display: flex;
  justify-center: flex-start;
  @media screen and (max-width: 800px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 380px) {
    margin-top: 0rem;
    font-size: 3rem;
  }
`;

export const HeadLogo: FC<HeadProps> = () => {
  return (
    <HeaderLogo>
      <Image src="/logo/gagyelogo.png" width={30} height={30} alt="" />
    </HeaderLogo>
  );
};
