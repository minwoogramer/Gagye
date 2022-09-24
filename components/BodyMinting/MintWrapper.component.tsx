import { FC, ReactNode } from "react";
import styled from "styled-components";
import { atom } from "recoil";

const Container = styled.div`
  display: flex;
  margin-top: 5%;
  background-color: black;
  width: 100%;
  height: 100%;
  max-width: 1800px;
  height: 900px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    margin-top: 200px;
    height: 100vw;
  }
  @media screen and (max-width: 520px) {
    width: 100vh;
    margin-top: 200px;
    height: 130vw;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const MintWrapper: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
