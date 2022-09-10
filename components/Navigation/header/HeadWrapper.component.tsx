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
  box-sizing: border-box;
  justify-content: space-between;
  background-color: #7e7d7dee;
  align-items: center;
  gap: 10px;
  z-index: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;

export const HeadWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
