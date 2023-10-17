import { ReactElement, useState, useEffect, ReactNode, FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const HeaderContainer = styled.div`
  background-color: #0000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 1210px;
  max-width: 1400px;
  height: auto;
  @media screen and (max-width: 1600px) {
    min-width: 1210px;
  }
  @media screen and (max-width: 1400px) {
    min-width: 1210px;
  }
  @media screen and (max-width: 1300px) {
    min-width: 420px;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
export const HeadLChildWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
