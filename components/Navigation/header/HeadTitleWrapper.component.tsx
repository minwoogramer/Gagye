import { ReactNode, FC } from "react";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-contents: flex-start;
  margin: 0;
  height: auto;
  @media screen and (max-width: 1600px) {
    min-width: 1210px;
  }
  @media screen and (max-width: 1400px) {
    min-width: 1210px;
  }
  @media screen and (max-width: 1300px) {
    min-width: 420px;
    width: 100%;
  }

  @media screen and (max-width: 380px) {
    width: 100%;
  }
`;
export const HeadLTitleWrapper: FC<ContainerProps> = ({ children }) => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
