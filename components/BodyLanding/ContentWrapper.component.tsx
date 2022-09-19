import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 7%;
  background-color: #000000;
  width: 80%;
  max-width: 1200px;
  height: 4200px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ContainerProps {
  children: ReactNode;
}
export const ContentWrapper: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
