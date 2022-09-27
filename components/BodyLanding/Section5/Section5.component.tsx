import React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  height: 800px;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  @media screen and (max-width: 1120px) {
    margin-top: 50px;
    width: 100vh;
    height: 700px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 660px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 420px) {
    margin-top: 500px;
    padding-top: 20px;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const Section5: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
