import { ReactElement, useState, useEffect, ReactNode, FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const HeaderContainer = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  gap: 10px;
  max-width: 1200px;
  width: 80%;
  height: 100%;
`;
export const HeadLChildWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
