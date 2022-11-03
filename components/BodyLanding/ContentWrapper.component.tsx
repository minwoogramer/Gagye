import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 7%;
  background-color: #000000;
  width: 100%;
  max-width: 1200px;
  height: 5500px;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
`;

interface ContainerProps {
  children: ReactNode;
}
export const ContentWrapper: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
