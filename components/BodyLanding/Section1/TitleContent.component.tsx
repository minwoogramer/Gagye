import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #ebecea;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    margin-top: 10%;
    width: 100vh;
  }
  @media screen and (max-width: 380px) {
    margin-top: 20%;
  }
`;

export const TitleContent: FC = () => {
  return (
    <Container>
      <Img
        src="/VIDEO.png"
        width={2000}
        height={800}
        alt="video"
        layout="intrinsic"
      />
    </Container>
  );
};
