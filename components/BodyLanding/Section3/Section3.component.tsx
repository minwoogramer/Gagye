import React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  min-width: 420px;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
  @media screen and (max-width: 1120px) {
    margin-top: 500px;
    width: 100vh;
  }
  @media screen and (max-width: 660px) {
    margin-top: 500px;
  }
  @media screen and (max-width: 400px) {
    margin-top: 600px;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const Section3: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
