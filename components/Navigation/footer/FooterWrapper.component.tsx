import { FC, ReactNode } from "react";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const FootContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000;
  height: 175px;
  width: 100%;
  margin-top: 30px;
  padding-left: 10%;
  padding-right: 10%;
  color: white;
`;

export const FootWrapper: FC<ContainerProps> = ({ children }) => {
  return <FootContainer>{children}</FootContainer>;
};
