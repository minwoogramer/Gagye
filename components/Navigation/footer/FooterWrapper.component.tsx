import { FC, ReactNode } from "react";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const FootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000000;
  height: 175px;
  width: 80%;
  max-width: 1200px;
  margin-top: 30px;
  color: white;
  bottom: 0;
  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const FootWrapper: FC<ContainerProps> = ({ children }) => {
  return <FootContainer>{children}</FootContainer>;
};
