import { ReactElement, useState, useEffect, ReactNode, FC } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
interface ContainerProps {
  children: ReactNode;
}

const HeadSubTitleWrapperContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0;
`;
export const HeadSubTitleWrapper: FC<ContainerProps> = ({ children }) => {
  return (
    <HeadSubTitleWrapperContainer>{children}</HeadSubTitleWrapperContainer>
  );
};
