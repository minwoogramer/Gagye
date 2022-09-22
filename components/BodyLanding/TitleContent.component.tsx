import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  margin-top: 5%;
  display: flex;
  background-color: #ebecea;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const TitleContent: FC = () => {
  return (
    <Container>
      <Img
        src="/Images/VIDEO (With Realistic View).png"
        width={2000}
        height={800}
        alt="video"
        layout="fixed"
      />
    </Container>
  );
};
