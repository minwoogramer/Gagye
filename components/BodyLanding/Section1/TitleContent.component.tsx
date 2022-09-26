import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #ebecea;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  @media screen and (max-width: 1000px) {
    margin-top: 100px;
    width: 100vh;
  }
  @media screen and (max-width: 380px) {
    margin-top: 100px;
  }
`;

export const TitleContent: FC = () => {
  return (
    <Container>
      <video
        src={"./Video.mp4"}
        width="1200px"
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
