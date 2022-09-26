import React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  height: 900px;
  min-width: 400px;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
    width: 100vh;
    height: 700px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 660px) {
    margin-top: 300px;
  }
  @media screen and (max-width: 420px) {
    margin-top: 250px;
    padding-top: 20px;
    margin-bottom: 100px;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const Section5: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
