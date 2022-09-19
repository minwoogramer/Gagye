import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #ebecea;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const TitleContent: FC = () => {
  return <Container>영상이 들어갈 자리입니다.</Container>;
};
