import { FC, ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 35px;
  background-color: #ebecea;
  width: 1800px;
  height: 1620px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ContainerProps {
  children: ReactNode;
}
export const MintWrapper: FC<ContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
