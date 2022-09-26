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
      <video
        src={"./Video.mp4"}
        width="2000px"
        height="auto"
        autoPlay
        muted
        controls
        data-keepplaying
        id="title-play"
      />
    </Container>
  );
};
