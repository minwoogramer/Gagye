import { ReactElement, useState, useEffect, ReactNode, FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

interface ContainerProps {
  children: ReactNode;
}

const HeaderContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 12%;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: #000;
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 1000px) {
    height: 7%;
  }
`;

export const HeadWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
