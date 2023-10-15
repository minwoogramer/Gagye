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
  min-width: 420px;
  height: 100px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255, 1);
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 1000px) {
    height: 100px;
  }
  @media screen and (max-width: 500px) {
    height: 7%;
  }
`;

export const HeadWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
