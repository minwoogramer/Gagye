import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000;
  width: 100%;
  min-width: 420px;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    justify-content: flex-start;
    align-items: center;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const Section1: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
