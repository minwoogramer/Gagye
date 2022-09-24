import { FC } from "react";
import styled from "styled-components";
import Img from "next/image";
const Container = styled.div`
  display: flex;
  background-color: #000;
  width: 100%;
  height: 20%;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 100vh;
    height: 20%;
    margin-top: 20px;
  }
`;
const SampleBox = styled.div``;
export const SampleContent: FC = () => {
  return (
    <Container>
      <SampleBox>
        <Img
          src="/SampleImg1.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/SampleImg2.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/SampleImg3.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/SampleImg4.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/SampleImg5.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/SampleImg6.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/SampleImg7.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/SampleImg8.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
      <SampleBox>
        <Img
          src="/SampleImg9.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
        <Img
          src="/SampleImg10.png"
          width={236}
          height={140}
          alt="Column"
          layout="intrinsic"
        />
      </SampleBox>
    </Container>
  );
};
//이미지는 각각 2개씩 5개가 들어감
