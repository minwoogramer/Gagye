import { ReactElement, useState, useEffect, ReactNode, FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const HeaderContainer = styled.div`
  background-color: #000000;
  display: flex;
  align-items: center;
  min-width: 320px;
  width: 100%;
  height: auto;
`;
export const HeadLChildWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
