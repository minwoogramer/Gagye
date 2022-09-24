import React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  @media screen and (max-width: 1000px) {
    margin-top: 400px;
    width: 100vh;
    height: 30%;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const Section2: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};