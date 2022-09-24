import React from "react";
import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 1000px) {
    margin-top: 50px;
    width: 100vh;
    height: 100%;
    margin-bottom: 20px;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const Section5: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
