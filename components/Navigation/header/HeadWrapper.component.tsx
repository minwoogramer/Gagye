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
  height: 10%;
  box-sizing: border-box;
  background-color: #000000;
  gap: 10px;
  z-index: 1;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HeadWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
